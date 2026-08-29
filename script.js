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
            description: '【ステータス傾向】防御力：S / 安定性：S / 攻撃力：C\n\n拠点の維持費を堅実に見直し、リスクの低い資源調達で防御力を底上げする重装甲ゴーレム。巨大ギルドでの出世競争や未開拓マップへの遠征といったハイリスクな冒険は好まず、「定時帰還」という強力なスキルを駆使して、パーティーメンバーとの時間を死守する。\n\n休日は安全地帯（セーフエリア）でのんびり過ごすことを至上の喜びとしており、全体にデバフがかかるような大規模な厄災が起きてもビクともしない。現環境において、最も確実かつ堅実に「平和」というクリアデータに到達できる最強のタンク枠だ。\n\n【隠された性格・感情分析】\n実は心根が非常に優しく、「誰かを守っている」という実感がないと自己肯定感が下がりやすい。変化を恐れるあまり、新しい提案に対して無意識に防御態勢（否定）から入ってしまう不器用な一面もあるが、一度受け入れた身内への愛情は底なし。\n\n【相性の良いパーティーメンバー】\n・突拍子もない無茶を言わず、日常の小さな幸せを共有できる人。\n・ゴーレムが築いた安全地帯で、優しくサポートしてくれる回復特化型（カーバンクルなど）。',
            compatibility: '【慈愛のカーバンクル】',
            image: 'type_golem.jpg'
        },
        'TYPE_2': {
            name: '【黄金のミミック】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】資金力：S / 単独行動：A / 共闘性：C\n\n所属ギルドからの報酬だけに依存するリスクを嫌い、個人でサブクエストをこなしながら自らのインベントリをひたすら豊かにしていく黄金の宝箱。\n\n見返りのない酒場の集まりや煩わしい派閥争いには一切ゴールドも時間も割かず、余暇は誰にも気兼ねなくソロでの探索や趣味にフル投資する。他者からのヘイトを徹底的に回避する合理的な思考を持っており、無駄な戦闘は行わない。大規模なレイド戦での協調性には欠けるが、個人としての自由度と資産スコアでは常にトップクラスを維持する狡猾な勝ち組プレイヤーだ。\n\n【隠された性格・感情分析】\n徹底した合理主義の裏には、「他人に自分の人生をコントロールされたくない」という強い警戒心が隠れている。感情論で詰め寄られるのが一番のストレス。冷たい人間だと思われがちだが、心を開いた相手には惜しみなくゴールド（時間やお金）を使うツンデレ気質。\n\n【相性の良いパーティーメンバー】\n・互いのテリトリー（一人の時間）を尊重し合える自立した人。\n・ミミックの合理的な判断に感情論で口出ししない、知識特化型（アヌビスやフクロウなど）。',
            compatibility: '【深淵の修道犬】',
            image: 'type_mimic.jpg'
        },
        'TYPE_3': {
            name: '【疾風のグリフォン】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】機動力：S / 成長力：A / 防御力：D\n\n「終身契約」という名の安全地帯（セーフエリア）を自ら飛び出し、ソロの傭兵や開拓者として未開のマップを飛び回る誇り高き幻獣。\n\n毎日同じルートを巡回するようなルーティンクエストに耐えられず、常に新しいスキルツリーの習得や、誰も手をつけていない新領域に挑み続ける。圧倒的な行動力と成長スピードを誇る反面、毎月のＨＰ（リソース）の増減が激しく、一度の大きなダメージで一気にゲームオーバーに近づく脆さがある。しかし、誰にも縛られず世界を自由に飛び回るその姿は、定住型プレイヤーの密かな憧れの的だ。\n\n【隠された性格・感情分析】\n自信満々に見えるが、実は「立ち止まったら時代に取り残される」という焦燥感を常に抱えている。孤独には強いが、自分の挑戦や実績を「すごい！」と認めてくれる良き理解者がいないと、急に翼が重くなる寂しがり屋な一面も。\n\n【相性の良いパーティーメンバー】\n・一緒に新しい景色を楽しんでくれる、フットワークの軽い人。\n・グリフォンの無茶な挑戦を縛らず、自由にさせてくれる放浪型（スライムなど）。',
            compatibility: '【放浪のスライム】',
            image: 'type_griffon.jpg'
        },
        'TYPE_4': {
            name: '【霊獣九尾の狐】',
            metaTier: '現環境 Tier S+',
            description: '【ステータス傾向】カリスマ：S+ / 影響力：S / 隠密性：G\n\n圧倒的なオーラでワールドチャットや街の広場を魅了し、トレンドやルールのメタ（流行）そのものを書き換えようとする伝説の妖狐。\n\n承認欲求のパラメーターが高く、自らのフォロワーや名声を触媒としてさらなる大魔法（影響力）を行使する。「この世界を変えたい」「自分のビジョンを実現したい」という壮大な目標を持ち、多くのプレイヤーがその尻尾に巻かれるように追従する。しかし、常に目立つためアンチからのヘイトも尋常ではなく、常に炎上リスクと隣り合わせの高難易度プレイングを要求される選ばれし者のジョブ。\n\n【隠された性格・感情分析】\n周囲の期待に応えようとするあまり、常に「理想の自分」というアバターを演じ続けており、本音を吐き出せる相手が極端に少ない。「誰からも愛されたい」という強烈な渇望と、「本当の自分を知られたら嫌われるかもしれない」という恐怖の板挟みになりがち。\n\n【相性の良いパーティーメンバー】\n・肩書きやフォロワー数ではなく、「素の自分」を面白がってくれる人。\n・狐のカリスマ性に嫉妬せず、包容力で受け止める安定型（ライオンヘッドやゴーレムなど）。',
            compatibility: '【百獣の王ライオンヘッド】',
            image: 'type_fox.jpg'
        },
        'TYPE_5': {
            name: '【癒やしのフェアリー】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】共感力：S / 精神力：A / 物理攻撃：E\n\n「愛と絆」に全ステータスを振り、パートナーや親友との関係性を何よりも重んじるサポート妖精。ギルドでの地位向上やレアアイテムの収集にはあまり興味がなく、休日に大切な人と穏やかな時間を過ごしたり、推しキャラへひたすらバフをかけ続けることで隠しパラメータ（幸福度）をカンストさせる。\n\n効率重視でギスギスした現環境において、その高い共感力と傾聴スキルは引く手あまただが、他人の感情に共鳴しすぎるため、悪意あるプレイヤー（テイカー）に騙されたりすると途端にメンタルブレイク（闇落ち）する危険性も孕む。\n\n【隠された性格・感情分析】\n他人の喜びを自分の喜びとして感じられる素晴らしい共感力を持つが、その反面、他人のネガティブな感情（愚痴や怒り）もスポンジのように吸収してしまう。「嫌われたくない」という思いからNOと言えず、一人になった時にどっと疲労が押し寄せることも。\n\n【相性の良いパーティーメンバー】\n・フェアリーの優しさに甘えすぎず、こまめに感謝（ありがとう）を伝えてくれる人。\n・悪意あるプレイヤーから物理的・精神的に守ってくれる防衛型（ゴーレムなど）。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_fairy.jpg'
        },
        'TYPE_6': {
            name: '【幻影のドッペルゲンガー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】創造性：S / 独自性：S / 協調性：E\n\n常識という名のテクスチャを無視し、誰にも理解されないマイナーな趣味や独自のアートワーク（創作活動）に没頭する変幻自在の魔物。\n\n一般的な「毎日同じ時間にログインして狩りをする」ようなメインクエストには全く適性がなく、無理に参加させるとすぐにステータス異常を起こす。しかし、誰も見向きもしないニッチな分野を極めたり、全く新しい概念を生み出すことにかけては右に出る者がいない。理解者はごく一部のコアなファンに限られるが、時代（パッチ）が彼らに追いついた時、伝説のクリエイターとして一躍トップティアに躍り出るポテンシャルを秘めている。\n\n【隠された性格・感情分析】\n「自分は他のモブキャラとは違う」という強烈なプライドと、「誰にも理解されないかもしれない」という孤独感を抱えている。自分のこだわり（作品や趣味）を否定されると激しく傷つくが、少しでも理解を示してくれる相手には異常なほどの親愛の情を寄せる。\n\n【相性の良いパーティーメンバー】\n・世間の常識を押し付けず、ニッチな趣味や世界観をリスペクトしてくれる人。\n・その場のノリで一緒に狂ってくれる、ポジティブな享楽型（ケット・シーなど）。',
            compatibility: '【陽気なケット・シー】',
            image: 'type_doppelganger.jpg'
        },
        'TYPE_7': {
            name: '【博識のフクロウ魔導士】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】知力：S / 探求心：A / フィジカル：D\n\n世界の真理を解き明かすため、古文書や最新のデータログを読み漁る知の探求者。情報のアップデートが激しい現環境において、その高い専門知識（パッシブスキル）が最大の武器になる。\n\n最前線で剣を振るったり物理的な交渉を行うのは苦手だが、後方の安全な大図書館エリアでコツコツと魔法陣（システム）を構築し続けるプレイスタイル。ステータスの大半を知力に全振りしているため、情報戦において無くてはならない存在。ただし、探求に没頭しすぎて現実世界のＨＰ（睡眠や健康）を疎かにしがちだ。\n\n【隠された性格・感情分析】\n知的な会話を好む反面、感情の言語化が極めて苦手。「なぜ怒っているの？」と聞かれても理詰めで返してしまい、余計に状況を悪化させがち。心の中では相手を大切に思っていても、それを表現するUI（表情や言葉）が実装されていない不器用な性格。\n\n【相性の良いパーティーメンバー】\n・フクロウの長いウンチクを面白がって聞いてくれる知的好奇心の高い人。\n・感情を論理的に解きほぐしてくれる、柔軟で適応力の高いタイプ（キメラなど）。',
            compatibility: '【万能のキメラ】',
            image: 'type_owl.jpg'
        },
        'TYPE_8': {
            name: '【鋼殻のミノタウロス】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】体力：S / 筋力：S / 魔法防御：B\n\n心身の健康と鍛え抜かれた肉体こそが最強の資本（武器）だと信じる、物理特化の獣人。プレッシャーの多い現環境において、多少の理不尽な連続クエスト（デスマーチ）やバッドステータスも、圧倒的なタフネスで物理的に弾き返す。\n\n回復ポーションを常飲し、日々のログインボーナス（肉体改造やサウナ）を絶対に欠かさない。複雑な派閥争いや魔法戦（論戦）は苦手だが、「健康的な精神は健康的な肉体に宿る」を体現しており、長期的なサバイバルにおいて最後に立っているのは間違いなくこのタイプだ。\n\n【隠された性格・感情分析】\n「悩み事の大半は筋トレや睡眠で解決する」と本気で信じており、複雑でドロドロした感情の絡み合いを解くのは大の苦手。まっすぐで裏表がない分、嘘や駆け引きに対しては強い嫌悪感を示す。実は褒められるとすぐにデレる、犬のような忠誠心を秘めている。\n\n【相性の良いパーティーメンバー】\n・回りくどい言い方をせず、ストレートに感情や要求を伝えてくれる人。\n・ミノタウロスの単純さをバカにせず、力強く背中を預けられる野心型（ドラゴンなど）。',
            compatibility: '【強欲のドラゴン】',
            image: 'type_minotaur.jpg'
        },
        'TYPE_9': {
            name: '【百獣の王ライオンヘッド】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】統率力：S / 名声：A / バランス：A\n\n巨大なギルドにおいて、管理職（リーダー枠）として群れをまとめ上げる威風堂々たる獣王。奇をてらった変革は起こさないが、既存のルールの中でパーティーのモチベーションを上げ、最高効率でクエスト報酬を叩き出す能力に長けている。\n\n冒険と拠点の防衛を両立させ、世界への貢献と自己のステータス向上を同時に達成する模範的プレイヤー。あまりにも適正が高すぎるため、気がつけば常にギルドマスターやレイドリーダーを押し付けられ、休む暇がないのが玉に瑕だが、本人はその重圧すらも心地よいバフと感じている。\n\n【隠された性格・感情分析】\n常に「頼れるリーダー」として振る舞っているが、本当は誰かに弱音を吐きたい夜もある。責任感が強すぎるあまり、他人のミスも自分の責任として抱え込んでしまう。褒め言葉よりも、「たまには休んで」という労いのポーションを一番求めている。\n\n【相性の良いパーティーメンバー】\n・ライオンの重圧を理解し、プレッシャーのかからないプライベートな空間を作れる人。\n・王の孤独を癒やし、時にはイタズラで笑わせてくれるようなタイプ（九尾の狐など）。',
            compatibility: '【霊獣九尾の狐】',
            image: 'type_lionhead.jpg'
        },
        'TYPE_10': {
            name: '【放浪のスライム】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】適応力：S / 自由度：S / 固定資産：G\n\n「豪華な拠点」や「高位の称号」といった重たい装備はインベントリの邪魔になるとして全て捨て去り、風の向くままに生きる軟体生物。効率や最適解が求められるガチ勢メタには全く噛み合わないが、本人の「楽しさスコア」は全キャラ中トップクラス。\n\nその日暮らしの単発クエストで最低限のポーション代を稼ぎ、残りの時間は趣味や探索に費やす。防御力は皆無に等しいため、ゲーム難易度が上がると一瞬で溶けてしまうリスクがあるが、その肩の力が抜けた生き方はガチ勢の心を癒やす清涼剤でもある。\n\n【隠された性格・感情分析】\n執着心がなく飄々としているが、心の底では「何者にもなれない自分」に対する微かなコンプレックスを感じる瞬間もある。しかし、「まあいっか」の精神（オートヒール）で瞬時に回復する。実は他人の顔色を窺うのが上手く、争いを避けるためにわざと道化を演じることも。\n\n【相性の良いパーティーメンバー】\n・スライムのその日暮らしのペースを面白がり、計画性を強要しない人。\n・一緒にいるだけで退屈しない、同じくらいフットワークの軽いタイプ（グリフォンなど）。',
            compatibility: '【疾風のグリフォン】',
            image: 'type_slime.jpg'
        },
        'TYPE_11': {
            name: '【強欲のドラゴン】',
            metaTier: '現環境 Tier S',
            description: '【ステータス傾向】野心：S / 攻撃力：S / リスク耐性：A\n\n富と権力、そして更なる高みへの挑戦を渇望し、常に上昇し続ける覇竜。ハイリスク・ハイリターンの現環境において、圧倒的な行動力で一攫千金のクエストやギルドの立ち上げを繰り返し、莫大なリソースをかき集めるトップティアのキャリー枠。\n\n現状維持は「退化」と同義であり、常に自分よりレベルの高い困難なボスに牙を剥く。何度大失敗（ゲームオーバー）しようとも即座にコンティニューする異常な精神力を持つが、そのアグレッシブさ故に周囲のモブキャラを焼き尽くしてしまうこともある。\n\n【隠された性格・感情分析】\n「圧倒的な結果」を出さなければ自分の価値はないという、強迫観念に近いストイックさを持つ。他人に厳しいが、それ以上に自分自身に対して最も厳しい。実は「何もしない時間」が極端に苦手で、休日はマグマのようにエネルギーを持て余してしまう。\n\n【相性の良いパーティーメンバー】\n・ドラゴンの高い熱量とスピード感についてこれる、またはそれを笑顔で受け流せる人。\n・無謀な突撃を優しくいさめ、精神的な帰る場所になってくれる防衛型（ミノタウロスなど）。',
            compatibility: '【鋼殻のミノタウロス】',
            image: 'type_dragon.jpg'
        },
        'TYPE_12': {
            name: '【温厚なトレント（樹木）】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】安定性：S / 回復力：A / 移動力：E\n\n大地にしっかりと根を張り、平穏な木漏れ日の中で静かに呼吸する大樹の精霊。情報過多でストレスフルな現環境において、あえて「何もしない」「インベントリを空にする」という究極の自己防衛策をとる隠れたメタキャラ。\n\n上位ランキング争いやレアアイテムには見向きもせず、「毎日同じ時間に食事をとり、夜はぐっすり眠る」というデイリークエストをこなすことこそが真の幸福だと悟っている。変化を極端に嫌うため、マップの地形が変わるような大型アップデートには弱いが、誰とも争わず最も平和なプレイスタイルを貫いている。\n\n【隠された性格・感情分析】\n波風を立てない平和主義者だが、自分のパーソナルスペース（神聖な森）に土足で踏み込まれることを何よりも嫌う。一度「この人は合わない」と判定すると、静かに、しかし確実にブロック（物理的・精神的な距離を置く）する冷徹さも持ち合わせている。\n\n【相性の良いパーティーメンバー】\n・沈黙が苦にならず、同じ空間で別々のことをしていても心地よく過ごせる人。\n・刺激の少ない穏やかな日常を愛する知識型（フクロウなど）。',
            compatibility: '【博識のフクロウ魔導士】',
            image: 'type_treant.jpg'
        },
        'TYPE_13': {
            name: '【慈愛のカーバンクル】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】支援力：S / 献身：S / 利己主義：G\n\n額の宝石から放たれる光で、傷ついた仲間を無条件で回復し続ける聖なる幻獣。自分自身のレベルアップやMVPになることよりも、「誰かの役に立っているか」「この世界に貢献できているか」を重視する必須級のヒーラー。\n\n救護や支援のクエストで活躍し、アタッカーが最大限の火力を出せるように裏方でバフをかけ続ける。ただし、自己犠牲の精神が強すぎるあまり、自分のＨＰ管理を忘れがち。悪質な寄生プレイヤーに搾取されやすいという弱点もある。\n\n【隠された性格・感情分析】\n他人に尽くすことで自分の価値を確認しているため、「あなたにはもう助けは必要ない」と言われるのが一番の恐怖。無意識のうちに「自分がいないとダメな人（ダメ男・ダメ女）」を引き寄せてしまうバグを抱えがち。本当は、誰かに甘えたいという願望を強く隠し持っている。\n\n【相性の良いパーティーメンバー】\n・与えられることを当然と思わず、些細なことでも感謝の言葉（報酬）をくれる人。\n・カーバンクルの自己犠牲を止め、しっかりと守ってくれるタンク役（ゴーレムなど）。',
            compatibility: '【要塞ゴーレム】',
            image: 'type_carbuncle.jpg'
        },
        'TYPE_14': {
            name: '【深淵の修道犬（アヌビス）】',
            metaTier: '現環境 Tier C',
            description: '【ステータス傾向】ストイック：S / 精神力：S / コミュ力：F\n\n現世の物質的な欲望を完全に断ち切り、自己の魂の成長（スキル上げ）のみを追い求める冥界の求道者。名声や他者からの評価といった現環境のスコアシステムを根本から否定しており、ひたすら書物や瞑想、自己鍛錬など、内面という無限のダンジョンに潜り続ける。\n\n富や地位、さらには馴れ合いのパーティープレイを「ノイズ」として切り捨てる極限の縛りプレイを行っている。一般プレイヤーからは「付き合いが悪いNPC」扱いを受けることが多いが、深い専門性と独自の哲学を持つ底知れぬジョブだ。\n\n【隠された性格・感情分析】\n他者に興味がないように見えて、実は人間観察を極めている。世間のくだらないノイズには冷笑的だが、自分の哲学や美学に触れる深いテーマには目を輝かせる。孤独を愛しているが、一生に一人でいいから、魂のレベルで共鳴できる「真の理解者」を待ち望んでいる。\n\n【相性の良いパーティーメンバー】\n・表面的な雑談ではなく、お互いの価値観や本質的な対話（ディープな会話）ができる人。\n・一般常識に縛られず、独自のクリエイティビティを持つタイプ（ドッペルゲンガーなど）。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_anubis.jpg'
        },
        'TYPE_15': {
            name: '【陽気なケット・シー】',
            metaTier: '現環境 Tier B',
            description: '【ステータス傾向】娯楽性：S / 幸運：A / 貯蓄率：F\n\n今この瞬間が楽しければそれでいい！という享楽主義を体現する、楽器を持った二足歩行の猫。効率重視でギスギスした狩り場において、パーティーの雰囲気を和ませる吟遊詩人として独自のポジションを築いている。\n\n稼いだゴールドはすべてその日の酒宴や娯楽（ガチャやイベント）に使い果たし、将来のための貯金という概念が存在しない。ステータス的には非常に脆いが、その底抜けの明るさとコミュ力で不思議と周囲から助けられる。長期的な攻略には向かないが、今この瞬間を一番楽しんでいる勝ち組。\n\n【隠された性格・感情分析】\n常に明るく振る舞っているが、実はかなりの寂しがり屋。シリアスな空気や重たい相談が苦手で、空気が悪くなると咄嗟におどけてごまかしてしまう（逃走スキル）。「楽しい自分」でいないと愛されないのではないか、というピエロ特有の哀愁を背負っている。\n\n【相性の良いパーティーメンバー】\n・ケット・シーのボケやイタズラを笑って許し、一緒にバカをやってくれる人。\n・重苦しい空気を持ち込まず、常に新鮮な刺激をくれるクリエイター気質（ドッペルゲンガーなど）。',
            compatibility: '【幻影のドッペルゲンガー】',
            image: 'type_caitsith.jpg'
        },
        'TYPE_16': {
            name: '【万能のキメラ】',
            metaTier: '現環境 Tier A',
            description: '【ステータス傾向】適応力：S / バランス：S / 尖り：D\n\nあらゆる属性とスキルをほどよく併せ持ち、どんな環境でも死に筋にならない究極のハイブリッド魔獣。パラメーターに極端な偏りがなく、メインクエストもサブクエストも、挑戦も安定も、すべてを「そこそこ」の高水準でキープするオールラウンダー。\n\n突出したＳランクの必殺技はないが、すべての能力がＢ〜Ａでまとまっているため、少人数のパーティーから大規模ギルドまで常に一定以上のパフォーマンスを発揮する。「器用貧乏」と悩むこともあるが、どんな理不尽なアプデが来ても絶対に腐らない、最強の適応力の化身だ。\n\n【隠された性格・感情分析】\n何でもそつなくこなせるため、周囲からは「悩みがなさそう」と思われがちだが、本人は「自分には突出した武器（個性）がない」という深い器用貧乏コンプレックスを抱えている。カメレオンのように相手に合わせて自分を変えるため、「本当の自分って何だっけ？」と迷子になることが多い。\n\n【相性の良いパーティーメンバー】\n・キメラの「合わせる能力」に甘えすぎず、本当の意見を引き出してくれる包容力のある人。\n・何でも受け入れてくれる安定感のあるタイプ（トレントなど）。',
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
        touchStartThreshold: 5,
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

    // --- タップで選択して移動する機能 ---
    let selectedItem = null;
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.value-item');
        
        // 1. アイテムをタップした場合
        if (item) {
            if (selectedItem) selectedItem.classList.remove('is-selected');
            
            if (selectedItem === item) {
                // 同じものをタップしたら選択解除
                selectedItem = null;
            } else {
                // 新しく選択
                selectedItem = item;
                selectedItem.classList.add('is-selected');
            }
            return; // 処理終了
        }

        // 2. ドロップゾーン（またはプール）の余白をタップした場合
        const dropzone = e.target.closest('.tier-row__dropzone, .item-pool');
        if (dropzone && selectedItem) {
            dropzone.appendChild(selectedItem);
            selectedItem.classList.remove('is-selected');
            selectedItem = null;
            checkDiagnoseButtonState();
        } else if (selectedItem) {
            // 関係ない場所をタップしたら選択解除
            selectedItem.classList.remove('is-selected');
            selectedItem = null;
        }
    });

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
