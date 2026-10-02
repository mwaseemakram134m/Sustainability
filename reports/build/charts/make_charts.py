"""Render the two report figures as PNGs (print-oriented, light surface)."""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager

SURFACE = "#fcfcfb"
INK = "#0b0b0b"
INK2 = "#52514e"
MUTED = "#898781"
GRID = "#e1e0d9"
AXIS = "#c3c2b7"
BLUE = "#2a78d6"
ORANGE = "#eb6834"

font = "Liberation Sans" if any("Liberation Sans" in f.name for f in font_manager.fontManager.ttflist) else "DejaVu Sans"
plt.rcParams.update({"font.family": font, "font.size": 9, "text.color": INK, "axes.labelcolor": INK2,
                     "xtick.color": MUTED, "ytick.color": MUTED})

# Figure 1: current market size vs growth momentum (analyst scores, 0-100).
markets = {
    "Singapore": (96, 66),
    "Hong Kong": (92, 60),
    "Malaysia": (64, 86),
    "Indonesia": (52, 74),
}
fig, ax = plt.subplots(figsize=(6.6, 4.3), dpi=220)
fig.patch.set_facecolor(SURFACE)
ax.set_facecolor(SURFACE)
ax.set_xlim(40, 102)
ax.set_ylim(50, 95)
ax.axvline(75, color=AXIS, lw=0.8, ls=(0, (3, 3)), zorder=1)
ax.axhline(72, color=AXIS, lw=0.8, ls=(0, (3, 3)), zorder=1)
ax.grid(color=GRID, lw=0.6, zorder=0)
for s in ["top", "right"]:
    ax.spines[s].set_visible(False)
for s in ["left", "bottom"]:
    ax.spines[s].set_color(AXIS)
offsets = {"Singapore": (-8, 9, "right"), "Hong Kong": (-8, -14, "right"),
           "Malaysia": (10, -3, "left"), "Indonesia": (10, -3, "left")}
for name, (x, y) in markets.items():
    ax.scatter([x], [y], s=110, color=BLUE, edgecolor=SURFACE, linewidth=2, zorder=3)
    dx, dy, ha = offsets[name]
    ax.annotate(f"{name}  ({x}, {y})", (x, y), xytext=(dx, dy), textcoords="offset points",
                ha=ha, va="center", fontsize=9, color=INK)
ax.text(41.5, 93.5, "Smaller today, growing fastest", fontsize=8, color=INK2, va="top")
ax.text(101, 51.5, "Largest today, slower growth", fontsize=8, color=INK2, ha="right", va="bottom")
ax.set_xlabel("Current ESG services market size (score out of 100)")
ax.set_ylabel("Growth momentum 2025-2029 (score out of 100)")
fig.tight_layout()
fig.savefig("fig1_size_vs_momentum.png", facecolor=SURFACE)
plt.close(fig)

# Figure 2: attractiveness for an independent consultant, now vs in 3-5 years (score out of 5).
order = ["Malaysia", "Singapore", "Hong Kong", "Indonesia"]
now = {"Malaysia": 4.25, "Singapore": 3.90, "Hong Kong": 3.15, "Indonesia": 2.85}
later = {"Malaysia": 3.85, "Singapore": 4.15, "Hong Kong": 3.40, "Indonesia": 3.45}
fig, ax = plt.subplots(figsize=(6.6, 3.4), dpi=220)
fig.patch.set_facecolor(SURFACE)
ax.set_facecolor(SURFACE)
h = 0.36
ys = list(range(len(order)))[::-1]
for i, m in enumerate(order):
    y = ys[i]
    ax.barh(y + h / 2 + 0.02, now[m], height=h, color=BLUE, zorder=3)
    ax.barh(y - h / 2 - 0.02, later[m], height=h, color=ORANGE, zorder=3)
    ax.text(now[m] + 0.04, y + h / 2 + 0.02, f"{now[m]:.2f}", va="center", fontsize=8.5, color=INK)
    ax.text(later[m] + 0.04, y - h / 2 - 0.02, f"{later[m]:.2f}", va="center", fontsize=8.5, color=INK)
ax.set_yticks(ys)
ax.set_yticklabels(order, color=INK, fontsize=9.5)
ax.set_xlim(0, 5)
ax.set_xlabel("Weighted attractiveness score (1 = poor, 5 = excellent)")
ax.grid(axis="x", color=GRID, lw=0.6, zorder=0)
for s in ["top", "right", "left"]:
    ax.spines[s].set_visible(False)
ax.spines["bottom"].set_color(AXIS)
ax.tick_params(axis="y", length=0)
from matplotlib.patches import Patch
ax.legend(handles=[Patch(color=BLUE, label="Now (next 12 months)"), Patch(color=ORANGE, label="In 3-5 years")],
          loc="lower center", bbox_to_anchor=(0.42, 1.0), ncol=2, frameon=False, fontsize=8.5)
fig.tight_layout()
fig.savefig("fig2_attractiveness.png", facecolor=SURFACE)
plt.close(fig)
print("ok")
