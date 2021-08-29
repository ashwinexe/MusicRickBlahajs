# Play Video as ASCII in Terminal


# Remove all existing video files
rm *.mp4

# Download all required packages
pip3 install opencv-python
pip3 install video-to-ascii 
pip3 install opencv-contrib-python==4.4.0.42
pip3 install Pillow==7.2.0

# Create a symlink
sudo ln -s /usr/bin/python3 /usr/bin/python

# Download YouTube-DL
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
sudo -H pip install --upgrade youtube-dl
youtube-dl --recode-video mp4 https://www.youtube.com/watch?v=dQw4w9WgXcQ

# Rename and delete unnecessary files - Make sure you're doing this in the right directory! 
mv *.mp4 video.mp4 

# Run the python files
python video2ascii.py
 



