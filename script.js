document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. 初期データの定義
    // ---------------------------------------------------------
    const valueItemsData = [
        { id: 'item_money', text: 'お金', img: 'images/icon_money.jpg' },
        { id: 'item_freedom', text: '自由', img: 'images/icon_freedom.jpg' },
        { id: 'item_love', text: '愛・パートナー', img: 'images/icon_love.jpg' },
        { id: 'item_stability', text: '安定', img: 'images/icon_stability.jpg' },
        { id: 'item_challenge', text: '挑戦', img: 'images/icon_challenge.jpg' },
        { id: 'item_health', text: '健康', img: 'images/icon_health.jpg' },
        { id: 'item_family', text: '家族', img: 'images/icon_family.jpg' },
        { id: 'item_hobby', text: '趣味', img: 'images/icon_hobby.jpg' },
        { id: 'item_honor', text: '名誉・地位', img: 'images/icon_honor.jpg' },
        { id: 'item_growth', text: '自己成長', img: 'images/icon_growth.jpg' },
        { id: 'item_contribution', text: '社会貢献', img: 'images/icon_contribution.jpg' },
        { id: 'item_creativity', text: '創造性', img: 'images/icon_creativity.jpg' }
    ];

    const typeMasterData = {
        'TYPE_1': {
            name: '【要塞ゴーレム】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】防御力：S / 安定性：S / 攻撃力：C\n\n毎月の固定費を見直し、手堅いインデックス投資で家計の防御力を底上げする重装甲ゴーレム。会社（ギルド）での出世競争や起業といったハイリスクな冒険は好まず、「定時退社」という強力な防御スキルを駆使して家族（パーティー）との時間を死守する。\n\n休日はショッピングモールや近所の公園といった安全地帯（セーフエリア）で過ごすことを至上の喜びとしており、不況やトラブルという全体攻撃を受けてもビクともしない。現環境において、最も確実かつ堅実に「幸せ」という名のクリアデータに到達できる最強のタンク枠だ。',
            compatibility: '【慈愛のカーバンクル】',
            image: 'type_golem.jpg'
        },
        'TYPE_2': {
            name: '【黄金のミミック】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】資金力：S / 単独行動：A / 共闘性：C\n\n会社（ギルド）の給料だけに依存するリスクを嫌い、副業（サブクエスト）や資産運用で自らのインベントリ（口座）をひたすら豊かにしていく黄金の宝箱。\n\n職場の飲み会や煩わしい人間関係には一切ゴールドも時間も割かず、有給休暇は誰にも気兼ねなくソロ旅行や趣味にフル投資する。他人の目や世間体（ヘイト）を徹底的に回避する合理的なAIを積んでおり、無駄な戦闘は行わない。大規模なプロジェクト（レイド戦）での協調性には欠けるが、個人としての自由度と資産スコアでは常にトップクラスを維持する狡猾な勝ち組プレイヤーだ。',
            compatibility: '【深淵の修道犬】',
            image: 'type_mimic.jpg'
        },
        'TYPE_3': {
            name: '【疾風のグリフォン】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】機動力：S / 成長力：A / 防御力：D\n\n「終身雇用」という名の安定した安全地帯（セーフエリア）を自ら飛び出し、フリーランスや起業家として未開のマップを飛び回る誇り高き幻獣。\n\n満員電車や週5日出社というルーティンクエストに耐えられず、常に新しい技術（スキルツリー）の習得や新規事業に挑み続ける。圧倒的な行動力と成長スピードを誇る反面、毎月の収入（HP）の増減が激しく、一度の病気や大失敗で一気にゲームオーバーに近づく脆さがある。しかし、誰にも縛られずカフェや海外で仕事（クエスト）をこなすその姿は、定住型プレイヤーの密かな憧れの的だ。',
            compatibility: '【放浪のスライム】',
            image: 'type_griffon.jpg'
        },
        'TYPE_4': {
            name: '【霊獣九尾の狐】',
            metaTier: '現環境 Tier S+',
            description: '【ステータス傾向】カリスマ：S+ / 影響力：S / 隠密性：G\n\n圧倒的なオーラでSNS（ワールドチャット）や現実のコミュニティを魅了し、トレンドやルールのメタ（流行）そのものを書き換えようとする伝説の妖狐。\n\n承認欲求のパラメーターが高く、フォロワー数や「いいね！」を触媒としてさらなる大魔法（社会的影響力）を行使する。「世の中を変えたい」「自分のビジョンを実現したい」という壮大な目標を持ち、多くのプレイヤーがその尻尾に巻かれるように追従する。しかし、常に目立つためアンチからのヘイトも尋常ではなく、炎上リスクと隣り合わせのプレイングを要求される選ばれし者のジョブ。',
            compatibility: '【百獣の王ライオンヘッド】',
            image: 'type_fox.jpg'
        },
        'TYPE_5': {
            name: '【癒やしのフェアリー】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】共感力：S / 精神力：A / 物理攻撃：E\n\n「愛と絆」に全ステータスを振り、恋人や親友との関係性を何よりも重んじるサポート妖精。キャリアアップや年収（物質的なドロップアイテム）にはあまり興味がなく、休日に大切な人とカフェでおしゃべりしたり、推し活（推しキャラへのバフ付与）に全力を注ぐことで隠しパラメータ（幸福度）をカンストさせる。\n\nギスギスした現代のオンライン社会において、その高い共感力と傾聴スキルは引く手あまただが、他人の感情に共鳴しすぎるため、悪質なプレイヤー（テイカー）に騙されたりすると途端にメンタルブレイク（闇落ち）する危険性も孕む。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_fairy.jpg'
        },
        'TYPE_6': {
            name: '【幻影のドッペルゲンガー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】創造性：S / 独自性：S / 協調性：E\n\n常識という名のテクスチャを無視し、マイナーな趣味や独自のアートワーク（創作活動）に没頭する変幻自在の魔物。\n\n一般的な「週休2日・朝9時出社」のメインクエストには全く適性がなく、無理に参加させるとすぐにステータス異常を起こす。しかし、誰も見向きもしないニッチな分野を極めたり、全く新しい動画や作品を生み出すことにかけては右に出る者がいない。理解者はごく一部のコアなファンに限られるが、時代（パッチ）が彼らに追いついた時、伝説のクリエイターとして一躍トップティアに躍り出るポテンシャルを秘めている。',
            compatibility: '【陽気なケット・シー】',
            image: 'type_doppelganger.jpg'
        },
        'TYPE_7': {
            name: '【博識のフクロウ魔導士】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】知力：S / 探求心：A / フィジカル：D\n\n世界の真理を解き明かすため、専門書や最新の論文、ネットのログを読み漁る知の探求者。情報のアップデートが激しい現代において、その高い専門知識（パッシブスキル）が最大の武器になる。\n\n最前線で営業や交渉（物理攻撃）を行うのは苦手だが、後方の安全な図書館エリア（研究室やバックオフィス）でコツコツとシステムを構築し続けるプレイスタイル。ステータスの大半を知力に全振りしているため、知識労働において無くてはならない存在。ただし、研究や趣味に没頭しすぎて現実世界のHP（睡眠や健康）を疎かにしがちだ。',
            compatibility: '【万能のキメラ】',
            image: 'type_owl.jpg'
        },
        'TYPE_8': {
            name: '【鋼殻のミノタウロス】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】体力：S / 筋力：S / 魔法防御：B\n\n心身の健康と鍛え抜かれた肉体こそが最強の資本（武器）だと信じる、物理特化の獣人。ストレスフルな現代社会において、多少の理不尽な残業（デスマーチ）やプレッシャーというバッドステータスも、圧倒的なタフネスで物理的に弾き返す。\n\nプロテインという名のポーションを常飲し、日々のログインボーナス（ジムでの筋トレやサウナ）を絶対に欠かさない。複雑な社内政治（魔法戦）は苦手だが、「健康的な精神は健康的な肉体に宿る」を体現しており、長期的な生存競争（人生）において最後に立っているのは間違いなくこのタイプだ。',
            compatibility: '【強欲のドラゴン】',
            image: 'type_minotaur.jpg'
        },
        'TYPE_9': {
            name: '【百獣の王ライオンヘッド】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】統率力：S / 名声：A / バランス：A\n\n会社や組織という名のギルドにおいて、管理職（リーダー枠）として群れをまとめ上げる威風堂々たる獣王。奇をてらった変革は起こさないが、既存のルールの中でチームのモチベーションを上げ、最高効率で売上（クエスト報酬）を叩き出す能力に長けている。\n\n仕事も家庭も両立させ、社会貢献と自己のステータス向上を同時に達成する模範的プレイヤー。あまりにも適正が高すぎるため、気がつけば常にギルドマスターやPTリーダーを押し付けられ、休む暇がないのが玉に瑕だが、本人はその重圧すらも心地よいバフと感じている。',
            compatibility: '【霊獣九尾の狐】',
            image: 'type_lionhead.jpg'
        },
        'TYPE_10': {
            name: '【放浪のスライム】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】適応力：S / 自由度：S / 固定資産：G\n\n「マイホームローン」や「正社員の肩書き」といった重たい装備はインベントリの邪魔になるとして全て捨て去り、風の向くままに生きる軟体生物。効率や最適解が求められるガチ勢メタ（現代の競争社会）には全く噛み合わないが、本人の「楽しさスコア」は全キャラ中トップクラス。\n\nその日暮らしのバイト（単発クエスト）で生活費を稼ぎ、残りの時間は趣味や旅行に費やす。防御力は皆無に等しいため、不況などでゲーム難易度が上がると一瞬で溶けてしまうリスクがあるが、その肩の力が抜けた生き方はガチ勢の心を癒やす清涼剤でもある。',
            compatibility: '【疾風のグリフォン】',
            image: 'type_slime.jpg'
        },
        'TYPE_11': {
            name: '【強欲のドラゴン】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】野心：S / 攻撃力：S / リスク耐性：A\n\n富と権力、そして更なる高みへの挑戦を渇望し、常に上昇し続ける覇竜。ハイリスク・ハイリターンの現環境において、圧倒的な行動力で仮想通貨や起業、キャリアアップ転職を繰り返し、莫大なリソース（お金と成功）をかき集めるトップティアのキャリー枠。\n\n現状維持は「退化」と同義であり、常に自分よりレベルの高い困難なビジネスに牙を剥く。何度大失敗（ゲームオーバー）しようとも即座にコンティニューする異常な精神力を持つが、そのアグレッシブさ故に周囲のモブキャラ（部下や同僚）を焼き尽くしてしまうこともある。',
            compatibility: '【鋼殻のミノタウロス】',
            image: 'type_dragon.jpg'
        },
        'TYPE_12': {
            name: '【温厚なトレント（樹木）】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】安定性：S / 回復力：A / 移動力：E\n\n大地にしっかりと根を張り、平穏な木漏れ日の中で静かに呼吸する大樹の精霊。情報過多でストレスフルな現代社会において、あえて「何もしない」「ミニマリストになる」という究極の自己防衛策をとる隠れたメタキャラ。\n\n出世競争やブランド品（レアアイテム）には見向きもせず、「毎日同じ時間にご飯を食べ、夜はぐっすり眠る」というデイリークエストをこなすことこそが真の幸福だと悟っている。変化を極端に嫌うため、引っ越しや部署異動などの大型アップデートには弱いが、誰とも争わず最も平和なプレイスタイルを貫いている。',
            compatibility: '【博識のフクロウ魔導士】',
            image: 'type_treant.jpg'
        },
        'TYPE_13': {
            name: '【慈愛のカーバンクル】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】支援力：S / 献身：S / 利己主義：G\n\n額の宝石から放たれる光で、傷ついた仲間を無条件で回復し続ける聖なる幻獣。自分自身の給料アップや出世（MVPになること）よりも、「誰かの役に立っているか」「社会に貢献できているか」を重視する必須級のヒーラー。\n\n医療、教育、福祉、あるいはボランティアなどの分野（クエスト）で活躍し、アタッカーが最大限の火力を出せるように裏方でバフをかけ続ける。ただし、自己犠牲の精神が強すぎるあまり、サービス残業などで自分のHP管理を忘れがち。悪質なブラック企業（寄生プレイヤー）に搾取されやすいという弱点もある。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_carbuncle.jpg'
        },
        'TYPE_14': {
            name: '【深淵の修道犬（アヌビス）】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】ストイック：S / 精神力：S / コミュ力：F\n\n現世の物質的な欲望を完全に断ち切り、自己の魂の成長（スキル上げ）のみを追い求める冥界の求道者。SNSの「いいね」や世間体といった現環境のスコアシステムを根本から否定しており、ひたすら読書や瞑想、資格勉強など、自己の内面という無限のダンジョンに潜り続ける。\n\nお金や地位、さらには飲み会などのマルチプレイを「ノイズ」として切り捨てる極限の縛りプレイを行っている。一般プレイヤーからは「付き合いが悪い変人」扱いを受けることが多いが、深い専門性と独自の哲学を持つ底知れぬジョブだ。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_anubis.jpg'
        },
        'TYPE_15': {
            name: '【陽気なケット・シー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】娯楽性：S / 幸運：A / 貯蓄率：F\n\n今この瞬間が楽しければそれでいい！という享楽主義を体現する、楽器を持った二足歩行の猫。効率重視のギスギスした職場で、パーティー（チーム）の雰囲気を和ませる吟遊詩人として独自のポジションを築いている。\n\n稼いだ給料（ゴールド）はすべて週末の飲み会や趣味（ガチャやライブ）に使い果たし、老後のための貯金（インベントリ）という概念が存在しない。ステータス的には非常に脆いが、その底抜けの明るさとコミュ力で不思議と周囲から助けられる。長期的な人生攻略には向かないが、今この瞬間を一番楽しんでいる勝ち組。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_caitsith.jpg'
        },
        'TYPE_16': {
            name: '【万能のキメラ】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】適応力：S / バランス：S / 尖り：D\n\nあらゆる属性とスキルをほどよく併せ持ち、どんな環境でも死に筋にならない究極のハイブリッド魔獣。パラメーターに極端な偏りがなく、仕事もプライベートも、挑戦も安定も、すべてを「そこそこ」の高水準でキープするオールラウンダー。\n\n突出したSランクの天才スキルはないが、すべての能力がB〜Aでまとまっているため、ベンチャーから大企業、ソロ作業からチーム戦まで常に一定以上のパフォーマンスを発揮する。「器用貧乏」と悩むこともあるが、どんな社会変化（アプデ）が来ても絶対に腐らない、最強の適応力の化身だ。',
            compatibility: '【温厚なトレント（樹木）】',
            image: 'type_chimera.jpg'
        }
    };

    // ---------------------------------------------------------
    // 2. DOM要素の取得と初期化
    // ---------------------------------------------------------
    const itemPool = document.getElementById('item-pool');
    const dropzones = document.querySelectorAll('.tier-row__dropzone');
    const diagnoseBtn = document.getElementById('diagnose-btn');
    
    const appView = document.getElementById('app-view');
    const resultView = document.getElementById('result-view');
    
    const resultImage = document.getElementById('result-image');
    const resultTypeName = document.getElementById('result-type-name');
    const resultMetaTier = document.getElementById('result-meta-tier');
    const resultDescription = document.getElementById('result-description');
    const resultCompatibility = document.getElementById('result-compatibility');
    
    const userTierDisplay = document.getElementById('user-tier-display');
    const allTypesTierDisplay = document.getElementById('all-types-tier-display');
    
    const retryBtn = document.getElementById('retry-btn');
    const shareTwitterBtn = document.getElementById('share-twitter-btn');
    const downloadImgBtn = document.getElementById('download-img-btn');

    // ---------------------------------------------------------
    // 3. アイテムの初期化とドラッグ＆ドロップ設定
    // ---------------------------------------------------------
    function renderInitialItems() {
        itemPool.innerHTML = '';
        valueItemsData.forEach(item => {
            const el = document.createElement('div');
            el.className = 'value-item';
            el.dataset.id = item.id;
            
            const imgEl = document.createElement('img');
            imgEl.src = item.img;
            imgEl.className = 'value-item__icon';
            imgEl.alt = item.text;
            
            const textEl = document.createElement('span');
            textEl.className = 'value-item__text';
            textEl.textContent = item.text;
            
            el.appendChild(imgEl);
            el.appendChild(textEl);
            itemPool.appendChild(el);
        });
        
        dropzones.forEach(zone => zone.innerHTML = '');
        checkDiagnoseButtonState();
    }

    const sortableOptions = {
        group: 'shared',
        animation: 150,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        onSort: () => checkDiagnoseButtonState()
    };

    new Sortable(itemPool, sortableOptions);
    dropzones.forEach(zone => new Sortable(zone, sortableOptions));

    function checkDiagnoseButtonState() {
        if (itemPool.children.length === 0) {
            diagnoseBtn.removeAttribute('disabled');
        } else {
            diagnoseBtn.setAttribute('disabled', 'true');
        }
    }

    // ---------------------------------------------------------
    // 4. 診断ロジック (スコア計算)
    // ---------------------------------------------------------
    const tierScores = { 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1 };

    function calculateResult() {
        const scores = {};
        dropzones.forEach(zone => {
            const tier = zone.dataset.tier;
            const score = tierScores[tier];
            const items = zone.querySelectorAll('.value-item');
            items.forEach(item => scores[item.dataset.id] = score);
        });

        let socialScore = (scores['item_family']||0) + (scores['item_contribution']||0) + (scores['item_love']||0);
        let individualScore = (scores['item_freedom']||0) + (scores['item_hobby']||0) + (scores['item_growth']||0);
        let isSocial = socialScore > individualScore;

        let stableScore = (scores['item_stability']||0) + (scores['item_health']||0) + (scores['item_money']||0);
        let challengeScore = (scores['item_challenge']||0) + (scores['item_creativity']||0) + (scores['item_growth']||0);
        let isStable = stableScore > challengeScore;

        let logicScore = (scores['item_honor']||0) + (scores['item_money']||0) + (scores['item_challenge']||0);
        let emotionScore = (scores['item_love']||0) + (scores['item_family']||0) + (scores['item_contribution']||0);
        let isLogic = logicScore > emotionScore;

        let typeKey = 'TYPE_16';
        if (isSocial && isStable && !isLogic) typeKey = 'TYPE_1';
        else if (!isSocial && isStable && isLogic) typeKey = 'TYPE_2';
        else if (!isSocial && !isStable && isLogic) typeKey = 'TYPE_3';
        else if (isSocial && !isStable && isLogic) typeKey = 'TYPE_4';
        else if (isSocial && !isStable && !isLogic) typeKey = 'TYPE_5';
        else if (!isSocial && !isStable && !isLogic) typeKey = 'TYPE_6';
        else if (!isSocial && isStable && !isLogic) typeKey = 'TYPE_7';
        else if (!isSocial && !isStable && isLogic && (scores['item_health'] > 3)) typeKey = 'TYPE_8';
        else if (isSocial && isStable && isLogic) typeKey = 'TYPE_9';
        else if (!isSocial && !isStable && !isLogic && (scores['item_freedom'] > 3)) typeKey = 'TYPE_10';
        else if (isLogic && !isStable && (scores['item_money'] > 3)) typeKey = 'TYPE_11';
        else if (isStable && !isLogic && (scores['item_stability'] > 3)) typeKey = 'TYPE_12';
        else if (isSocial && isStable && !isLogic && (scores['item_contribution'] > 3)) typeKey = 'TYPE_13';
        else if (!isSocial && !isStable && isLogic && (scores['item_growth'] > 3)) typeKey = 'TYPE_14';
        else if (!isSocial && isStable && isLogic && (scores['item_hobby'] > 3)) typeKey = 'TYPE_15';

        return typeMasterData[typeKey];
    }

    // ---------------------------------------------------------
    // 5. 16タイプのメタティア表の生成
    // ---------------------------------------------------------
    function renderAllTypesTierList() {
        const metaTiers = {
            'S+': ['TYPE_4'],
            'S': ['TYPE_1', 'TYPE_9', 'TYPE_11'],
            'A': ['TYPE_2', 'TYPE_5', 'TYPE_8', 'TYPE_13', 'TYPE_16'],
            'B': ['TYPE_3', 'TYPE_6', 'TYPE_7', 'TYPE_12', 'TYPE_15'],
            'C': ['TYPE_10', 'TYPE_14']
        };

        allTypesTierDisplay.innerHTML = '';
        
        for (const [tier, types] of Object.entries(metaTiers)) {
            const row = document.createElement('div');
            row.className = 'tier-row';
            
            const label = document.createElement('div');
            label.className = `tier-row__label`;
            label.style.backgroundColor = `var(--tier-${tier.toLowerCase().replace('+','')})`;
            label.textContent = tier;
            
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'tier-row__dropzone';
            itemsContainer.style.flexWrap = 'wrap';
            
            types.forEach(typeKey => {
                const wrapper = document.createElement('div');
                wrapper.className = 'meta-tier-icon-wrapper';
                
                const img = document.createElement('img');
                img.src = `images/${typeMasterData[typeKey].image}`;
                img.className = 'meta-tier-icon';
                img.alt = typeMasterData[typeKey].name;
                
                const tooltip = document.createElement('span');
                tooltip.className = 'meta-tier-tooltip';
                tooltip.textContent = typeMasterData[typeKey].name;
                
                wrapper.appendChild(img);
                wrapper.appendChild(tooltip);
                itemsContainer.appendChild(wrapper);
            });
            
            row.appendChild(label);
            row.appendChild(itemsContainer);
            allTypesTierDisplay.appendChild(row);
        }
    }

    // ---------------------------------------------------------
    // 6. イベントリスナー
    // ---------------------------------------------------------
    diagnoseBtn.addEventListener('click', () => {
        const result = calculateResult();

        resultImage.src = `images/${result.image}?t=${new Date().getTime()}`;
        resultTypeName.textContent = result.name;
        resultMetaTier.textContent = result.metaTier;
        resultDescription.innerText = result.description;
        resultCompatibility.textContent = result.compatibility;

        userTierDisplay.innerHTML = '';
        const tierListClone = document.getElementById('capture-tier-list').cloneNode(true);
        tierListClone.removeAttribute('id');
        userTierDisplay.appendChild(tierListClone);

        renderAllTypesTierList();

        appView.classList.add('hidden');
        resultView.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    retryBtn.addEventListener('click', () => {
        resultView.classList.add('hidden');
        appView.classList.remove('hidden');
        renderInitialItems();
        window.scrollTo(0, 0);
    });

    shareTwitterBtn.addEventListener('click', () => {
        const typeName = resultTypeName.textContent;
        const metaTier = resultMetaTier.textContent;
        const text = `私の価値観から導き出された性格タイプは${typeName}（${metaTier}）でした！\n\n#価値観ティア表性格診断 #性格診断`;
        const url = window.location.href; 
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    });

    downloadImgBtn.addEventListener('click', async () => {
        const targetElement = document.getElementById('user-tier-display');
        
        try {
            const canvas = await html2canvas(targetElement, {
                backgroundColor: '#1a1a1a',
                scale: 2
            });
            
            const link = document.createElement('a');
            link.download = 'my-value-tier.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('画像の生成に失敗しました', error);
            alert('画像の生成に失敗しました。');
        }
    });

    // ---------------------------------------------------------
    // 7. 背景アニメーション
    // ---------------------------------------------------------
    function createBackgroundAnimation() {
        const bgContainer = document.createElement('div');
        bgContainer.className = 'bg-animation-container';
        
        for (let i = 0; i < 4; i++) {
            const row = document.createElement('div');
            row.className = `bg-marquee-row ${i % 2 === 0 ? 'bg-marquee-left' : 'bg-marquee-right'}`;
            
            for (let copy = 0; copy < 2; copy++) {
                const content = document.createElement('div');
                content.className = 'bg-marquee-content';
                
                const shuffledItems = [...valueItemsData].sort(() => Math.random() - 0.5);
                
                for (let repeat = 0; repeat < 5; repeat++) {
                    shuffledItems.forEach(item => {
                        const img = document.createElement('img');
                        img.src = item.img;
                        img.className = 'bg-icon';
                        content.appendChild(img);
                    });
                }
                row.appendChild(content);
            }
            bgContainer.appendChild(row);
        }
        
        document.body.insertBefore(bgContainer, document.body.firstChild);
    }

    // 初期化
    renderInitialItems();
    createBackgroundAnimation();
});
