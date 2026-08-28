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
            description: '【ステータス傾向】防御力：S / 安定性：S / 攻撃力：C\n\nパーティー（家族やコミュニティ）を守るための絶対的な盾となる、重装甲の岩石生命体。現環境（現代社会）において「安定と防衛」は最も確実な生存戦略であるため、メタの最前線に君臨し続けている。\n\n圧倒的な耐久力を持ち、不況やトラブルという名の全体攻撃を受けてもビクともしない。己の身を挺して仲間の生存率を上げるその姿は、多くのプレイヤーから「一家に一台欲しい」と渇望される。冒険やスリルといった派手なプレイングは好まず、ひたすら拠点防衛に徹するためソロでの火力は低いが、その強固な基盤があればパーティー全体が絶対に全滅しないという強みがある。現環境における最強のタンク枠だ。',
            compatibility: '【慈愛のカーバンクル】',
            image: 'type_golem.jpg'
        },
        'TYPE_2': {
            name: '【黄金のミミック】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】資金力：S / 単独行動：A / 共闘性：C\n\n富を蓄え、自己の利益と自由のために動く宝箱の魔物。現環境である資本主義社会のシステムを最もハックしている存在であり、メタにおいて常に上位の勝率を叩き出している。\n\n煩わしいギルド（組織）のしがらみを嫌い、豊富な資金力を活かして強力なアイテムやバフを買い揃え、ソロプレイを優雅に楽しむ。他者へのヘイトを集めるリスクを徹底的に回避する合理的なAIを積んでおり、無駄な戦闘は一切行わない。ただし、パーティープレイの概念が薄いため、大規模レイド戦では居場所を見つけにくい。しかし、最終的な個人スコア（資産と自由な時間）では常にトップクラスを維持する狡猾な勝ち組プレイヤーだ。',
            compatibility: '【深淵の修道犬】',
            image: 'type_mimic.jpg'
        },
        'TYPE_3': {
            name: '【疾風のグリフォン】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】機動力：S / 成長力：A / 防御力：D\n\n誰にも縛られず、未開のマップを単独で飛び回る誇り高き幻獣。現環境においては、組織に属さないフリーランスのような立ち位置であり、機動力の高さは評価されるものの、環境の変化による被弾リスクが高いためTier Bに落ち着いている。\n\n安定したセーフエリア（拠点）に留まることを極端に嫌い、常に新しいスキルツリーの解放や未発見のダンジョン攻略に挑む。圧倒的な単体火力と成長スピードを誇るが、自己回復やバフを持たないため、一度の大きなデバフ（病気や怪我など）で一気にゲームオーバーに近づく脆さがある。しかし、その自由に大空を駆ける姿は、多くの定住型プレイヤーから密かな憧れの的となっている。',
            compatibility: '【放浪のスライム】',
            image: 'type_griffon.jpg'
        },
        'TYPE_4': {
            name: '【霊獣九尾の狐】',
            metaTier: '現環境 Tier S+',
            description: '【ステータス傾向】カリスマ：S+ / 影響力：S / 隠密性：G\n\n圧倒的なオーラで周囲を魅了し、世界そのもののルール（メタ）を書き換えようとする伝説の妖狐。現環境の頂点に君臨し、自らがトレンドを作り出すため、あらゆるパッチにおいて最強クラスの存在感を示す。\n\n名誉や地位といった称号を軽々と手に入れ、それを触媒としてさらなる大魔法（社会的影響力）を行使する。単なる自己顕示欲ではなく、「世界をより良くする」という壮大なビジョンを持っており、多くのプレイヤーがその尻尾に巻かれるように追従する。しかし、常に目立つためアンチからのヘイトも尋常ではなく、常に高難易度のプレイングを要求される。凡人には到底扱いきれない、選ばれし者のみのプレステージキャラだ。',
            compatibility: '【百獣の王ライオンヘッド】',
            image: 'type_fox.jpg'
        },
        'TYPE_5': {
            name: '【癒やしのフェアリー】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】共感力：S / 精神力：A / 物理攻撃：E\n\nパートナーや仲間との「愛と絆」に全ステータスを振ったサポート妖精。ギスギスした現代のオンライン社会において、その強烈なメンタルケア能力は極めて需要が高く、引く手あまたのTier Aキャラクター。\n\n物質的なドロップアイテムやランキング上位の称号には全く興味を示さず、「誰かと心を通わせる」という隠しパラメータをカンストさせることに至上の喜びを感じる。パーティーに一匹いるだけで全体の幸福度デバフを無効化する強力なパッシブスキルを持つ。しかし、依存度が高すぎるため、パーティーメンバーがログアウトしたり、悪質なプレイヤーに騙されたりすると、途端に闇落ち（メンタルブレイク）してしまう危険性も孕んでいる。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_fairy.jpg'
        },
        'TYPE_6': {
            name: '【幻影のドッペルゲンガー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】創造性：S / 独自性：S / 協調性：E\n\n常識という名のテクスチャを無視し、己の脳内にあるバグのような創造性を具現化する変幻自在の魔物。現環境のメインストリームからは外れたニッチな立ち位置だが、局所的なコンテンツでは無双するためTier Bに位置する。\n\n一般的なクエスト（労働やルーチンワーク）には全く適性がなく、無理に参加させるとすぐにステータス異常を起こす。しかし、誰も思いつかないような奇抜なルートを開拓したり、全く新しいアートワーク（芸術・趣味）を生み出すことにかけては右に出る者がいない。理解者はごく一部のコアなファンに限られるが、時代が彼らのパッチに追いついた時、伝説のクリエイターとして歴史に名を刻むポテンシャルを秘めている。',
            compatibility: '【陽気なケット・シー】',
            image: 'type_doppelganger.jpg'
        },
        'TYPE_7': {
            name: '【博識のフクロウ魔導士】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】知力：S / 探求心：A / フィジカル：D\n\n世界の真理を解き明かすために、膨大なログとデータファイルを読み漁る知の探求者。情報のアップデートが激しい現環境においては、その高いパッシブ知識量が武器になるものの、行動力に欠けるためTier B。\n\n最前線で剣を振るうこと（派手な挑戦）は好まず、後方の安全な図書館エリアでコツコツと魔法陣（知識）を構築し続けるプレイスタイル。ステータスの大半を知力と自己成長に全振りしており、ゲーム後半になればなるほど強力な専門家として覚醒する大器晩成型。派手さはないが、ギルドの頭脳として無くてはならない存在。ただし、研究に没頭しすぎて現実世界のHP（健康）を疎かにしがちな点には注意が必要だ。',
            compatibility: '【万能のキメラ】',
            image: 'type_owl.jpg'
        },
        'TYPE_8': {
            name: '【鋼殻のミノタウロス】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】体力：S / 筋力：S / 魔法防御：B\n\n心身の健康と鍛え抜かれた肉体こそが最強の武器だと信じる、物理特化の獣人。ストレスフルな現代社会において、バッドステータスを物理で弾き返すその圧倒的なタフネスは非常に生存力が高く、メタの上位に食い込む。\n\n「健康的な精神は健康的な肉体に宿る」という王道RPGの基本原理を忠実に守り、日々のログインボーナス（筋トレ・食事管理）を欠かさない。多少の理不尽なクエスト（仕事）を押し付けられても、持ち前のスタミナでゴリ押しクリアしてしまう頼もしさがある。複雑な政治的駆け引きや魔法戦（論戦）は苦手だが、最後に立っているのはいつもこのタイプ。己のフィジカルこそが最大の資本であると理解している強者だ。',
            compatibility: '【強欲のドラゴン】',
            image: 'type_minotaur.jpg'
        },
        'TYPE_9': {
            name: '【百獣の王ライオンヘッド】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】統率力：S / 名声：A / バランス：A\n\n群れをまとめ上げ、王道ルートを力強く突き進む威風堂々たる獣王。現環境のあらゆる組織・ギルドにおいてリーダー枠として重宝され、安定して高い報酬（地位と名誉）を獲得できるためTier Sに君臨。\n\nカリスマの狐ほど突飛な変革は起こさないが、既存のルールの中で最高効率の戦術を組み立て、パーティーメンバー全員のモチベーションを維持する管理能力に長けている。社会貢献と自己のステータス向上を両立させる模範的プレイヤー。あまりにも適正が高すぎるため、気がつけば常にギルドマスターやレイドリーダーを押し付けられ、休む暇がないのが玉に瑕だが、本人はその重圧すらも心地よいバフと感じている。',
            compatibility: '【霊獣九尾の狐】',
            image: 'type_lionhead.jpg'
        },
        'TYPE_10': {
            name: '【放浪のスライム】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】適応力：S / 自由度：S / 固定資産：G\n\n決まった形を持たず、風の向くまま気の向くままにマップを漂う軟体生物。効率や最適解が求められる現環境のガチ勢メタには全く噛み合わないためTier C判定だが、本人の「楽しさスコア」は全キャラ中トップクラス。\n\n地位、名誉、貯蓄といった重たいアイテムはインベントリの邪魔になるとして全て捨て去り、今日という日をどう面白く生きるかという「趣味と自由」のパラメータのみを追求する。どんな劣悪な環境（スロット）にもスッと入り込める柔軟性を持つが、防御力は皆無に等しいため、ゲームの難易度が上がると一瞬で溶けてしまうリスクがある。しかし、その肩の力が抜けたプレイスタイルは、疲れ切ったガチ勢の心を癒やす清涼剤でもある。',
            compatibility: '【疾風のグリフォン】',
            image: 'type_slime.jpg'
        },
        'TYPE_11': {
            name: '【強欲のドラゴン】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】野心：S / 攻撃力：S / リスク耐性：A\n\n富と力、そして更なる高みへの挑戦を渇望し、常に上昇し続ける覇竜。ハイリスク・ハイリターンの現環境において、その圧倒的な行動力で莫大なリソース（お金と成功）をかき集めるトップティアのキャリー枠。\n\n現状維持は「退化」と同義であると考え、常に自分よりレベルの高いボス（困難なビジネスや挑戦）に牙を剥く。何度ゲームオーバーになろうとも、即座にコンティニューして立ち上がる異常なレジリエンス（精神的耐久力）を持つ。その生き様はあまりにもアグレッシブで、周囲のモブキャラを焼き尽くすこともあるが、競争社会というPvPアリーナにおいては間違いなく最強の一角。欲望こそが彼らの無限のMP源である。',
            compatibility: '【鋼殻のミノタウロス】',
            image: 'type_dragon.jpg'
        },
        'TYPE_12': {
            name: '【温厚なトレント（樹木）】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】安定性：S / 回復力：A / 移動力：E\n\n大地にしっかりと根を張り、平穏な木漏れ日の中で静かに呼吸する大樹の精霊。変化が激しくストレスフルな現環境において、あえて「動かない」という究極の自己防衛策をとることで生存競争を生き抜く、隠れたメタキャラ。\n\n派手なレベルアップやレアアイテム（名誉や大金）には見向きもせず、「毎日同じ時間にご飯を食べ、夜はぐっすり眠る」というデイリークエストをこなすことこそが真の幸福だと悟っている。変化を嫌うため、環境が激変する大型アップデート時には弱いが、日々の生活における燃費の良さとストレス耐性の高さはピカイチ。誰の邪魔もせず、誰にも脅かされない、最も平和なプレイスタイルだ。',
            compatibility: '【博識のフクロウ魔導士】',
            image: 'type_treant.jpg'
        },
        'TYPE_13': {
            name: '【慈愛のカーバンクル】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】支援力：S / 献身：S / 利己主義：G\n\n額の宝石から放たれる光で、傷ついた仲間を無条件で回復し続ける聖なる幻獣。他者への貢献こそが自身の存在意義であり、どんなパーティーからも引く手あまたとなる必須級のヒーラー。\n\n自分がMVP（表舞台）になることは決して望まず、アタッカーが最大限の火力を出せるように裏方でバフをかけ続けることに喜びを見出す。その優しさは時にNPCにまで向けられ、困っている者を見捨てることができないシステム上の縛り（性格）を持っている。ただし、自己犠牲の精神が強すぎるあまり、自分のHP管理を忘れがち。悪質な寄生プレイヤーに狙われやすいという弱点もあるため、良き前衛（守護神）とパーティーを組むことが必須。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_carbuncle.jpg'
        },
        'TYPE_14': {
            name: '【深淵の修道犬（アヌビス）】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】ストイック：S / 精神力：S / コミュ力：F\n\n現世の物質的な欲望を完全に断ち切り、自己の魂の成長と真理のみを追い求める冥界の求道者。いいねやフォロワー数といった現環境のスコアシステムを根本から否定しているため、Tier付け自体が意味をなさない規格外の存在。\n\n他者とのマルチプレイを一切拒絶し、ひたすら自己の内面という無限のダンジョンに潜り続ける。お金や地位、さらには他者からの愛でさえも「ノイズ」として切り捨てる極限の縛りプレイを行っている。一般プレイヤーからは全く理解されない変人扱いを受けることが多いが、歴史の転換点において、新たな概念（哲学や芸術）という名のチートアイテムを生み出す可能性を秘めた、底知れぬジョブだ。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_anubis.jpg'
        },
        'TYPE_15': {
            name: '【陽気なケット・シー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】娯楽性：S / 幸運：A / 貯蓄率：F\n\n今この瞬間が楽しければそれでいい！という享楽主義を体現する、楽器を持った二足歩行の猫。効率重視のギスギスしたメタ環境において、パーティーの雰囲気を和ませる吟遊詩人として独自のポジションを築いている。\n\n稼いだゴールドはすべてその日の宴（趣味や娯楽）に使い果たし、将来のための貯金という概念がインベントリに存在しない。ステータス的には非常に脆いが、その底抜けの明るさとポジティブなパッシブスキルで、多くのプレイヤーを惹きつける。長期的な攻略には向かないものの、彼らが奏でる音楽（トークやノリ）は、ハードなレイド戦で荒んだプレイヤーたちの心を確実に救っている。人生というゲームを一番楽しんでいる勝ち組。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_caitsith.jpg'
        },
        'TYPE_16': {
            name: '【万能のキメラ】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】適応力：S / バランス：S / 尖り：D\n\nあらゆる属性とスキルをほどよく併せ持ち、どんな環境でも死に筋にならない究極のハイブリッド魔獣。パラメータに極端な偏りがなく、現代社会の複雑なクエスト要求に最も柔軟に対応できるオールラウンダー。\n\n仕事もプライベートも、挑戦も安定も、すべてを「そこそこ」の高水準でキープする。突出したSランクスキルはないが、すべてのステータスがB〜Aでまとまっているため、ソロでもパーティーでも常に一定以上のパフォーマンスを発揮する。異なるプレイスタイルのユーザーたちを繋ぐ架け橋（バランサー）として機能し、どんなアプデ（社会変化）が来ても絶対に腐らない、現環境を最も器用に生き抜く適応力の化身。',
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
