import time,os,pickle
from ascii import ImageToAscii 

obj = ImageToAscii("video.mp4",10)
obj.videoAscii()

def read(sleepTime:int):
    pickle_list = open("output.txt","rb")
    emp = pickle.load(pickle_list)
    for el in emp:
        print(el)
        time.sleep(sleepTime)
        os.system("clear")

read(0.05)
os.system('clear')
