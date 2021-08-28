import cv2 
import numpy as np 
import pickle

class ImageToAscii:
    def __init__(self,path,reVal):
        self.path = path 
        self.framesList = []
        self.ASCII = ['@','#','S','%','?','*','+',';',':',',']
        self.resizeFact = reVal 

    def loadImage(self):
        image = cv2.imread(self.path)
        image = cv2.resize(image,
            (
                image.shape[1]//self.resizeFact,
                image.shape[0]//self.resizeFact
            )
        )
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        return image 
    
    def imageAscii(self,*args,**kwargs):
        frame=""
        try:
            if args:
                img = args[0]
            else:
                img = self.loadImage()
                rows,cols = img.shape
                frame = "\n"
                for i in range(rows):
                    for j in range(cols):
                        imVal = img.item(i,j)
                        frame += self.ASCii(imVal//30)
                    frame += "\n"
            print(frame)
            return frame 
        except Exception as e:
            print(e)
    
    def videoAscii(self):
        self.video = cv2.VideoCapture(self.path)
        while True:
            try:
                _,image = self.video.read()
                image = cv2.resize(image,
                    (
                        image.shape[1]//self.resizeFact,
                        image.shape[0]//self.resizeFact
                    )
                )       
                image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
                self.framesList.append(self.imageAscii(image))
            except Exception as e:
                print(e)
                
        with open("output.txt","wb") as f:
            pickle.dump(self.framesList,f)



