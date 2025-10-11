# Video Setup Guide for Menu Items

## 📁 File Structure

```
public/
└── videos/
    ├── donuts.mp4      # Mochi donuts video
    ├── malasada.mp4    # Malasada video
    ├── coffee.mp4      # Coffee video
    ├── bingsu.mp4      # Bingsu video
    ├── hotdog.mp4      # Hot dog/corn dog video
    └── smoothie.mp4    # Smoothie video
```

## 🎬 Video Requirements

### Format
- **Primary Format**: MP4 (H.264 codec)
- **Alternative**: WebM for better compression
- **Audio**: Not required (videos will be muted)

### Specifications
- **Resolution**: 1080p (1920x1080) or 720p (1280x720)
  - Mobile-optimized: 720p recommended for faster loading
  - Desktop: 1080p for better quality
- **Aspect Ratio**: 16:9 (landscape) or 1:1 (square)
- **Bitrate**: 2-5 Mbps for good quality
- **Duration**: 10-30 seconds (loops automatically)
- **Frame Rate**: 30fps or 24fps
- **File Size**: Aim for under 5MB per video for optimal performance

### Optimization Tips
1. **Compress videos** using HandBrake or FFmpeg:
   ```bash
   ffmpeg -i input.mov -vcodec h264 -acodec aac -b:v 3M -vf scale=1280:720 output.mp4
   ```

2. **Remove audio** to reduce file size:
   ```bash
   ffmpeg -i input.mp4 -an -vcodec copy output.mp4
   ```

3. **Convert to WebM** for modern browsers:
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M output.webm
   ```

## 📤 How to Upload Videos

1. Place your video files in `/public/videos/`
2. Name them according to the menu item:
   - `donuts.mp4` - Mochi donuts showcase
   - `malasada.mp4` - Malasada preparation or display
   - `coffee.mp4` - Coffee brewing or pouring
   - `bingsu.mp4` - Bingsu preparation or close-up
   - `hotdog.mp4` - Hot dog/corn dog display
   - `smoothie.mp4` - Smoothie making or display

3. Videos will automatically appear on hover (desktop) or as preview (mobile)

## 🎨 How It Works

- **Desktop**: Video plays on hover with a cinematic overlay effect
- **Mobile**: Video preview appears when card is tapped
- **Fallback**: If video doesn't exist, card displays normally with static image
- **Performance**: Videos are lazy-loaded and only play when visible

## 🎯 Best Practices

1. **Show the product**: Focus on the food/drink item
2. **Good lighting**: Bright, well-lit shots work best
3. **Close-ups**: Show texture and details
4. **Motion**: Slow pours, steam, or preparation steps
5. **Brand consistency**: Similar style across all videos

## 🔧 Technical Details

Videos are implemented with:
- Auto-play on hover (muted, looped)
- Graceful fallback if video file is missing
- Optimized loading with `playsInline` for iOS
- Gradient overlay for better text readability
- Smooth opacity transitions

## 📱 Mobile Considerations

- Videos work on touch devices
- Reduced file size recommended for mobile networks
- Automatic pause when out of view to save bandwidth
- Fallback to static images if video fails to load
