/* ═══════════════════════════════════════════════
   BROCE™ Constellation Background (Optimized)
   ═══════════════════════════════════════════════
   Renders an animated particle network on a
   <canvas> that reacts to the mouse cursor.
   
   Performance optimizations:
   • Spatial grid for O(n) connection lookups (was O(n²))
   • Pooled event listener with proper cleanup
   • requestAnimationFrame with visibility check
   • Device pixel ratio capping for perf
   • Reduced particle count on mobile
   ═══════════════════════════════════════════════ */

const CONNECTION_DIST = 140;
const MOUSE_REPEL_DIST = 180;
const MOUSE_FORCE = 0.04;
const GRID_CELL_SIZE = CONNECTION_DIST; // spatial partitioning

let canvas, ctx;
let particles = [];
let mouse = { x: -1000, y: -1000 };
let raf = null;
let dpr = 1;
let isVisible = true;

// Store event handlers for proper cleanup
let onResize = null;
let onMouseMove = null;
let onVisibilityChange = null;
let canvasObserver = null;
let isCanvasInView = true;

class Particle {
    constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.8 + 0.6;
        this.alpha = Math.random() * 0.5 + 0.15;
    }

    update(w, h) {
        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const repelDistSq = MOUSE_REPEL_DIST * MOUSE_REPEL_DIST;

        if (distSq < repelDistSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST * MOUSE_FORCE;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
        }

        // Damping
        this.vx *= 0.992;
        this.vy *= 0.992;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
    }
}

/**
 * Spatial grid for O(n) neighbor lookups instead of O(n²)
 */
function buildGrid(w, h) {
    const cols = Math.ceil(w / GRID_CELL_SIZE) + 1;
    const rows = Math.ceil(h / GRID_CELL_SIZE) + 1;
    const grid = new Array(cols * rows);

    for (let i = 0; i < grid.length; i++) grid[i] = [];

    for (const p of particles) {
        const cx = Math.floor(p.x / GRID_CELL_SIZE);
        const cy = Math.floor(p.y / GRID_CELL_SIZE);
        const idx = cy * cols + cx;
        if (idx >= 0 && idx < grid.length) {
            grid[idx].push(p);
        }
    }

    return { grid, cols, rows };
}

function draw() {
    if (!canvas || !isVisible || !isCanvasInView) {
        raf = requestAnimationFrame(draw);
        return;
    }

    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update particles
    for (const p of particles) {
        p.update(w, h);
    }

    // Build spatial grid
    const { grid, cols, rows } = buildGrid(w, h);
    const connDistSq = CONNECTION_DIST * CONNECTION_DIST;

    // Draw connections using spatial grid (check neighboring cells only)
    ctx.lineWidth = 0.6;
    for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
            const cell = grid[cy * cols + cx];
            if (!cell.length) continue;

            // Check current cell and right/bottom/diagonal neighbors
            for (let ny = cy; ny <= Math.min(cy + 1, rows - 1); ny++) {
                for (let nx = (ny === cy ? cx : cx - 1); nx <= Math.min(cx + 1, cols - 1); nx++) {
                    if (nx < 0) continue;
                    const neighborCell = grid[ny * cols + nx];
                    if (!neighborCell.length) continue;

                    for (const p1 of cell) {
                        const startJ = (ny === cy && nx === cx) ? cell.indexOf(p1) + 1 : 0;
                        const targets = (ny === cy && nx === cx) ? cell : neighborCell;

                        for (let j = startJ; j < targets.length; j++) {
                            const p2 = targets[j];
                            const dx = p1.x - p2.x;
                            const dy = p1.y - p2.y;
                            const distSq = dx * dx + dy * dy;

                            if (distSq < connDistSq) {
                                const dist = Math.sqrt(distSq);
                                const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                                ctx.strokeStyle = `rgba(145, 180, 150, ${alpha})`;
                                ctx.beginPath();
                                ctx.moveTo(p1.x * dpr, p1.y * dpr);
                                ctx.lineTo(p2.x * dpr, p2.y * dpr);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }
        }
    }

    // Draw particles
    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 195, 172, ${p.alpha})`;
        ctx.fill();
    }

    raf = requestAnimationFrame(draw);
}

function resize() {
    if (!canvas) return;
    // Cap DPR at 2 for performance (4x pixels at 3x DPR is wasteful)
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
}

export function initConstellation(hostEl) {
    if (canvas) destroyConstellation();

    // Skip entirely on mobile for battery life
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const particleCount = 60;

    canvas = document.createElement('canvas');
    canvas.id = 'constellationCanvas';
    canvas.style.cssText = `
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0;
        transition: opacity 1.5s ease;
        contain: strict;
    `;
    hostEl.appendChild(canvas);
    ctx = canvas.getContext('2d', { alpha: true });

    resize();

    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    particles = Array.from({ length: particleCount }, () => new Particle(w, h));

    // Store handlers for cleanup
    onResize = resize;
    onMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    onVisibilityChange = () => {
        isVisible = !document.hidden;
    };

    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Pause animation when host element is scrolled off-screen
    canvasObserver = new IntersectionObserver(([entry]) => {
        isCanvasInView = entry.isIntersecting;
    }, { threshold: 0 });
    canvasObserver.observe(hostEl);

    raf = requestAnimationFrame(draw);

    // Fade in
    requestAnimationFrame(() => { canvas.style.opacity = '0.7'; });
}

export function destroyConstellation() {
    if (raf) cancelAnimationFrame(raf);
    raf = null;

    // Properly remove ALL event listeners
    if (onResize) window.removeEventListener('resize', onResize);
    if (onMouseMove) document.removeEventListener('mousemove', onMouseMove);
    if (onVisibilityChange) document.removeEventListener('visibilitychange', onVisibilityChange);
    if (canvasObserver) canvasObserver.disconnect();

    onResize = null;
    onMouseMove = null;
    onVisibilityChange = null;
    canvasObserver = null;
    isCanvasInView = true;

    canvas?.remove();
    canvas = null;
    ctx = null;
    particles = [];
    isVisible = true;
}
