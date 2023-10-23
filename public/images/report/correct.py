import cv2
index = 23

for i in range(23, 46):
    temp = cv2.imread(str(i)+".jpg")
    height, width, _ = temp.shape
    resize = temp[:width, :]

    cv2.imwrite(str(i)+".jpg", resize)

