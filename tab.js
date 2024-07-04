function openTab(evt, tabName) {
    var i, tabcontent, tablinks, commonContent;

    // タブコンテンツをすべて非表示にする
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // すべてのタブボタンのactiveクラスを削除する
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 指定されたタブコンテンツを表示し、現在のタブボタンにactiveクラスを追加する
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // 共通コンテンツを表示する
    commonContent = document.getElementById("common");
    commonContent.style.display = "block";
}

// 最初のタブをデフォルトで開く
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-button")[0].click();
});