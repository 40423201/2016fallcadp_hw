var tipuesearch = {"pages":[{"text":"2016Fallcadpb_bg6 成員簡報 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229 2016Fallcadpb_bg6 成員網誌 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229","title":"About Bg6","tags":"misc","url":"./pages/about-bg6/"},{"text":"這堂課最主要想帶給我們的東西 1.強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 2.熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 3.融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 心得","title":"2016 Fall 電腦輔助設計與實習期末自評總結","tags":"Misc","url":"./2016-fall-dian-nao-fu-zhu-she-ji-yu-shi-xi-qi-mo-zi-ping-zong-jie.html"},{"text":"40423201onshape連桿組裝影片 from 40423201 on Vimeo .","title":"w16 onshape 連桿組裝  :","tags":"Misc","url":"./w16-onshape-lian-gan-zu-zhuang.html"},{"text":"四連桿與多連桿運動模擬: bandicam 2016-12-23 00-21-33-425 from 40423201 on Vimeo . 將所得到的點座標 .csv 以 Excel 畫圖, 得到:","title":"w15 四連桿與多連桿運動模擬:","tags":"Misc","url":"./w15-si-lian-gan-yu-duo-lian-gan-yun-dong-mo-ni.html"},{"text":"今天整理了之前所有老師上課講的重點與作業 心得:這次的小組作業我覺得比week7熟悉了許多onshape了","title":"w14 統整 week7 :","tags":"Misc","url":"./w14-tong-zheng-week7.html"},{"text":"無法更新 最近更新無法成功好像是github裡面 有個資料夾因為github更新後無法使用 而導致整個遠端網誌無法更新 所以把東西clone下來把資料夾刪除就能解決了 The tag notebook on line 13 in plugin/liquid_tags/test_data/content/test-ipython-notebook-nbformat3.md is not a recognized Liquid tag.","title":"w13 無法更新","tags":"Misc","url":"./w13-wu-fa-geng-xin.html"},{"text":"Solvespace 組合圖","title":"w12 Solvespace 組合圖","tags":"Misc","url":"./w12-solvespace-zu-he-tu.html"},{"text":"心得:今天校慶在家裡做了第一個分組作業不過用onshape的時候有點不習慣 停課!!!!!!","title":"w11 week6 校慶","tags":"Misc","url":"./w11-week6-xiao-qing.html"},{"text":"Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到： 首先利用 Brython, 讀取資料目錄中的 40423201.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/11117.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"w10平面四連桿機構模擬","tags":"Misc","url":"./w10ping-mian-si-lian-gan-ji-gou-mo-ni.html"},{"text":"檢查連結是否正確","title":"w9 檢查連結","tags":"Misc","url":"./w9-jian-cha-lian-jie.html"},{"text":"打自己覺得應得的分數 成績","title":"w8 打期中成績","tags":"Misc","url":"./w8-da-qi-zhong-cheng-ji.html"},{"text":"40423201 from 40423201 on Vimeo .","title":"w7 使用Trace Point計算路徑","tags":"Misc","url":"./w7-shi-yong-trace-pointji-suan-lu-jing.html"},{"text":"然而程式說找不到任何有關該名稱的文件資料,後來我們發現submodule內的設定並沒有也因此刪除,要刪除submodule的設定有兩個方法 解決方法一 從2016fallcadp_bg3資料夾內的.gitmodules檔案,把該組員的子模組設定刪除後就可以存檔 git submodule update --init --recursive,把各組員子模組的資料抓近來,記得要把2016fallcadp_bg3\\.git\\modules裡該組員的隱藏資料夾刪掉 就可以重新執行指令,把組員的子模組加進來 解決方法二 直接依序執行以下的指令git submodule deinit asubmodule git rm asubmodule 但是在2016fallcadp_bg6\\.git\\modules裡的隱藏資料夾,還是需要自己動手刪除","title":"w6 對應上的問題","tags":"Misc","url":"./w6-dui-ying-shang-de-wen-ti.html"},{"text":"SolveSpace 老師介紹給我們的繪圖軟體 今天有開出來玩玩看不過還不 知道他的指令用起來卡卡的","title":"w5 SolveSpace","tags":"Misc","url":"./w5-solvespace.html"},{"text":"建立小組 組長要建立小組倉儲名稱為 2016fallcadp_bg3","title":"w4 建立小組","tags":"Misc","url":"./w4-jian-li-xiao-zu.html"},{"text":"上課時大家都在搶同一個網路所以網路一定慢所 以老師今天教我們更改網路把網路更改成proxy後可以 變得快很多 更改的指令 proxy.mde.tw 3128","title":"w3 網路指令","tags":"Misc","url":"./w3-wang-lu-zhi-ling.html"},{"text":"心得:這一次的作業我拍好影片,但是我借用德威的VIMEO上傳的時候德威忘記登出所以就直接借用他的了,我們這組是一起討論後最後才成功畫出作品的,很喜歡團隊合作的感覺,蠻有成就感的雖然在畫的時候失敗了一次又一次哈哈","title":"w1 作業","tags":"Misc","url":"./w1-zuo-ye.html"},{"text":"心得:在試用了老師所介紹的兩套軟體-SolveSpace 和 Onshape後 覺得Onshape較SolveSpace好用，而Onshape和我們常用的soildwork還滿像的 所以用起來比較習慣。SolveSpace沒一些快速指令，每執行完一項功能，就要重新點選，覺得比較麻煩一點!!","title":"w2 2D作業二","tags":"Misc","url":"./w2-2dzuo-ye-er.html"}]};