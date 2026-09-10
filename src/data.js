// 출연진·연출진. 사진은 src/assets/profiles/<id>.webp 에 두고 photo 에 id 만 적는다.
const photos = import.meta.glob('./assets/profiles/*.webp', { eager: true, import: 'default' })
const photo = (id) => photos[`./assets/profiles/${id}.webp`]

export const CAST = [
  { role: '벨마 켈리', name: '김수빈', photo: 'velma1', text: '난 누구의 여자도 아냐 내 인생을 사랑해' },
  { role: '벨마 켈리', name: '김경민', photo: 'velma2', text: '잘 봐, 팔근육! 멋진 전완근!' },
  { role: '벨마 켈리', name: '변지현', photo: 'velma3', text: '선생님의 이중생활 😏' },

  { role: '록시 하트', name: '이상아', photo: 'roxie1', text: '가자 BABY들~~(찡끗) ❤️' },
  { role: '록시 하트', name: '김가윤', photo: 'roxie2', text: '모두가 줄을 설거야 날 보려고♥ @lovellyoon' },
  { role: '록시 하트', name: '이근영', photo: 'roxie3', text: '신사숙녀 여러분, 이렇게 하찮은 저를 만나러 와주셔서 영광입니다.' },

  { role: '빌리 플린', name: '이수현', photo: 'billy1', text: '당신은 이 스타와 함께하잖아. 그것도 아주 빅스타!' },
  { role: '빌리 플린', name: '김현정', photo: 'billy2', text: '#돈 #비싼자동차 #여자' },
  { role: '빌리 플린', name: '김정우', photo: 'billy3', text: '감쪽같은 마법으로 모두 홀려봐' },

  { role: '마마 모튼', name: '임유림', photo: 'mama1', fit: 'contain', text: '이 곳 왕초는 바로 나라고 할 걸!' },

  { role: '에이모스 하트', name: '조현호', photo: 'amos1', text: '제가 여러분의 시간을 뺏지 않기를 바랍니다.' },
  { role: '에이모스 하트', name: '이시명', photo: 'amos2', text: '난 여전히 당신을 사랑해' },

  { role: '메리 선샤인', name: '김진경', photo: 'mary1', text: '천상의 목소리' },
  { role: '메리 선샤인', name: '정지은', photo: 'mary2', text: '1분 1초가 아까운데~~!' },

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
