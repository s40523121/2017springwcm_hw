var tipuesearch = {"pages":[{"url":"./pages/about/","text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog","tags":"misc","title":"About"},{"url":"./wang-lu-xian-zhi-zuo.html","text":"自行製作網路線 工具: 壓線鉗 接頭 雙絞線 製作步驟: 1.將網路線撥開 2.將網路線按照白橙、橙、白綠、藍、白藍、綠、白棕、棕顏色排好(長度大約1.5公分) 3.插入接頭當中 4.使用壓線鉗就完成了. 而網路線規格分為7級,分別為CAR1-6和5e以下為各階級差異 實際有傳輸訊號和接收訊號的只有4支腳位,分別為1、2、3、6,4、5、7、8是沒有定義的.","tags":"Misc","title":"網路線製作"},{"url":"./he-wei-ji-jie-she-ji.html","text":"機械設計. 1. 機 :精巧配置之互動元件. 2. 械 :配置之元件所產生的特定功能,解決問題. 3. 設 :表達結果. 4. 計 許多的思考和討論. 我們來到機械設計系,就是希望未來能成為一位虛實整合的機械工程師,除了能夠做出實際的機械結構,更能夠將軟體和程式運用自如,才能在這數位化的時代能夠謀得一份良好的工作.","tags":"Misc","title":"何謂機械設計"},{"url":"./2017-wang-ji-nei-rong-guan-li.html","text":"使用VirtualBox之相關設定介紹. VirtualBox是一個虛擬電腦軟體,其他還有Vmware也有類似的功能. 使用此類型之軟體,主要目的是測試一些軟體與病毒,且讓其不會影響到原本的電腦系統. 使用的第一步就是先安裝好想要使用的作業系統,只要找的到載點,想用什麼都可以,只是速度不會比在原本的系統快. 下載好Virtualbox軟體和想使用的作業系統後,即可開始進行設定. 首先按下新增 選許想使用之作業系統 調整記憶體之大小,看使用的作業系統而定.基本越大越好. 設定虛擬硬碟,虛擬硬碟是指用通過軟體技術，將物理記憶體進行分割，將一部分記憶體通過虛擬技術轉變為硬碟以較大幅度提升電腦數據讀取速度和保護硬碟 映像檔類型有兩種可以選擇,「動態延伸存放」「固定大小存放」,差別在於一開始是否先占用硬碟空間,選擇動態擴充映像檔,較不會造成空間浪費. 調整虛擬硬碟大小 最後按下完成就結束基本設定了. 在設定值的存放裝置裡掛載需使用之作業系統 按下啟動後就會開啟了. 以下為實際示範影片 s40523137使用virtualbox from s40523137 on Vimeo . 接下來設定最重要的網路部分. 一台虛擬電腦最多可以設置4張網路介面卡,四種各可使用不同的模式來使用. NAT網路:NAT 其實是 Network Address Translation 的簡寫，字面上的意思是『網路位址的傳送』. 他主要的功能就是在提供內部私有網路的電腦之頻寬分享.也就是將虛擬IP轉成固定IP,這樣才有辦法連線到外部,其功能很類似IP分享器. 在VirtualBox使用該功能,則是將虛擬電腦拿到IP後,NAT透過host端進行對外連結,基本上在host端所執行的網路行為,在虛擬電腦也可執行. 橋接介面卡:虛擬電腦直接連結到實體網路卡,設定網路時選擇「橋接介面卡」,並選取實體網路卡. 虛擬機有獨立的IP,就像同處一個區域網中的其他的主機一樣. 因此,可以在虛擬機中，找到類似於主機（XP,Win7）中看到的 網上鄰居一樣的效果,可以看到其他各個同局域網內的主機,當然也包括此台Host主機所對應的虛擬機.所以,只要本身主機共享出來了文件夾了,那麼此時在虛擬機中肯定也是可以訪問到該共享文件夾的. 內部網路:可以讓不同Guest OS 互通,如同連接到同一個Hub,無法存取外部網路安全速度比Bridged Networking 有效,直接傳送,不需要透過Host OS的網路堆疊IP 需要手動指定. 「僅限主機」介面卡:不同Guest OS 可以互通，可以跟Host OS 互通混合Bridged 與Internal Networking,在Host OS 建立一個軟體網路卡,如同虛擬機器連線到虛擬網路,只可以讓Host OS 與Guest OS 互通Host-Only Networking 需使用DHCP,不可以指定IP.在VirtualBox 檔案/喜好設定/網路/VirtualBox Host-Only Ethernet Adapter中可以設定DHCP Server。使Host OS 與Guest OS 擁有相同網段之IPAddress以互通該DHCP Server 為獨立模式,只有在此模式才可以關閉,並指定IP 範圍. 通用驅動程式:用於選擇網卡驅動.該驅動,是virtualbox內部自帶的,或者是通過extension pack添加進來的. 參考資料:https://sofree.cc/virtualbox-os/ http://ithelp.ithome.com.tw/articles/10107536 http://ithelp.ithome.com.tw/articles/10108486 http://icodding.blogspot.tw/2015/07/virtualbox.html http://wiki.mbalib.com/zh-tw/%E8%99%9A%E6%8B%9F%E7%A1%AC%E7%9B%98 http://linux.vbird.org/linux_server/0250simple_firewall/0320nat.php http://www.gamez.com.tw/thread-449368-1-1.html https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E8%AE%BE%E7%BD%AE%E5%8D%8F%E8%AE%AE https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2 https://www.twbsd.org/cht/book/ch12.htm","tags":"Misc","title":"2017 網際內容管理"}]};