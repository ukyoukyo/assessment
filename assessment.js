'use strcit';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
        //名前が空の時は処理を終了する
        return;
    }
    console.log(userName);

    // TODO 診断結果表示エリアの作成
    resultDivided.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph =  document.createElement('p');
    const result = assessment (userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // TODO ツイートエリアの作成
    tweetDivided.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href' , hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', 'result');
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor)

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

};

const answers = [ 
    '{username}のいいところは声です。',
    '{username}のいいところはまなざしです。',
    '{username}のいいところは情熱です。',
    '{username}のいいところは厳しさです。',
    '{username}のいいところは知識です。',
    '{username}のいいところはユニークさです。',
    '{username}のいいところは用心深さです。',
    '{username}のいいところは見た目です。',
    '{username}のいいところは決断力です。',
    '{username}のいいところは思いやりです。',
    '{username}のいいところは感受性です。',
    '{username}のいいところは節度です。',
    '{username}のいいところは好奇心です。',
    '{username}のいいところは気配りです。',
    '{username}のいいところはそのすべてです。',
    '{username}のいいところは自制心です。',
];

/** 
* 名前の文字列を渡すと診断結果を返す関数
* @param{string} userName ユーザーの名前
* @return{string} 診断結果
*/


function assessment(userName){
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i =  0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    //文字のコード番号の合計を回答の数で割って添え字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replaceAll(/{userName}/gi, userName);
    return result;

}

//　テストコード
console.assert(
    assessment('太郎')===
    '太郎のいいところは決断力です。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);

console.assert(
    assessment('太郎')=== assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);




