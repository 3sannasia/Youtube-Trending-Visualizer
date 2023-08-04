import pandas as pd
import os
import sys
import random

dir = os.path.dirname(sys.path[0])
df=pd.read_csv(dir+"/data/data.csv")
channelMap = {}
userMap = {}
tagMap = {}
curUserID=0
curTagID=0
describeRows = []
videoRows = []
lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

for (idx,value) in df.iterrows():
    if (value[3] in channelMap) and channelMap[value[3]][6]>value[6]:
        channelMap[value[3]]=value
    elif not (value[3] in channelMap):
        channelMap[value[3]]=value
        userMap[value[3]]=curUserID
        curUserID+=1
    videoRows.append([value[0],value[1],"US",(int)(random.uniform(0, 3600)),value[8],value[10],value[9],value[6],value[11],value[3],userMap[value[3]]])
    cTags = value[7].split("|")
    for t in cTags:
        if not (t in tagMap):
            tagMap[t]=[curTagID,1,{value[3]}]
            curTagID+=1
        else:
            pTag=tagMap[t]
            tagMap[t]=[pTag[0],pTag[1]+1,set(list(pTag[2])+[value[3]])]
        describeRows.append([tagMap[t][0],value[0], value[3], userMap[value[3]]])

channelRows=[]
for i in channelMap:
    channelRows.append([i,channelMap[i][4],"US",channelMap[i][6],userMap[i]])

channelsDF=pd.DataFrame(channelRows,columns=["ChannelID", "ChannelName", "Region", "CreationDate", "UserID"])

userRows=[]
for i in userMap:
    userRows.append([userMap[i],channelMap[i][4][0:5],channelMap[i][6]])

usersDF=pd.DataFrame(userRows,columns=["UserID", "Nickname", "AccountCreateDate"])

tagRows=[]
for i in tagMap:
    tagRows.append([tagMap[i][0],i,tagMap[i][1],len(tagMap[i][2])])

tagsDF=pd.DataFrame(tagRows,columns=["TagID", "Name", "NumVid", "NumChannel"])

commentRows = []
for i in range(0,50000):
    pComment = int(random.uniform(-i,i))
    vidNum = int(random.uniform(0,len(videoRows)))
    if pComment>0:
        commentRows.append([i,int(random.uniform(0,int(commentRows[pComment][1])/2)),lipsum, pComment, commentRows[pComment][4],commentRows[pComment][5], commentRows[pComment][6],int(random.uniform(0,len(userRows)))])
    else:
        commentRows.append([i,int(random.uniform(0,int(videoRows[vidNum][5])/2)),lipsum, "NULL", videoRows[vidNum][7], videoRows[vidNum][0], videoRows[vidNum][9], videoRows[vidNum][10],int(random.uniform(0,len(userRows)))])

commentDF=pd.DataFrame(commentRows,columns=["CommentID", "Likes", "Content", "ParentComment", "Time", "VideoID", "ChannelID", "VUserID", "WUserID"])

describesDF=pd.DataFrame(describeRows,columns=["TagID", "VideoID", "ChannelID", "UserID"])
videosDF=pd.DataFrame(videoRows,columns=["VideoID", "VideoTitle", "Region", "Length", "Views", "Dislikes", "Likes", "PublishDate", "NumComments", "ChannelID", "UserID"])

channelsDF.to_csv(dir+"/data/channel.csv", header=True, index=False)
usersDF.to_csv(dir+"/data/user.csv", header=True, index=False)
tagsDF.to_csv(dir+"/data/tag.csv", header=True, index=False)
describesDF.to_csv(dir+"/data/describe.csv", header=True, index=False)
videosDF.to_csv(dir+"/data/video.csv", header=True, index=False)
commentDF.to_csv(dir+"/data/comment.csv", header=True, index=False)


