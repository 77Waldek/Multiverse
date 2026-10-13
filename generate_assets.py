"""Generate placeholder assets for Multiverse landing page."""

from PIL import Image, ImageDraw, ImageFont
import os
import math


def create_gradient(width, height, color1, color2, direction='horizontal'):
    """Create gradient background."""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)

    for i in range(width if direction == 'horizontal' else height):
        ratio = i / (width if direction == 'horizontal' else height)
        r = int(color1[0] + (color2[0] - color1[0]) * ratio)
        g = int(color1[1] + (color2[1] - color1[1]) * ratio)
        b = int(color1[2] + (color2[2] - color1[2]) * ratio)

        if direction == 'horizontal':
            draw.line([(i, 0), (i, height)], fill=(r, g, b))
        else:
            draw.line([(0, i), (width, i)], fill=(r, g, b))

    return img


def draw_sound_wave(draw, cx, cy, width, height, color, amplitude=30):
    """Draw a sound wave pattern."""
    points = []
    for x in range(-width//2, width//2):
        y = cy + int(amplitude * math.sin(x * 0.05) * math.exp(-abs(x) * 0.01))
        points.append((cx + x, y))
    if len(points) > 1:
        draw.line(points, fill=color, width=3)


def create_logo():
    """Create Multiverse logo."""
    size = 512
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background circle with gradient
    for i in range(size):
        ratio = i / size
        r = int(10 + (20 - 10) * ratio)
        g = int(10 + (30 - 10) * ratio)
        b = int(20 + (50 - 20) * ratio)
        draw.line([(0, i), (size, i)], fill=(r, g, b, 255))

    # Draw sound wave
    cx, cy = size // 2, size // 2
    for offset in [-40, 0, 40]:
        points = []
        for x in range(-120, 120):
            y = cy + offset + int(25 * math.sin(x * 0.08) * math.exp(-abs(x) * 0.02))
            points.append((cx + x, y))
        if len(points) > 1:
            draw.line(points, fill=(0, 212, 255, 255), width=6)

    # Border
    draw.ellipse([10, 10, size-10, size-10], outline=(0, 212, 255, 255), width=4)

    return img


def create_icon(name, draw_func):
    """Create an icon with given draw function."""
    size = 512
    img = Image.new('RGBA', (size, size), (18, 18, 26, 255))
    draw = ImageDraw.Draw(img)
    draw_func(draw, size)
    return img


def draw_lightning(draw, size):
    """Draw lightning bolt icon."""
    cx, cy = size // 2, size // 2
    points = [
        (cx + 20, cy - 100),
        (cx - 40, cy + 20),
        (cx, cy + 20),
        (cx - 20, cy + 100),
        (cx + 40, cy - 20),
        (cx, cy - 20),
    ]
    draw.polygon(points, fill=(0, 212, 255, 255))


def draw_feather(draw, size):
    """Draw feather icon."""
    cx, cy = size // 2, size // 2
    # Simple feather shape
    draw.ellipse([cx-60, cy-100, cx+60, cy+100], fill=(0, 212, 255, 255))
    draw.rectangle([cx-5, cy-100, cx+5, cy+100], fill=(18, 18, 26, 255))


def draw_lock(draw, size):
    """Draw lock icon."""
    cx, cy = size // 2, size // 2
    # Lock body
    draw.rounded_rectangle([cx-60, cy-20, cx+60, cy+80], radius=10, fill=(0, 212, 255, 255))
    # Lock shackle
    draw.arc([cx-40, cy-80, cx+40, cy+20], 180, 360, fill=(0, 212, 255, 255), width=12)
    # Keyhole
    draw.ellipse([cx-10, cy+10, cx+10, cy+30], fill=(18, 18, 26, 255))
    draw.rectangle([cx-5, cy+20, cx+5, cy+50], fill=(18, 18, 26, 255))


def draw_server(draw, size):
    """Draw server icon."""
    cx, cy = size // 2, size // 2
    # Server racks
    for i, y in enumerate([cy-80, cy, cy+80]):
        draw.rounded_rectangle([cx-100, y-30, cx+100, y+30], radius=8, fill=(124, 58, 237, 255))
        draw.ellipse([cx-80, y-10, cx-60, y+10], fill=(0, 212, 255, 255))
        draw.ellipse([cx-40, y-10, cx-20, y+10], fill=(0, 212, 255, 255))


def draw_p2p(draw, size):
    """Draw P2P connection icon."""
    cx, cy = size // 2, size // 2
    # Two devices
    draw.rounded_rectangle([cx-120, cy-60, cx-40, cy+60], radius=8, fill=(0, 212, 255, 255))
    draw.rounded_rectangle([cx+40, cy-60, cx+120, cy+60], radius=8, fill=(124, 58, 237, 255))
    # Connection line
    draw.line([(cx-40, cy), (cx+40, cy)], fill=(0, 212, 255, 255), width=6)
    # Arrows
    draw.polygon([(cx-40, cy-10), (cx-20, cy), (cx-40, cy+10)], fill=(0, 212, 255, 255))
    draw.polygon([(cx+40, cy-10), (cx+20, cy), (cx+40, cy+10)], fill=(124, 58, 237, 255))


def draw_record(draw, size):
    """Draw record icon."""
    cx, cy = size // 2, size // 2
    # Outer circle
    draw.ellipse([cx-80, cy-80, cx+80, cy+80], outline=(0, 212, 255, 255), width=8)
    # Inner filled circle
    draw.ellipse([cx-40, cy-40, cx+40, cy+40], fill=(255, 50, 50, 255))


def create_hero_mockup():
    """Create hero section mockup."""
    width, height = 1920, 1080
    img = create_gradient(width, height, (10, 10, 20), (20, 30, 50), 'horizontal')
    draw = ImageDraw.Draw(img)

    # Window frame
    margin = 100
    draw.rounded_rectangle(
        [margin, margin, width-margin, height-margin],
        radius=20, fill=(18, 18, 26, 255), outline=(0, 212, 255, 255), width=2
    )

    # Title bar
    draw.rounded_rectangle(
        [margin, margin, width-margin, margin+60],
        radius=20, fill=(30, 30, 40, 255)
    )
    draw.rectangle([margin, margin+40, width-margin, margin+60], fill=(30, 30, 40, 255))

    # Traffic lights
    for i, color in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
        x = margin + 30 + i * 30
        draw.ellipse([x-8, margin+22, x+8, margin+38], fill=color)

    # Sidebar
    sidebar_width = 300
    draw.rectangle([margin, margin+60, margin+sidebar_width, height-margin], fill=(25, 25, 35, 255))

    # Sidebar items
    for i in range(5):
        y = margin + 100 + i * 60
        draw.rounded_rectangle([margin+20, y, margin+sidebar_width-20, y+40], radius=8, fill=(40, 40, 55, 255))
        draw.ellipse([margin+30, y+10, margin+50, y+30], fill=(0, 212, 255, 255))

    # Main content area
    content_x = margin + sidebar_width + 20
    # Audio visualization bars
    for i in range(20):
        x = content_x + i * 60
        bar_height = int(100 + 50 * math.sin(i * 0.5))
        draw.rounded_rectangle(
            [x, height-margin-200-bar_height, x+30, height-margin-200],
            radius=4, fill=(0, 212, 255, 255)
        )

    # Control buttons at bottom
    btn_y = height - margin - 100
    for i, (label, color) in enumerate([("Mute", (255, 50, 50)), ("Deafen", (255, 189, 46)), ("Settings", (124, 58, 237))]):
        x = content_x + i * 150
        draw.rounded_rectangle([x, btn_y, x+120, btn_y+50], radius=25, fill=(*color, 255))

    return img


def main():
    """Generate all assets."""
    assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
    os.makedirs(assets_dir, exist_ok=True)

    print("Generating Multiverse assets...")

    # Logo
    logo = create_logo()
    logo.save(os.path.join(assets_dir, 'logo.png'))
    print("  [OK] logo.png")

    # Icons
    icons = {
        'icon-speed.png': draw_lightning,
        'icon-lightweight.png': draw_feather,
        'icon-secure.png': draw_lock,
        'icon-server.png': draw_server,
        'icon-p2p.png': draw_p2p,
        'icon-record.png': draw_record,
    }
    for name, func in icons.items():
        icon = create_icon(name, func)
        icon.save(os.path.join(assets_dir, name))
        print(f"  [OK] {name}")

    # Hero mockup
    hero = create_hero_mockup()
    hero.save(os.path.join(assets_dir, 'hero-mockup.png'))
    print("  [OK] hero-mockup.png")

    print(f"\nAll assets saved to {assets_dir}")
    print("You can now replace these with AI-generated graphics!")


if __name__ == "__main__":
    main()
