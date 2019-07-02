function loadingMsg(data){
    let wrap = document.getElementById('infowListWrap');
    wrap.innerHTML = `<div class="loading-wait">
                        ${data.message}
                        <div class="loading-icon"><i class="iconfont icon-jiazai"></i></div>
                    </div>`


    
}