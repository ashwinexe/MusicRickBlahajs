import os 
import sys
import cv2
from PIL import Image
import time

ASCII_CHARS = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]

def resized_gray_image(image ,new_width=70):
	width,height = image.size
	aspect_ratio = height/width
	new_height = int(aspect_ratio * new_width)
	return image.resize((new_width,new_height)).convert('L')

def pix2chars(image):
	pixels = image.getdata()
	return ''.join([ASCII_CHARS[pixel//25] for pixel in pixels])

def generate_frame(image,new_width=70):
	new_image_data = pix2chars(resized_gray_image(image))
	total_pixels = len(new_image_data)
	ascii_image = '\n'.join([new_image_data[index:(index+new_width)] for index in range(0, total_pixels, new_width)])
	sys.stdout.write(ascii_image)
	os.system('cls' if os.name == 'nt' else 'clear')



if __name__=="__main__":
    capture = cv2.VideoCapture("video.mp4")
    while True:
        ret,frame = capture.read()
        generate_frame(Image.fromarray(frame))
        cv2.waitKey(1)