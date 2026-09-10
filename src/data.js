// 출연진·연출진. 사진은 src/assets/profiles/<id>.webp 에 두고 photo 에 id 만 적는다.
const photos = import.meta.glob('./assets/profiles/*.webp', { eager: true, import: 'default' })
const photo = (id) => photos[`./assets/profiles/${id}.webp`]

export const CAST = [
  { role: '벨마 켈리', name: '김수빈', photo: 'velma1', text: '수빈 그녀는 나의 마음 속에... 항상 너무 멋지다고 생각해용... 연기도 미쳐떠' },
  { role: '벨마 켈리', name: '김경민', photo: 'velma2', text: '자이언트베이비 귀여워 쥭겠어 연기하랴 사람들 가르치랴 참 바빴을 영출이 하지만 그 모든걸 해낸다오' },
  { role: '벨마 켈리', name: '변지현', photo: 'velma3', text: '무심한듯 보이지만 그안에 숨겨진 섬세함 꼼꼼함 난 봤지 후후 누가뭐래도 넌나의 다람쥐 그리고 당신의 춤선 탐나' },

  { role: '록시 하트', name: '이상아', photo: 'roxie1', text: '진짜 중독성 미친 록시였숴 가끔 나오는 상아모먼트도 넘 웃김!' },
  { role: '록시 하트', name: '김가윤', photo: 'roxie2', text: '모두가 인정하는 우리팀 에이쓰 그리고 왜이렇게 사랑스러운거람? 러블리를 인간화하면 김가윤' },
  { role: '록시 하트', name: '이근영', photo: 'roxie3', text: '우리 애기 록시 못된 연기하느라 힘들었겠다 했는데 축구보면서 시원하게 쌍욕하는 너의 모습을 보고 괜히 록시가 된게 아니구나 싶었어' },

  { role: '빌리 플린', name: '이수현', photo: 'billy1', text: '대배우장 시카고를 계기로 다시는 배우장을 하지 않을 것만 같은 느낌이 듭니다' },
  { role: '빌리 플린', name: '김현정', photo: 'billy2', text: '(본인은 이미지라고 우기는) 시카고 공식 여미새지만 알고 보면 궂은일 도맡아하는 따듯한 남자' },
  { role: '빌리 플린', name: '김정우', photo: 'billy3', text: '흠' },

  { role: '마마 모튼', name: '임유림', photo: 'mama1', fit: 'contain', text: '우리의 마마 유림님! 엄청 든든했답니다. 마마 강림이었지만 사실 실체는 좀 귀요미야' },

  { role: '에이모스 하트', name: '조현호', photo: 'amos1', text: '제가 여러분의 시간을 뺏지 않기를 바랍니다.' },
  { role: '에이모스 하트', name: '이시명', photo: 'amos2', text: '난 여전히 당신을 사랑해' },

  { role: '메리 선샤인', name: '김진경', photo: 'mary1', text: '다들 노래와 목소리에 속지마세요! 팩폭 장인에 은근 끼쟁이라구욧' },
  { role: '메리 선샤인', name: '정지은', photo: 'mary2', text: '' },

  { role: '앙상블', name: '신보연', photo: 'ensemble1', text: '풍선껌 극혐!' },
  { role: '앙상블', name: '정민규', photo: 'ensemble2', text: '똘비 밥 주고 나왔다' },
  { role: '앙상블', name: '안제민', photo: 'ensemble3', text: '난 이 팀이 제일 좋더라' },
  { role: '앙상블', name: '심연재', photo: 'ensemble4', text: 'five,six,seven,eight!' },
  { role: '앙상블', name: '신정윤', photo: 'ensemble5', text: '이번에는 제가 카리스마 살인자래요! 이게 또 특종이잖아요?!' },
  { role: '앙상블', name: '최민혁', photo: 'ensemble6', text: '비싼 자동차? 관심 있어~!!' },
  { role: '앙상블', name: '이종민', photo: 'ensemble7', text: '섹시 댄스 goat' },
  { role: '앙상블', name: '정동현', photo: 'ensemble8', text: '보험왕 포오스' },
  { role: '앙상블', name: '송하빈', photo: 'ensemble9', text: "I'm still alive" },
].map((m) => ({ ...m, image: photo(m.photo) }))

export const DIRECTORS = [
  { name: '김하얀', role: '연출' },
  { name: '김도현', role: '음악 감독' },
  { name: '함도윤', role: '안무 감독' },
  { name: '김경민', role: '조연출' },
  { name: '안제민', role: '감독' },
]
