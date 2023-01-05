# javascript-fronf-end-dev

#step1
\*topic1.프로그래밍 오버뷰

\*topic2.프로그래밍 시작하기 in JavaScript

\*topic3.프로그래밍 언어 이해하기 -프로그래밍 언어란?
컴퓨터는 일을 대신 해주는 역할, 프로그램은 컴퓨터가 어떤 일을 해야 할지 알려주는 설명서, 프로그래밍 언어는 그 설명서를 작성하는 언어이다.

-용도, 상황, 프로젝트에 따라 적합한 프로그래밍 언어가 있다.

\*객체 지향 프로그래밍
객체 지향: 프로그래밍에 대한 여러 접근 방식 중 하나. -객체 지향의 장단점 정리
-(장점)
객체 지향 프로그래밍을 하면 데이터나 기능에 변화가 생기더라도, 관련된 객체만 신경을 쓰면 되니, 프로그래밍하기 훨씬 편하다.
그리고 조금 더 의미 있는 단위로 나누기 때문에, 코드를 이해하거나, 다른 프로그램에서 재사용하기에도 더 수월하다.
꼭 전체가 완성되지 않아도 일부 기능만 사용해볼 수도 있기 때문에 테스트에도 더 유리하다.

-(단점)
반면, 객체 지향의 단점은 코드를 잘 나누고 설계하는 것이 어렵다는 것이다.
코드를 작성하기도 전에, 설계부터 많은 노력이 든다.

그래서, 굳이 객체 지향적으로 만들 필요가 없는 경우들, 예를 들어 규모가 작아서 일을 나누지 않고 혼자 바로 만들어버릴 수 있다든지, 혹은 데이터를 크게 신경 쓰지 않아도 된다든지, 혹은 이후에 바뀔 염려가 거의 없는 경우에는 이런 설계 과정 없이 그냥 바로 만들어버리는 게 더 빠르고 효율적일 수 있는 것이다.

또 객체 지향의 단점이라 하면, 사람이 이해하고 작성하기 편한 방식으로 코드를 나눠두다 보니, 컴퓨터가 이해하는데 시간이 걸려 실행하는 속도가 느려지거나, 저장 공간을 많이 차지하기도 한다.

요약
(장점) -유지 보수에 용이하다. -가독성이 높다. -재사용하기 좋다. -테스트가 쉽다.

(단점) -설계가 어렵다. -작은 규모의 프로그램에서는 객체 지향적으로 작성하는 것이 더 오래 걸릴 수 있다. -극도로 빠르거나, 주어진 자원을 극도로 활용해야 하는 경우에는 좋지 않다. -임베디드와 같은 특정 분야에는 부적합하다.

\*Dynamic typing과 Static typing 정리하기
-Dynamic typing
코딩 속도가 빠르다.
실행 속도가 느리다.
코드의 내용이 눈에 잘 들어온다.
배우기 쉽다.
혼자서 빠르게 하는, 작고 단순한 프로젝트에 적합

-Static typing
코딩 속도가 느리다.
실행 속도가 빠르다.
코드의 구조가 눈에 잘 들어온다.
배우기 어렵다.
여러 사람이 협업하는, 크고 복잡한 프로젝트에 적합

총 정리
-Dynamic typing 언어
Dynamic typing 언어는 간편함과 편리함을 추구하며, 컴퓨터적 구조를 생략하기 때문에 코드의 내용(로직)이 눈에 잘 들어오고 사람이 코드를 이해하기 편해서 학습하기가 쉽다.  
다만 컴퓨터적 구조를 생략하기 때문에 실행 속도에 민감한 곳이나 성능이 좋지 않은 환경에서는 활약하기 힘들다. ex) 파이썬, js, 루비

-Static typing 언어
Static typing 언어는 안정성과 정교함을 추구하며, 컴퓨터적 구조를 코드에 적어주기 때문에 코드의 구조가 눈에 잘 들어오지만 코드가 복잡해져서 배우기 어렵다.  
다만 코드의 컴퓨터적 구조 덕분에 컴퓨터가 고민을 덜 하게 되고, 실행 속도가 중요한 곳에서 활약할 수 있다. 이런 특징을 살려 Static typing 언어는 임베디드, 실시간 투자, 인공 지능 분야에서 활약하고 있다. ex) c언어, c++

-프로그래밍 언어의 스펙트럼
저수준 언어: c언어, 자바
고수준 언어: 파이썬, 루비

-프로그래밍 언어의 종류 총정리하기 1.자세한 언어
자세한 언어로는 Low-level에 가까운 어셈블리 언어나 C 언어 등이 있다. 객체 지향 개념이 적용되지 않고, 코드를 작성할 때 자료형 등의 컴퓨터적 구조를 다 고려해줘야 하는 언어이다.

이 언어들은 사람보다는 컴퓨터의 논리적인 사고방식에 맞추어져 있다는 특징이 있어서 사람들이 작성하기는 어렵지만, 컴퓨터가 실행하기는 좋다. 프로그램을 빠르고 효율적으로 만드는데 최적화되어 있다. 그래서 스마트 워치, TV, 스피커, 전광판, 가전제품 등, 컴퓨터가 메인이 아닌 기계에 자주 사용된다. 이런 기계들은 보통 이런 작은 칩에서 돌아간다. 그래서 저장 공간이나 성능이 컴퓨터보다 상당히 열악하다. 여기서 C 같은 '자세한 언어'가 핵심적으로 사용된다.

참고로, 이런 곳에 들어가는 시스템을 임베디드 시스템이라고 부른다. IoT라고 해서, 이런 임베디드 시스템을 연결해서, 스마트홈을 만들거나, 기계들 사이의 통신을 할 수 있게 하기도 한다.

임베디드 시스템 말고도 자세한 언어가 활약할 수 있는 분야가 있다.
예를 들어 수많은 문자를 거의 실시간으로 전송해야 하는 텔레그램 같은 채팅 애플리케이션이나 트위치 같은 동영상 스트리밍 서비스, 검색 엔진, 개발자들이 코드 관리를 위해 사용하는 github, 머신 러닝 같은 빅데이터 처리 속도와 알고리즘이 중요한 그런 분야의 회사에서 많이 사용된다.
사람이 코딩하는 시간은 길어지지만, 컴퓨터가 실행하는 시간은 조금이라도 빠르게 하고 싶은 그런 경우들이다.

-자세한 언어의 장단점
단점: 코드를 작성하거나 고치는 게 힘들고 오래 걸린다.
장점: 프로그램을 만들기만 하면 컴퓨터가 실행하는 속도는 매우 빠르다. 성능이 안 좋은 컴퓨터에 적용하기 좋다.

2.체계적인 언어
자세한 언어와 마찬가지로 static typing 언어이지만, 객체 지향 개념이 적용된 언어이다. Java나 C++ 같은 언어들이 여기에 속하고, 체계가 잡혀있기 때문에, 여러 사람이 함께 작업하기에 가장 적합하고, 협업 과정에서 오류가 적어서 주로 큰 규모의 프로젝트에 적합하다.

규모가 큰 기업들에서는 Java를 많이 사용하고 있다. 구글, 에어비앤비, 우버 뿐 아니라 이베이, 핀터레스트, 스포티파이, 트립 어드바이저, 아마존, 인텔, 필립스, 회사 이름으로 나열하려면 끝도 없다. 그래서 취업을 하려면 Java를 해라. 이런 얘기도 있다.

-체계적인 언어의 장단점
단점: '자세한 언어'보다는 낫지만, 여전히 문법이 완전 쉽지는 않다. 코드를 작성하는 시간보다도 체계적으로 설계하는 데에 시간이 오래 걸릴 수 있다.
장점: 짜임새와 협업이 중요한, 규모가 큰 프로젝트에 적합하다. 객체 지향 개념이 적용되어서, “자세한 언어”보다 유지보수 하기가 편하다.

3.쉬운 언어
객체 지향 개념이 적용된, dynamic typing 언어를 말하며, 프로그래머가 아닌 사람도 비교적 쉽게 배우고 사용할 수 있는 Python, Ruby 등의 언어가 여기에 속한다.

이 언어들은 최대한 간결하고, 짧은 코드를 추구하고, 문법도 간편해서, 코드를 작성하는 시간이 가장 짧다. 쉬운 언어는 빠르게 개발이 필요한, 변화가 많고 잦은 분야에서 많이 사용되고, 데이터 사이언스, 업무 자동화와 같이 개인 규모의 프로젝트에서도 가장 많이 사용된다.

-쉬운 언어의 장단점
장점: 진입 장벽이 낮다. 배우기 쉽다. 코드를 읽거나 수정하기가 가장 간편하다. 코드를 빨리 작성할 수 있다.
단점: 코드 작성 시간은 짧지만, 컴퓨터의 코드 실행 속도가 느리다. 성능 제약이 심한 곳에서 빠른 속도를 내야 하는 경우는 사용할 수 없다. 프로그래밍 코드 문법에 제약이 너무 없어서, 큰 규모의 프로젝트에서 실수를 방지하기가 어렵다. 많은 사람들의 협업에는 부적합할 수 있다.

-가독성 좋은 코드 작성하는 법 1.코멘트 활용하기 2.이름 잘 짓기

-스타일 가이드 활용하기
각 언어의 스타일 가이드를 잘 활용하자.
구글에 언어 + style guide라고 검색하면 스타일 가이드가 나온다.

\*스타일 가이드 정리

Python 스타일 가이드
Python의 경우 PEP8(Python Enhance Proposal 8)이라는 스타일 가이드가 있다.  
Python 공식 스타일 가이드(일명: PEP8)  
https://www.python.org/dev/peps/pep-0008/

Google Python 스타일 가이드  
글로벌 IT 기업인 Google에서 사용하는 스타일 가이드.
PEP8과 비교해서 가장 다른 점은 “Docstring”을 작성하는 법에 대해 좀 더 깊이 다루고 있다.  
https://github.com/google/styleguide/blob/gh-pages/pyguide.md

JavaScript 스타일 가이드
JavaScript 표준 스타일 가이드  
https://standardjs.com/

Airbnb JavaScript 스타일 가이드  
https://github.com/airbnb/javascript

Google JavaScript 스타일 가이드  
https://google.github.io/styleguide/jsguide.html

Java 스타일 가이드
Java를 소유한 회사 오라클의 스타일 가이드  
https://www.oracle.com/technetwork/java/codeconvtoc-136057.html

Google Java 스타일 가이드  
https://google.github.io/styleguide/javaguide.html

-좋은 코드 구조를 만들기 위한 것
객체지향 프로그래밍, 디자인 패턴 (프로그래밍에서 고질적으로 발생하는 문제들의 해결책을 정리한 것)

-라이브러리
자주 쓰일 법한 코드를 모아놓은 것
언어를 선택하는 기준이 되기도 함
언어마다 자신에게 맞는 라이브러리가 있다.

-프레임워크
프레임워크는 이미 반은 완성된 프로그램이라고 볼 수 있다.
간단하고 빠르게 만들고 싶으면 프레임워크를 활용하면 된다.
몇가지 명령만으로도 프로그램의 뼈대를 만들 수 있다.
보안이나 암호화 같은 어려운 부분들을 알아서 해준다.

\*라이브러리 vs 프레임워크 -라이브러리
이미 누가 만들어 둔 도구를 가져와서 사용!
코드를 가져오는데 돈이 안듬!

-프레임워크
최소한의 노력으로 프로그램 완성 가능!

\*좋은 코드를 찾을 수 있는 곳

1.라이브러리
Seaborn 라이브러리 - https://seaborn.pydata.org/tutorial.html  
Pandas 라이브러리 - https://pandas.pydata.org/docs/user_guide/10min.html

2.개발 문서
Python - https://docs.python.org/ko/3/  
Javascript - https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide  
Ruby- https://www.ruby-lang.org/ko/documentation/  
Java- https://docs.oracle.com/en/java/

3.커뮤니티
구글 검색을 할 때 Best Practice라는 키워드로 검색을 해보면, 어떤 게 가장 좋은 코드인지 사람들의 논의 혹은 예시 코드들을 발견할 수 있을 것.

\*topic4. 프로그래머의 세계 이해하기

-컴퓨터 사이언스의 기본기
객체 지향 프로그래밍
알고리즘
자료 구조

-소프트웨어 공학
소프트웨어로 제품/서비스를 만드는 방법에 대한 학문

-대표적인 협업 방식
폭포수(Warterfall) : 각 단계를 완료하고 다음 단계로 넘어가는 방식
폭포수 방식의 문제점 : 각 단계를 한번에 완벽하게 끝내기 힘들 수 있음
애자일(Agile) : 결과물을 만들어 미리 확인하고 수정하며 진행. 중간중간 사용하면서 발전시키기 때문에 기능 변경이 유연함. 최근엔 폭포수 방식보다 더 많이 사용

\*테스트 프로세스 -고려하는 항목
얼마나 시급한가?
담당자는 누구인가?
뺴먹은 버그가 있는가?
버그가 잘 고쳐졌나?

이슈에 관한 정보를 모아놓은것 : 이슈 트레킹 툴
이슈가 많을 경우 프로젝트 매니저가 있는 경우도 있다.

\*버전관리
깃: 버전 관리는 하는 소프트웨어
깃허브: 깃을 이용해 코드를 저장하는 온라인 공간

\*개발자의 필수 프로그램 IDE
나에게 맞는 IDE 고르기

-유용한 프로그램들
IDE 외에도 개발자들이 많이 사용하는 프로그램들을 살펴보자면.
프로젝트 관리 툴: Jira, Trello, Asana, Confluence
메신저: Slack, Skype, Jandi
디자인 협업 툴: Sketch

StackShare에 가면, 개발자 혹은 개발팀에서 사용하는 다양한 툴을 찾아볼 수도 있다.

\*트렌드를 읽는 방법1(활발한 기술)
기술 선택 기준 -많은 사용자가 있는지 -활발한지

어떤 언어가 활발한가? -커뮤니티 살펴보기 -프로그래밍 언어와 관련된 자료 찾아보기

\*트렌드를 읽는 방법2(인정받는 기술)
stackshare에서 기업들이 사용하는 기술을 볼 수 있다.

-기업에서 만들거나 지원하는 기술
페이스북: React
구글: AngularJS
오라클: Java
애플: Swift

-다양한 자료 살펴보기
medium
Reddit
Quora
naver
kakao
우아한형제들

\*트렌드를 읽는 방법3(유망한 기술)
IT산업 전반에 대한 이해 필요
웹의 비중이 확대될것이라고 예상 -> 웹의 핵심 언어인 자바스크립트의 인기 UP

\*트렌드를 읽는 방법 정리 노트 1.활발한 기술 1.좋은 기술은 많은 사람들이 사용한다. 2.많은 사람들이 사용하면 커뮤니티가 활발해 지고, 좋은 토론과 자료들이 많이 만들어 진다. 3.좋은 토론과 자료를 통해, 더 많은 사람들이 기술을 선택하게 된다.

좋은 기술이 활발해지기도 하고, 활발한 기술이 좋은 기술이기도 하다.
활발한 기술은 좋은 자료를 쉽게 찾을 수 있고, 커뮤니티에서도 빠른 답변을 기대할 수 있기 때문에 빠르게 배우고 빠르게 문제를 해결할 수 있다. 혹은, 이미 나와 같은 일을 겪은 사람들의 질문과 답변도 많이 발견할 수 있을 것이다.

2.인정받는 기술
잘 모를 땐, 대세를 따르는 것도 하나의 방법
여러 회사들이 선택한 기술은 주로 뛰어난 개발자들의 많은 고민과 상의 끝에 내려진 결정이다. 물론 규모나 목적에 따라 더 적합한 기술이 달라질 수 있겠지만, 참고하면 좋다.

StackShare를 통해 유명한 회사들이 사용하는 기술을 알 수 있다. 하나의 회사에서 사용하는 기술들을 모아서 “기술 스택(Stack)”이라고 표현하기도 하니 참고하면 좋다.

기업에서 직접 만들거나 관리하는 기술도 있다. 예를 들어 React는 페이스북에서, AngularJS는 구글에서 관리를 하고 있죠. Java는 오라클의 소유이고, Swift는 애플에서, Go는 구글에서 만든 언어다.

3.유망한 기술
산업 트렌드가 바뀌면, 기술이나 경험의 활용도가 갑자기 커지거나 줄어들기도 한다. 개발자의 실력과 관계 없이 입지가 늘어날 수도, 줄어들 수도 있는 것이다. 그래서 기술을 선택할 때는 이 점을 고려해야 한다.

단순히 프로그래밍 분야의 트렌드만 파악할 것이 아니라, IT 혹은 산업 전반에 대한 이해를 가지고 판단해야 더 정확하게 판단할 수 있다. IT 산업은 워낙 변화의 속도가 빠르기 때문에, 늘 귀를 열어두어야 한다. 가트너에서는 매년 10대 전략 기술 트렌드를 발표한다.
이런 자료에 늘 귀를 열고, 산업과 기술이 어떻게 흘러가는 중인지 넓은 시야를 갖는 것이 필요하다.

\*다양한 애플리케이션
애플리케이션: 소비자가 직접 사용하는 프로그램

*컴파일러와 인터프리터 요약
*컴파일러
개발 편의성: 코드를 수정하고 실행하려면 컴파일을 다시 해야 한다. 👎
실행 속도: 빠르다. 👍
보안: 프로그램의 코드가 유출되지 않는다. 👍
파일 용량: 프로그램의 실행 파일 전체를 전송해야 하므로, 용량이 크다. 👎
프로그래밍 언어: C, C++처럼 비교적 저수준에 가까운 언어

\*인터프리터
개발 편의성: 코드를 수정하고 즉시 실행할 수 있다. 👍
실행 속도: 느리다. 👎
보안: 프로그램의 코드가 유출될 수 있다. 👎
파일 용량: 프로그램의 코드만 전송하면 실행이 되므로, 용량이 작다. 👍
프로그래밍 언어: Python, Ruby처럼 비교적 고수준에 가까운 언어

컴파일러는 “개발 편의성은 떨어지지만, 실행 속도는 빠르다.”
인터프리터는 “개발 편의성이 높지만, 실행 속도는 느리다.”

고수준 언어는 개발 편의성이 생명인 언어인데, 컴파일 과정을 매번 거쳐야 한다면, 그 장점을 다 잃어버리고 말겠죠?
그래서 파이썬, 루비같은 고수준 언어는 인터프리터 방식을 주로 사용합니다.

반면, 저수준 언어는 개발 과정이 좀 힘들더라도, 어떻게든 최고의 성능, 효율, 속도를 만들어내고자 했습니다. 그런데 그게 인터프리터 방식으로 실행되어서, 느린 환경에서 실행된다면, 힘들여서 저수준 언어로 개발한 이유가 다 사라지겠죠?
그래서 C, C++ 같은 저수준에 비교적 가까운 언어들은 컴파일 방식으로 실행되는 경우가 많습니다.

\*운영체제의 역할 I (입력과 출력)
애플리케이션 개발자-> 애플리케이션 개발
운영체제 개발자-> 운영체제 개발

\*운영 체제의 역할 II (저장과 불러오기) 1.휘발성 vs 비휘발성 2.빠르고 작은 용량 vs 느리고 많은 용량 3.데이터 수정 가능 vs 데이터 수정 불가능

저장장치
ROM, RAM, HDD, SSD, CPU(cache, register)

\*운영 체제의 역할 III (여러 프로그램 동시에 빠르게 실행하기)
운영체제가 여러 애플리케이션의 역할분담, 일하는 순서를 정해준다

\*운영 체제의 종류
Windows macOS Android iOS
Windows, Android : 사용자 설정을 더 쉽게 바꿀 수 있음. 보안에 취약
macOS, iOS: 보안이 철저한 대신 환경설정의 선택지가 제한되어 있음.

운영 체제의 종류 1.데스크톱/랩톱 ex) Windows, Microsoft Windows, macOS, Linux 2.모바일: ex) Android, iOS 3.서버: 안정성, 속도, 효율이 가장 중요! Ubuntu, Unix 4.임베디드: 기계안에 들어가는 운영체제 종류나 환경이 다양해서 운영체제가 매우 많음.
실시간 운영 체제(Real-time operating system, RTOS) ex) WxWorks, RT LINUX

\*플랫폼의 파편화 -앱을 만드는 개발자의 고충
플랫폼이란?: 프로그램이 실행되는 하드웨어, 소프트웨어 환경
각 플랫폼에 맞게 프로그램을 만들어야함!

-플랫폼 의존성: 플렛폼의 갯수에 맞게 프로그램을 만들어줘야한다.

-플랫폼 의존 구조
사용자
애플리케이션
운영체제
하드웨어

\*표준의 필요성 -플랫폼 파편화 문제의 해결책: 표준 (상호간의 약속)

\*크로스 플랫폼 I (가상 머신) -크로스 플랫폼: 여러 OS, CPU 등에서 동일하게 실행할 수 있는 환경
가상의 컴퓨터: 어댑터라고 생각하면됨. java에서 가상머신 JVM을 만듦.

\*크로스 플랫폼 II (웹)
-JVM과 비슷한 역할: 웹브라우저. 웹 규격에 맞춰 제작. -웹은 더 간편하게 크로스 플랫폼을 만들 수 있음 -> 반응형 웹디자인 -국제표준화 기구 ISO: 웹표준 -자바스크립트가 웹에서 많이 쓰이다보이 웹을 넘어서 다양한 곳에서도 많이 쓰이고 있다. -웹의 문제: 브라우저 호환성 문제 -브라우저: 웹 호환성이 100% 지켜지지않는 이유!
웹 표준 버전 =/ 웹브라우저 버전, 일부러 웹 표준과 다르게 만듦.

\*네이티브 애플리케이션과 웹 애플리케이션 -웹의 기술 발전 -> 웹 애플리케이션 (웹을 활용해서 애플리케이션처럼 동작하는 것) -앱을 사용자에게 쓰게하려면 네이티브 애플리케이션, 웹 애플리케이션 두 종류가 있다.
-Native Application: OS와 기기에 내장된 여러 기능 활용 가능. 인터넷 없어도 실행 가능. 설치, 배포 과정을 거쳐야함.
-Web Application: 설치없이 실행 가능, 실시간 업데이트, 주소만 입력하면 접속 가능. 적은 투자와 노력으로 서비스 런칭 가능

\*웹을 활용하는 여러 가지 방법
-single-page Application: 페이스북, 지메일, 구글맵, 트위터
-Hybrid Web Application: 일반적인 네이티브 애플리케이션의 일부를 웹 사이트로 대체. (정해진 특정 공간만 바꿀 수 있음 ex)앱 속 광고)
-Progressive Web Application: Native Application과 Web Application의 장점만 합치려는 시도. 인터넷이 연결되지 않은 오프라인에서도 동작. 홈 화면에 설치 가능. OS 기능 사용 가능. 앱의 내용을 실시간으로 업데이트 가능. <- 이것들을 충족하면 Progressive Web Application이라고 부른다.

*topic5. 프로그래밍 핵심 개념 in JavaScript
*01.숫자형

- \*\* 거듭제곱
- % 나머지 연산

_02.숫자 연산 익히기 -연산 우선순위 나눗셈(/), 더하기(+), 나머지(%) 이중에선 더하기가 가장 우선순위가 낮다. -거듭제곱(\*\*)은 곱셈(_)보다 연산 우선순위가 높다.

\*03.문자열 기본 -문자열을 만드려면 "" 또는 ''안에 글자를 써야한다. -문자열은 반드시 같은 따옴표를 써야한다.

\*04.문자열 활용 -문자열 내부의 반복되는 따옴표 앞에 /를 써주면 문자열안의 기호라고 인식한다. -따옴표가 많아서 헷갈리면 따옴표 대신 백틱(`)을 대신 사용해주면 된다. -문자열 덧셈 : '문자열' + '문자열'

\*07. 불 대수 -불대수의 연산: AND OR NOT -명제: 참과 거짓이 확실한 문장

\*08. 불린형 -불린형: 자바스크립트에서 참과 거짓을 표현하는 자료형
-&&: and 연산자. 두 값이 모두 true일때만 true가 출력된다.
-||: or 연산자. 두 값중 하나만 true여도 true가 출력된다.
-!: not 연산자. true를 false로, false를 true로 만들어준다. 느낌표를 두번(!!) 붙이면 반대의 반대가 출력된다.

\*11. typeof 연산자
-typeof: typeof라는 키워드 다음에 값을 입력하면 이 값을 평가해서 해당하는 자료형을 문자열로 출력해준다.
-typeof는 더하기, 빼기 연산자보다 우선순위가 높다. -다른 연산과 함께 사용할때는 연산의 우선순위를 고려해서 계산할 값은 ()안에 넣어준다.

\*14. 형 변환 I
-String: 문자로 형변환해주는 함수. String()
-Number: 숫자로 형변환해주는 함수. Number() 불린값은 숫자형태로 형변환할 때 0과 1로 형변환이 된다.
-Bollean: 일반적으로 어떤 값을 불린으로 변환할때는 true로 변환이 된다. 따옴표만 있는 빈문자, NaN, 숫자 0은 false로 변환된다. 이렇게 false로 변환되는 값을 falsy값이라고 한다.

_16. 형 변환 II -산술연산(+, -, _, /, %, \*\*)
더하기를 할 때 순서에 상관없이 어느 한쪽이라도 문자열이 있다면 양쪽 모두 문자열로 바꾼 뒤 문자열 연산으로 동작한다.
NaN값은 어느 값과 연산해도 NaN값이 나온다.

-관계 비교 연산(<, <=, >, >=)
양쪽 값을 모두 숫자값으로 바꿔서 비교하는 경우가 일반적이다.

-같음 비교 연산(===, !==, ==, !=)
===,!== : 일치, 불일치
==, != : 동등, 부등
동등 비교는 숫자 형태로 형변환이 일어난다.

\*18. 템플릿 문자열 -`문자 ${변수, 계산식} 문자` ex) `내 이름은 ${name}이다.`

\*20. null과 undefined
-null, undefined: 값이 없다
-null: 값이 없다는 것을 의도적으로 표현할 때 사용하는 값. 의도적인 없음!
-undefined: 코드를 실행하면서 값이 없다는 것을 확인하는 값. 선언을 한 다음 값을 정해주지 않았다는 것을 의미. 처음부터 없음!

\*01. 할당 연산자
할당연산자: 오른쪽에 있는 피연산자를 왼쪽에 있는 피연산자에 할당한다.

\*02. 복합 할당 연산자
할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자를 복합 할당 연산자(Compound assignment operators)라고 한다.
x = x + 1;
x += 1;

x = x + 2;
x += 2;

x = x _ 2;
x _= 2;

x = x - 3;
x -= 3;

x = x / 2;
x /= 2;

x = x % 7;
x %= 7;

\*증가(increment), 감소(decrement) 연산자
변수의 값을 1씩 증가시키거나 감소시킬 때는 복합 할당 연산자보다 더 간략하게 쓸 수 있는 증가연산자, 감소연산자를 사용할 수도 있다.
더하기 기호를 연달아 쓰거나(++), 빼기 기호를 연달아 쓰면 됨(--).

\*06. return문 제대로 이해하기
return: 1.결과값을 돌려줌. 2.함수의 실행을 중단함. 함수 내부에서 return 키워드가 나오면 함수의 실행은 그 지점에서 종료됌.

\*07. return과 console.log의 차이
함수를 선언할 때 return문을 따로 작성하지 않으면 undefined값을 리턴한다.

\*09. 옵셔널 파라미터
파라미터가 있는데 함수를 호출할 때 아무런 값을 전달해주지 않으면 undefined가 출력된다.

-옵셔널 파라미터
파라미터에 값을 미리 할당하는 것.
옵셔널 파라미터는 선언을 할때 반드시 생성한 다음 맨 뒷쪽에 써야한다.

\*11. 변수의 scope
scope: 범위, 영역
블록문(Block Statement): {}로 감싼 코드
로컬 변수, 지역 변수 (Local Variable) : 블록문 안에서 선언된 변수
글로벌 변수, 전역 변수 (Global Variable): 함수 안이든, 밖이든 어디서나 유효한 변수

\*13. 상수
상수 (constant): 절대 변하지 않고 항상 일정한 값

\*01. if문
if문: 어떤 특별한 조건에 따라서 코드를 실행할지 말지 결정할 수 있는 문법

\*03. else if문
else if (추가 조건)
else {
if () {

} else if () {

}
}

\*06. switch문
switch (비교할\_값) {
case 조건값\_1:
동작부분;
break;
case2 조건값\_2:
동작부분;
break;
default:
동작부분;
}

\*07. switch문 vs if문
if문을 활용하면 switch문을 if문으로 대체할 수도 있다.
let myChoice = 2;

1.switch문
switch(myChoice) {
case 1:
console.log('토끼를 선택한 당신, ...');
break;
case 2:
console.log('고양이를 선택한 당신, ...');
break;
case 3:
console.log('코알라를 선택한 당신, ...');
break;
case 4:
console.log('강아지를 선택한 당신, ...');
break;
default:
console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

2.if문
if (myChoice === 1) {
console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
console.log('강아지를 선택한 당신, ...');
} else {
console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

-어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 좀 더 효과적이고
특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적이다.

-switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것과 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다는 것. 기억하기

\*09. for문
for문 (for statement)
for (초기화부분; 조건부분; 추가동작부분) {
동작부분
}

\*10. for문 Tip

1. 추가동작부분을 꼭 채울 필요는 없다.
2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
   -for 반복문의 초기화 부분에서 생성한 변수는 for문 안에서의 로컬변수가 된다.
   -for문 안에서 생성한 로컬변수이기 때문에 for 반복문이 종료되고 나서 for 반복문 밖에서 변수를 사용하려고 하면 오류가 발생한다.
3. 초기화 부분도 반드시 채울 필요는 없다. 단, for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없다.
   -for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요하다. 그렇지 않으면 실행 오류를 만나게 된다.

\*13. while문 (while statement)
while (조건부분) {
동작부분
}

\*16. break와 continue
-break는 반복문에도 활용할 수 있다.
break를 반복문에서 활용하면 반복문의 조건부분에 상관없이 반복문이 실행되는 도중에 빠져나올 수 있다.

-continue를 만나게되면 그 아래 코드들은 실행되지 않고 바로 다음 추가 동작 단계로 넘어간다.

#프로그래밍과 데이터 in JavaScript
#03.객체 -여러가지 값을 한번에 저장하고 싶다면 객체라는것을 사용하면 된다. -객체는 자바스크립트의 거의 모든 문법에 녹아있다.

\*Property Name 주의사항!

1. 첫번쨰 글자는 반드시 문자, 밑줄(\_), 달러기호($) 중 하나로 시작!
   2 띄어쓰기 금지!
2. 하이픈(-)금지!

\*Property Value -제한된 자료형이 없다.(모든 자료형 가능)

- 객체안에 객체를 넣는것도 가능

#03. 객체에서 데이터 접근하기
객체의 프로퍼티에 접근하는 방법 2가지

1. 점 표기법 ex) console.log(person.name); -프로퍼티네임.프로퍼티밸류
2. 대괄호 표기법 console.log(person['name']); -띄어쓰기나 숫자로 시작하는 프로퍼티에 접근 가능 -프로퍼티 네임을 문자열로 만드는 어떤 방법이든 사용 가능

존재하지않는 프로퍼티에 접근하려고하면 오류가 나는게 아니라 undefined 값이 나온다.

\*05. 객체 다루기 -객체의 프로퍼티 값 바꾸기
변수이름.프로퍼티네임 = '새로운 값'

-새로운 프로퍼티 추가하기
변수이름.추가할프로퍼티네임 = '추가할 값'

프로퍼티 삭제하기
-delete 변수이름.프로퍼티네임

\*07. 객체와 메소드 -객체의 메소드: 변수의 객체에 프로퍼티 값으로 들어가는 함수

\*for...in 반복문
객체의 프로퍼티 네임을 가져오는 반복문. 일반적인 for문으로는 대체할 수 없다.
for (변수 in 객체) {
동작부분
} -변수의 프로퍼티 네임들이 순서대로 출력된다.

\*10. for...in 주의사항 1.숫자형(양수) 프로퍼티 네임
프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있다. -다만 실제로 사용될 때는 문자열로 형 변환이 되어 사용된다. -예외적인 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능하다.

2.정수형 프로퍼티 네임
객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있다.

\*12. Date객체
내장객체: 자바스크립트가 원래 갖고있는 객체
Date객체: Date객체를 생성한 순간의 날짜를 가져온다. new Date();

new Date(1000); -> 1970년 1월 1일 00:00:00 UTC + 1초!
원하는 날짜를 문자열로 입력해서 객체를 생성할 수 있음 -> new Date('YYYY-MM-DD');
ex) new Date('2017-05-18');
시간까지 지정 가능 -> new Date('YYYY-MM-DDThh:mm:ss');

Date.getTime(); -> 1970년 1월1일 00:00:00 UTC부터 몇 밀리초 지났는지..? -> 타임스탬프(time Stamp)

\*13. Date객체 Tip
1.Date 객체 정보 수정하기
set으로 시작하는 다양한 메서드를 활용하면, 생성된 Date객체의 정보를 수정할 수도 있다.
(대괄호로 감싸진 요소들은 선택적인 요소이다.)
-setFullYear(year, [month], [date])
-setMonth(month, [date])
-setDate(date)
-setHours(hour, [min], [sec], [ms])
-setMinutes(min, [sec], [ms])
-setSeconds(sec, [ms])
-setMilliseconds(ms)
-setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)

2.간단하게 시간 정보 알아내기!
간단하게 시간 정보를 표현하고 싶다면 아레와 같은 메소드를 활용해 볼 수도 있다.

let myDate = new Date();

console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

3.똑똑한 Date?!
Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있다. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해준다.

let myDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(myDate) // Mon Feb 01 1988 00:00:00

4.지금 이 순간..!?
Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환한다. 이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것!

let myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true

5.Date객체의 형변환
Date 객체를 number 타입으로 변환할 경우 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값으로 변환됨.
다시 말해 Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻!

6.날짜를 표현하는 문자열
YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있다.
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
하지만 이런 방식을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 서로 다른 결과 값이 나올 수도 있기 때문에 적어도 IETF 호환 RFC 2822 타임스탬프와 ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장!

#01. 배열 (Array)
index === propertyName
console.log(배열이름[index]);

indexing (0~...)
console.log(course[1]);

#05. 배열 메소드
splice: 배열의 요소를 삭제하거나 수정하거나 추가할 수 있는 메소드
splice(2, 1, '23', '25') 첫번째:삭제할 인덱스, 두번째:삭제할 갯수, 세번째:추가할 요소

#07. 배열 메소드 II
배열의 첫 요소를 삭제: shift()
배열의 마지막 요소를 삭제: pop()
배열의 첫 요소로 값 추가: unshift()
배열의 마지막 요소로 값 추가: push()

#09. 배열 메소드 Tip 1.배열에서 특정 값 찾기 (indexOf / lastIndexOf)
배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 된다.
array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있다.lastIndexOf: indexOf와는 반대로 탐색을 뒤에서 부터 하게 된다.

2.배열에서 특정 값이 있는지 확인하기 (includes)
array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴한다.

3.배열 뒤집기 (reverse)
reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있다.

#10. for...of 반복문
for (변수 of 배열) {
동작부분;
}
-for...in 문은 변수에 배열의 프로퍼티 네임이 할당됐었는데, for...of문은 변수에 배열의 요소가 할당된다. for (let 변수 of 배열) { 동작부분; }

#12. 다차원 배열
다차원 배열: 배열의 안에 배열이 들어가는 형태

#01. 다양한 숫자 표기법
-let millionaire = 1000000000; === let myNumber = 1e9; -지수 표기법
지수 표기법은 컴퓨터 뿐만 아니라 과학, 공학, 수학처럼 숫자를 다루는 다양한 분야에서 아주 큰 수나 작은 수를 표기하는 방법 중 하나이다. -알파벳 e 오른쪽 값이 음수가 되면 이 숫자만큼 10의 거듭제곱으로 나누라는 의미이다. -> (-9.1e-5 === -0.000091); -숫자 표기법
-16진법 (Hexadecimal) let hex1 = 0xff; // 255 let hex2 = 0xFF; // 255
-8진법 (Octal) let octal = 0o377; // 255 // 2진법 (binary numeral system) let binary = 0b11111111; // 255

#숫자형 메소드
// Number let myNumber = 0.3591;

// toFixed(0 ~ 100) -소수를 다룰 때 사용하는 메소드. 파라미터로 숫자값을 전달해주면 그만큼 소숫점 아래의 자릿수를 고정해주는 메소드이다.
console.log(myNumber.toFixed(3)); -파라미터로 전달하는 값이 숫자값의 자릿수를 초과하게되면 0으로 대체된다. -주의해야할점 -> toFixed 메소드를 사용해 계산된 값은 문자열이다. -이 메소드로 수정된 값을 숫자로 사용하고 싶을때는 number 함수를 이용해서 숫자로 형변환을 해줘야한다. console.log(typeof Number(myNumber.toFixed(3))); -자바스크립트에서는 어떤 값 앞에 +기호를 붙여주면 number 함수와 똑같은 결과를 얻을수 있다. console.log(+myNumber.toFixed(3));

// toString(2 ~ 36) let myNumber = 0.3591;

console.log(myNumber.toString(2)); -> 11111111 console.log(myNumber.toString(8)); -> 377 console.log(myNumber.toString(16)); -> ff -결과값은 '문자열'이다.

-숫자형 메소드를 사용할 때 주의해야할 점 : 숫자에 바로 메소드를 사용할 수도 있는데, 숫자를 그냥 적으면 에러가 발생한다. 정수에 바로 점을 찍게되면 소숫점으로 인식하기 때문. -> 정수 형태의 숫자 값에는 메소드를 사용할 때 1.반드시 점 두개를 사용하거나, 255.. 2.양 옆을 괄호()로 감싸준다.

#04. Math 객체 -절댓값 (Absolute Number) : 어떤 값의 '양수(positive number)' 버전. console.log(Math.abs(-10)); -> 10 console.log(Math.abs(10)); -> 10

-최댓값 (Maximum) : Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴된다. console.log(Math.max(2, -1, 4, 5, 0)); -> 5

-최솟값 (Minimum) : Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴된다. console.log(Math.min(2, -1, 4, 5, 0)); -> -1

-거듭제곱 (Exponentiation) : 자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴된다. console.log(Math.pow(2, 3)); -> 8 console.log(Math.pow(5, 2)); -> 25

-제곱근 (Square Root) : Math.sqrt(x)를 하면 x의 제곱근이 리턴된다. console.log(Math.sqrt(25)); -> 5 console.log(Math.sqrt(49)); -> 7

-반올림 (Round) : Math.round(x)를 하면 x의 반올림된 값이 리턴된다. 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려간다. console.log(Math.round(2.3)); -> 2 console.log(Math.round(2.4)); -> 2 console.log(Math.round(2.49)); -> 2 console.log(Math.round(2.5)); -> 3 console.log(Math.round(2.6)); -> 3

-버림과 올림 (Floor and Ceil) : Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다. 이 경우, 소수 부분이 얼마 인지와는 상관이 없다. console.log(Math.floor(2.4)); -> 2 console.log(Math.floor(2.49)); -> 2 console.log(Math.floor(2.8)); -> 2 console.log('-'); -> - console.log(Math.ceil(2.4)); -> 3 console.log(Math.ceil(2.49)); -> 3 console.log(Math.ceil(2.8)); -> 3

-난수 (Random) : Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴된다. console.log(Math.random()); -> 0.21458369059793236 console.log(Math.random()); -> 0.6622040803059857 console.log(Math.random()); -> 0.785172717569619 console.log(Math.random()); -> 0.9056556038884926

#바보 자바스크립트? let sum = 0.1 + 0.2; console.log(sum); -> 0.30000000000004 ?! -사람과 컴퓨터가 숫자를 다루는 방식이 다르기 때문에 숫자를 계산할 때 오차가 발생한다. -오차를 해결하는 방법
1.toFixed() 메소드 사용하기 toFixed 값은 문자열이기 때문에 숫자로 형변환을 해주어야한다. -> console.log(Number(sum.toFixed(1))); Number 메소드 사용하기 -> console.log(+sum.toFixed(1)); + 붙여주기
2.Math.round() 메소드 사용하기 -> console.log(Math.round(sum \* 10) / 10);

#07. 문자열 심화 -자바스크립트에서는 문자열도 객체처럼 다룰 수 있다. 문자열은 배열과 비슷한 부분이 많다. // String myString = 'Hi codeit';

// 부분 문자열 접근
-slice(start, end) console.log(myString.slice(0, 2)); // 0번 인덱스부터 1번 인덱스까지 가져옴.
-console.log(myString.slice(3)); // 3번 인덱스부터 끝까지 가져옴.
-console.log(myString.slice()); // 문자열 전체를 가져옴.

// 양끝 공백 제거 console.log(myString.trim()); // trim 메소드

// 대소문자 변환
-console.log(myString.toUpperCase()); // 대문자
-console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
-console.log(myString.indexOf('i')); // 앞 부터
-console.log(myString.lastIndexOf('i')); // 뒤 부터 -없는 문자열을 찾으려고 하면 -1이 출력된다.

// 요소 접근
-console.log(myString.[3]); // 대괄호 표현법
-console.log(myString.charAt(3)); // charAt 메소드

// 문자열 길이
-console.log(myString.length); // length 프로퍼티

#문자열과 배열의 비슷한 점 -배열과 문자열 모두 length프로퍼티를 가지고 있고, 대괄호 표기법으로 각 요소에 접근할 수 있다. 꽤 많은 메소드들이 배열과 문자열 모두 동일하게 사용된다. 배열을 다룰 때 유용한 for..of문을 문자열에 활용할 수도 있다.

let myString = 'Codeit';

for (let str of myString) { console.log(str); } -> C o d e i t

console.log(typeof myString); -> string (문자열은 string(문자)) console.log(typeof myArray); -> object (배열은 object(객체)) -typeof 연산자를 사용해서 두 값의 자료형을 비교해보면, string과 object, 확실히 서로 다른 자료형인걸 확인할 수 있고,

console.log(myString === myArray); -> false console.log(myString == myArray); -> false -일치 비교뿐만 아니라, 느슨하게 비교하는 동등비교에서도 false가 출력되는걸 확인할 수 있다.

-mutable vs immutable -가장 중요한 차이는 배열은 'mutable(바뀔 수 있는)' 자료형인 반면 문자열은 'immutable(바뀔 수 없는)' 자료형이라는 것이다. -베열은 요소에 접근해서 할당연산자를 통해 요소를 수정할 수 있지만, 문자열은 한 번 할당된 값을 수정할 수 없다. 다르게 표현해서, 변수에 할당된 문자열을 바꾸고 싶다면, 일부를 바꾸는 게 아니라 새로운 문자열을 지정해주어야 한다.

// 배열은 mutable let myArray = ['C', 'o', 'd', 'e', 'i', 't']; myArray[0] = 'B'; console.log(myArray); -> (6) ["B", "o", "d", "e", "i", "t"]

// 문자열은 immutable let myString = 'Codeit'; myString[0] = 'B'; console.log(myString); -> Codeit

#기본형과 참조형 -자료형 (Date Type) : 기본형, 참조형
-Number String Null Bollean undefined
기본형 (Primitive Type) : 변수에 기본형 값을 다루는 방식은 모두 똑같다.
ex) let x = 3;
-Object
참조형 (Reference Type) : 변수에 객체를 할당하면 변수에 객체가 담기는 것이 아니라 그 객체를 가지고 있는 주소값이 담기는 것이다. ex) let x = {name: "codeit"}; -> 기본형 값을 변수에 담아 사용할 때는 값이 그대로 할당되고, 참조형 값을 변수에 담아 사용할 때는 해당 객체를 가리키는 주소값이 할당된다.

#참조형 복사하기 -참조형 값은 변수에 할당될 때 값 자체가 아니라 '주소값'이 할당된다.

// 참조형 복사하기 (Reference Type Copy)
// 배열일 때 let numbers1 = [1, 2, 3]; let numbers2 = numbers1.silce(); -> silce() : 괄호 안에 아무 숫자도 넣지 않으면 배열의 처음부터 끝까지 리턴 값으로 받아온다.

numbers2.push(4);

conosle.log(numbers1); -> (3) [1, 2, 3] conosle.log(numbers2); -> (4) [1, 2, 3, 4]

-> slice 메소드를 활용하면 배열을 복사하는 것과 같은 효과를 얻을 수 있다.

// 객체일 때

1. Object.assign(객체를 복사할 수 있는 메소드)를 활용하여 복사하기
   let course1 = { title: '파이썬 프로그래밍 기초', language: 'Python' };

let course2 = Object.assign({}, course1); -> Object.assign 객체를 복사할 수 있는 메소드

course2.title = '알고리즘의 정석';

console.log(course1); -> {title: "파이썬 프로그래밍 기초", language: "Python"} console.log(course2); -> {title: "알고리즘의 정석", language: "Python"}

2. for...in문을 함수로 만들어 사용하여 복사하기
   function cloneObject(object) { let temp = {};

for (let key in object) {
temp[key] = object[key];
}

return temp;
};

let course1 = { title: '파이썬 프로그래밍 기초', language: 'Python' };

let course2 = cloneObject(course1); let course3 = cloneObject(course1);

course2.title = '자료 구조'; course3.title = '객체 지향 프로그래밍';

console.log(course1); -> {title: "파이썬 프로그래밍 기초", language: "Python"} console.log(course2); -> {title: "자료 구조", language: "Python"}

#14. const, 변수와 상수 사이
변수 선언 var 변수 : var 변수는 let 이나 const 처럼 똑같이 키워드 다음에 변수이름을 써서 선언할 수 있고, var myVariable;

myVariable = 'codeit';

혹은 키워드와 변수이름, 그리고 할당연산자와 값으로 선언과 동시에 값을 할당해 줄 수도 있다. var myVariable = 'codeit';

#중복 선언 허용
-var 키워드로 선언한 변수의 첫 번째 문제는, let과 const와는 다르게 중복 선언이 가능하다.
똑같은 이름으로 변수를 한 번 더 선언하게 되면, 에러가 발생하는 것이 아니라 그냥 기존의 변수를 덮어써 버리는 것.
let키워드로 선언한 변수에 값을 재할당하는 것과는 엄연히 다르다.
var myVariable = 'codeit';
console.log(myVariable); -> codeit
var myVariable = 'Codeit!';
console.log(myVariable); -> Codeit!
이렇게 변수가 중복선언이 되면, 길고 복잡한 코드를 작성할 때 실수를 할 가능성이 커지고, 상황에 따라서는 치명적인 오류가 발생할 수 있다.

#함수 스코프 var 키워드 변수가 사라진 두 번째 문제는 Scope의 문제이다. let과 const 키워드로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 코드 블록, 즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 되지만, var 키워드로 선언한 변수는 scope가 function에서만 구분되어 있다. // let, const { let x = 3; }

function myFunction() { let y = 4; }

console.log(x); console.log(y);

-> Uncaught ReferenceError: x is not defined : let이나 const 키워드의 경우에는 중괄호로 감싸진 경우라면 모두 중괄호 밖에서는 지역 변수에 접근할 수 없다.

// var { var x = 3; }

function myFunction() { var y = 4; }

console.log(x); -> 2 console.log(y); -> Uncaught ReferenceError: y is not defined : 하지만 var 변수는 지역변수의 구분이 함수에만 있기 때문에 if, for, while, switch 등 다양한 상황에서 선언한 변수가 자칫, 전역변수의 역할을 하게 될 수도 있는 것.

\*참고 : 이렇게 함수를 기준으로만 적용되는 스코프는 함수 스코프, 코드 블록을 기준으로 적용되는 스코프는 블록 스코프라는 용어를 사용한다.

#끌어올림 (Hoisting) // let, const console.log(myVariable); -> Uncaught ReferenceError: Cannot access 'myVariable' before initialization let myVariable;

: let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없다. 하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능하다.

// var console.log(myVariable); -> undefined var myVariable;

: 변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작한다. var myVariable; console.log(myVariable);

이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다. 다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에 값은 그대로 두 번째 줄에 남아있다. console.log(myVariable); -> undefined var myVariable = 2; console.log(myVariable); -> 2

-한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용된다.

sayHi();

function sayHi() { console.log('hi'); }

-> hi 당연한 듯 함수가 잘 실행되는 모습을 확인할 수 있다. 이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만, 코드의 흐름에는 부정적인 영향을 끼칠 수 있다. 그래서 함수를 선언할 때는 가급적 코드 윗부분에 선언하거나, 호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성하는것이 좋다.

#STEP 3 웹 퍼블리싱
\*02. 기본 HTML 태그 정리

1. <!DOCTYPE> 선언

   HTML 파일을 쓸 때는 가장 먼저 <!DOCTYPE> 선언을 써야 한다.
   이전의 html 버전을 사용하려면 <!DOCTYPE>을 복잡하게 써야 하지만, 그냥 최신 버전인 HTML 5를 사용하기 위해서는 이렇게만 쓰면 된다.
   <!DOCTYPE html>

2. <title> 태그
   페이지의 제목은 <title> 태그에 써주면 된다. 
   브라우저의 탭이나 방문 기록에 나와 있는 바로 그 제목이 이 곳에 들어간다.
   <title>My First Website</title>

3. <h1>~<h6> 태그
   한 페이지에 여러 개의 머리말이 있을 수 있다. 그 중 가장 중요한 머리말은 <h1>(heading 1), 그 다음으로 중요한 머리말은 <h2>(heading 2). 이런 식으로 <h6>(heading 6)까지 작성할 수 있다.
   <h1>머리말 1</h1>
   <h2>머리말 2</h2>
   <h3>머리말 3</h3>
   <h4>머리말 4</h4>
   <h5>머리말 5</h5>
   <h6>머리말 6</h6>

<p> 태그
보통 문단은 <p>(paragraph) 태그 안에 넣는다. 물론 직접 설정할 수도 있지만 <p> 태그 위, 아래에는 기본적으로 여백이 조금씩 있다.

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

\*04. <b> 태그, <i> 태그 정리
<b> 태그
텍스트를 굵게 쓰고 싶으면 'bold'의 약자인 <b> 태그를 사용하면 된다.
Hello <b>World</b>!

<i> 태그
텍스트를 날려 쓰고 싶으면 'italics'의 약자인 <i> 태그를 사용하면 된다.
Hello <i>World</i>!

Phrase Tags
<b> 태그는 그냥 텍스트를 '볼드체'로 만들어주고, 마찬가지로 <i> 태그는 그냥 텍스트를 '이탤릭체'로 만들어준다. 둘 다 '시각적인 특징'만 갖고 있는 태그인데, HTML에서는 시각적인 특징 뿐만 아니라 의미도 담고 있는 phrase tag가 있다.

<strong> 태그
Hello <strong>World</strong>!

<strong> 태그는 감싸고 있는 텍스트가 중요하다고 표시하는 것이 목적이다. 지금 겉보기에는 두 태그가 똑같지만, 스크린리더(컴퓨터의 화면 낭독 소프트웨어: 시각 장애인, 학습/인지 장애인, 노인, 다문화 가정의 웹 접근성을 지원해주는 목적)가 글을 읽어줄 때 <strong>은 강조해서 읽을 수 있다.

<em> 태그
Hello <em>World</em>!
<i> 태그는 그냥 시각적으로 날려쓰는 것이 목적이라면, <em> 태그는 강조하는 것이 목적이다. em은 'emphasized'의 줄임말이다.

\*04. 도움되는 웹사이트 1.구글 2.스택오버플로우
3.jsfiddle.net

Serif - 끝이 구부러진 것이 특징
San-Serif - 끝이 구부러진게 없이 깔끔함.
Monospace - 모든 글자가 같은 넓이를 차지한다.
Cursive - 필기체
Fantasy - 그 외의 특이한 폰트

_background-repeat
/_ 반복하지 않음 \*/
background-repeat: no-repeat;

/_ 가로 방향으로만 반복 _/
background-repeat: repeat-x;

/_ 세로 방향으로만 반복 _/
background-repeat: repeat-y;

/_ 가로와 세로 모두 반복 _/
background-repeat: repeat;

/_ 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 _/
background-repeat: space;

/_ 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 _/
background-repeat: round;

_background-size
/_ 원래 이미지 사이즈대로 출력 \*/
background-size: auto;

/_ 화면을 꽉 채우면서, 사진 비율을 유지 _/
background-size: cover;

/_ 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 _/
background-size: contain;

/_ 픽셀값 지정 (가로: 30px, 세로: 50px로 설정) _/
background-size: 30px 50px;

/_ 퍼센트값 지정 (가로: 부모 요소 width의 60%, 세로: 부모 요소 height의 70%로 설정) _/
background-size: 60% 70%;

_background-position
/_ 단어로 지정해주기 (가로: left, center, right, 세로: top, center, bottom) _/
/_ 아래와 같은 총 9개의 조합이 가능 \*/
background-position: left top;
background-position: left center;
background-position: left bottom;
background-position: right top;
background-position: right center;
background-position: right bottom;
background-position: center top;
background-position: center center;
background-position: center bottom;

/_ 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) _/
background-position: 25% 75%;

/_ 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 100px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) _/
background-position: 100px 200px;

\*display의 종류

1. inline
2. block
3. inline-block
4. flex
5. list-item
6. none

다음 요소들은 기본 display 값이 inline이다.

1. <span>
2. <a>
3. <b>
4. <i>
5. <img>
6. <button>

다음 요소들은 기본 display 값이 block이다.

1. <div>
2. <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
3. <p>
4. <nav>
5. <ul>
6. <li>

\*inline-block
만약 inline 요소처럼 다른 요소들과 같은 줄에 머무르면서 block 요소처럼 가로, 세로 길이도 설정해주고 싶으면 inline-block을 사용하면 된다.

\*<img> 태그의 비밀
<img> 태그는 인라인이기 때문에 글자처럼 정렬이 된다.

\*가로 가운데 정렬

1. inline 요소
   inline 또는 inline-block 요소면 부모 태그에 text-align: center;를 써주면 된다.

2. block 요소
   block 요소면 margin-left: auto;, margin-right: auto;를 써주면 된다.

\*01. relative 포지션
Static position: 원래 있어야 할 자리에 있는 것 (기본)
Relative position: 상대적인 포지션. 원래 있어야할 곳에서 이동

\*04. fixed 포지션
Fixed position: 브라우저를 기준으로 포지셔닝을 해주는 것. 스크롤을 움직여도 똑같은 자리에 고정되어 있다. fixed로 위치를 바꿔주면 원래 있던 곳에서 빠져나온다.

\*04. absolute 포지션
Absolute position: 가장 가까운 포지셔닝이 된 요소가 기준.

\*01. float
float를 적용하면 붕뜨면서 그 공간은 공백이 된다. 인라인 요소나 인라인 블록 요소는 float 공간에 갈 수 없다.

\*03. multiple floats

\*05. clear
clear: 요소의 옆에 떠있는 요소가 없도록 함.

\*01. 리스트
ol: <ol> 정렬된 목록을 나타낸다. 보통 숫자 목록으로 표현한다.
li: <li> 목록의 항목을 나타낸다. 반드시 정렬 목록(<ol>), 비정렬 목록(<ul>, 혹은 메뉴(<menu>) 안에 위치해야 한다.

\*03. 부트스트랩 그리드 -기본 구성원

1. 컨테이너 (container)
2. 행 (row)
3. 열 (column)

-부트스트랩 사이트에 자세히 설명되어 있지만 많은 분들이 무시하는 몇 가지 규칙입니다:

행(<div class="row">)은 꼭 컨테이너(<div class="container">) 안에 넣어주세요.
열(<div class="col">)은 꼭 행(<div class="row">) 안에 넣어주세요. 오직 열만 행의 직속 자식이 될 수 있습니다.
콘텐츠(우리가 그리드에 넣고 싶은 내용)는 꼭 열(<div class="col">) 안에 넣어주세요.
이 규칙들만 지켜도 예상치 못한 레이아웃이 나오지는 않을 것입니다!

-기본 사용법
구성원들과 규칙을 알았으면 이제 사용법을 알아봅시다.

부트스트랩 그리드에는 한 줄에 기본적으로 12칸의 열(column)이 있다고 생각하시면 됩니다. 예를 들어서 한 줄을 정확히 3등분하고 싶으면 네 칸을 차지하는 열 세 개를 쓰면 되는 거죠. 네 칸을 사용하는 열은 <div class="col-4">입니다.

아래의 코드에서는 다양한 방식으로 12칸을 나누어보았습니다.

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <!-- 정확히 3등분 -->
      <div class="col-4 first">first</div>
      <div class="col-4 second">second</div>
      <div class="col-4 third">third</div>
    </div>

    <div class="row">
      <!-- 정확히 2등분 -->
      <div class="col-6 first">first</div>
      <div class="col-6 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 5 비율 -->
      <div class="col-2 first">first</div>
      <div class="col-10 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 2대 1 비율 -->
      <div class="col-3 first">first</div>
      <div class="col-6 second">second</div>
      <div class="col-3 third">third</div>
    </div>

  </div>
</body>

-12칸을 넘어가면?
만약 한 행에 12칸이 넘는 열이 들어간다면, 새로운 줄로 넘어가게 됩니다.

-Why 12?
부트스트랩을 만든 분들은 왜 하필 12라는 숫자로 정했을까요?

12는 상당히 많은 숫자들(1, 2, 3, 4, 6, 12)로 나누어지기 때문에 굉장히 유연합니다!

예를 들어서 8칸으로 나누고 싶더라도 12라는 숫자의 유연함 덕분에 쉽게 할 수 있습니다. col-6를 두 개 쓰면 2등분 할 수 있고, 그 안에서 또 col-3로 4등분을 하면 8칸이 생기겠죠?

이런식으로 열을 또 여러 열로 나누는 것을 '중첩(nesting)'한다고 부릅니다. 중첩을 하기 위해서는 우선 열(<div class="col-6">) 안에 새로운 행(<div class="row">)을 쓰셔야 합니다.

\*04. 부트스트랩 반응형 그리드
부트스트랩의 그리드 시스템은 반응형 웹 디자인을 할 때 가장 빛을 발합니다.

다음은 부트스트랩에서 정해둔 구간들입니다.

1.Extra Small (< 576px): 모바일
2.Small (≥ 576px): 모바일
3.Medium (≥ 768px): 타블릿
4.Large (≥ 992px): 데스크탑
5.Extra Large (≥ 1200px): 와이드 데스크탑

-컨테이너 (container)
기본적으로 컨테이너는 가운데 정렬이 되어 있고, 그리드의 행들을 감싸주는 역할을 합니다 (행들은 열들을 감싸주고 있고요!). 컨테이너의 종류는 두 가지인데요.

<div class="container">: 구간별로 그리드에 고정된 width를 설정해줍니다.
<div class="container-fluid">: 그리드는 항상 width: 100%;입니다.
<div class="container">
만약 구간별로 그리드에 고정된 가로값을 설정해주고 싶으면 "container" 클래스를 사용하세요. 구간별로 그리드가 고정되어 있으면 레이아웃이 더 예상 가능합니다. 따라서 저는 개인적으로 "container" 클래스를 사용하는 것을 선호하고, 디자이너에게 이렇게 구간별로 고정되는 방식으로 만들기를 부탁합니다!

<div class="container-fluid">
저는 많은 경우에 "container" 클래스를 선호하지만, 상황에 따라 그리드가 항상 100%의 가로 길이를 갖는 것이 좋을 때가 있습니다. 그럴 때는 "container-fluid" 클래스를 사용하면 됩니다.

"container"클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

.container {
width: 100%; /_ extra small _/
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}

/_ small _/
@media (min-width: 576px) {
.container {
max-width: 540px;
}
}

/_ medium _/
@media (min-width: 768px) {
.container {
max-width: 720px;
}
}

/_ large _/
@media (min-width: 992px) {
.container {
max-width: 960px;
}
}

/_ extra large _/
@media (min-width: 1200px) {
.container {
max-width: 1140px;
}
}

<div class="container-fluid">
저는 많은 경우에 "container" 클래스를 선호하지만, 상황에 따라 그리드가 항상 100%의 가로 길이를 갖는 것이 좋을 때가 있습니다. 그럴 때는 "container-fluid" 클래스를 사용하면 됩니다.

"container-fluid"클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

.container-fluid {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}

-열 (column)
반응형 구간별로 (총 12칸 중) 열이 차지하는 칸의 개수도 다르게 할 수 있습니다.

예시를 몇 가지 봅시다.

예시 1 (구간별로 모두 설정되어 있는 경우)

<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
1.Extra Small (< 576px): 12칸을 모두 차지
2.Small (≥ 576px): 6칸 차지
3.Medium (≥ 768px): 4칸 차지
4.Large (≥ 992px): 3칸 차지
5.Extra Large (≥ 1200px): 2칸 차지

예시 2 (특정 구간만 설정되어 있는 경우)
아래와 같이 특정 구간에만 열 수가 설정되어 있는 경우도 있습니다. 그렇다면 그 구간부터 새로운 설정이 있는 상위 구간까지는 같은 칸 수를 차지합니다.

<div class="col-12 col-lg-3">
1.Extra Small (< 576px): 12칸을 모두 차지
2.Small (≥ 576px): 12칸을 모두 차지
3.Medium (≥ 768px): 12칸을 모두 차지
4.Large (≥ 992px): 3칸 차지
5.Extra Large (≥ 1200px): 3칸 차지

<div class="col-6">
1.Extra Small (< 576px): 6칸 차지
2.Small (≥ 576px): 6칸 차지
3.Medium (≥ 768px): 6칸 차지
4.Large (≥ 992px): 6칸 차지
5.Extra Large (≥ 1200px): 6칸 차지

#STEP4. JavaScript 중급
#4-1.인터랙티브 자바스크립트

\*03. id로 태그 선택하기
getElmentById
존재하지 않는 id를 선택하려고하면 null 값이 나온다.

\*05. class로 태그 선택하기
getElmentsByClassName - 여러 태그를 한꺼번에 선택 가능
getElmentsByClassName으로 클래스가 하나 밖에 없는 태그를 선택하려고하면 요소 한개가 들어있는 HTMLCollection이 선택된다.
존재하지 않는 클래스를 선택하려고하면 빈 HTMLCollection이 출력된다.

\*06. 유사 배열(Array-Like Object)이란..? -유사 배열(Array-Like Object)이란?
앞에서도 설명한 것처럼 이름 그대로 배열과 유사(類似)한 객체를 유사 배열, 영어로는 Array-Like Object라고 부른다.
하지만 마냥 모양만 비슷하다고 해서 모두 유사 배열이라고 부르진 않는다. 유사 배열에도 최소한 갖춰야 할 조건과 특징들이 있다.

1. 숫자 형태의 indexing이 가능하다.
   유사 배열도 마찬가지로 배열이라는 이름에 걸맞게 각 요소에 0부터 시작하는 숫자 형태의 index가 있어야 한다.

2. length 프로퍼티가 있다.
   유사 배열 역시 length 프로퍼티가 있어야 비로소 유사 배열이라고 할 수 있다.

3. 배열의 기본 메소드를 사용할 수 없다.
   상황에 따라서 직접 구현할 수도 있겠지만, 유사 배열이 완전한 배열이 아닌 가장 큰 이유는 바로 기본적인 배열의 메소드를 사용할 수 없다는 점 때문이다.

4. Array.isArray(유사배열)은 false다.
   Array 객체의 isArray 메소드는 파라미터로 전달한 값이 배열인지 아닌지를 평가해서 그 결과를 불린 형태의 값으로 리턴해주는 메소드이다.
   유사 배열은 배열과 비슷하지만 배열은 아니기 때문에 결괏값이 false 이다.

주의사항: 유사 배열은 다양하다!

\*08. 태그 이름으로 태그 선택하기
document.getElementsByTagName('태그이름')메소드를 활용하면 태그 이름으로 태그를 선택할 수 있다.
const btns = document.getElementsByTagName('button');
이렇게 하면 HTML 문서 내에 있는 모든 button 태그를 선택하게 된다.

document.getElementsByClassName('class')메소드와 마찬가지로 태그 이름으로 요소를 찾는 경우에 여러 개의 요소가 선택될 수 있기 때문에 메소드 이름에 Element(s), s가 있고, 실행결과 역시 HTMLCollection을 리턴한다는 점도 기억해야한다.
참고로 css 선택자처럼 '\*' 값을 전달하게 되면 모든 태그를 선택할 수도 있다.

\*09. css 선택자로 태그 선택하기
querySelector - 한개의 태그를 선택할 때 사용
querySelectorAll - 여려개의 태그를 선택할 때 사용
querySelector 메소드를 활용해 존재하지 않는 요소를 선택할 경우에는 null 값을 리턴한다.

\*11. 이벤트와 버튼 클릭
이벤트 핸들링: 이벤트가 발생했을 때 어떤 특별한 동작을 하도록 이벤트를 다루는 것.
이벤트 핸들러: 이벤트를 다루는 구체적인 함수 부분.

\*13. 종합 정리

1. 자바스크립트로 태그 선택하기 -메소드
1. document.getElementById('id')
1. document.getElementsByClassName('class')
1. document.getElementsByTagName('tag')
1. document.querySelector('css')
1. document.querySelectorAll('css')

-의미

1. HTML id속성으로 태그 선택하기
2. HTML class속성으로 태그 선택하기
3. HTML 태그 이름으로 태그 선택하기
4. css 선택자로 태그 선택하기
5. css 선택자로 태그 선택하기

-결과

1. id에 해당하는 태그 하나
2. class에 해당하는 태그 모음(HTMLCollection)
3. tag에 해당하는 태그 모음(HTMLCollection)
4. css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
5. css 선택자에 해당하는 태그 모음(NodeList)

6. 유사 배열이란?
   배열과 유사한 객체 ex) HTMLCollection, NodeList, DOMTokenList, ...

특징

1. 숫자 형태의 indexing이 가능하다.
2. length 프로퍼티가 있다.
3. 배열의 기본 메소드를 사용할 수 없다.
4. Array.isArray(유사배열)의 리턴값은 false다.

5. 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러 -이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
   ex) 버튼 클릭, 스크롤, 키보드 입력, ...

-이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일

-이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. 이벤트 리스너(Event Listener)라고도 부른다.

4. 이벤트 핸들러를 등록하는 2가지 방법
   4-1. 자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
   const btn = document.querySelector('#myBtn');

btn.onclick = function() {
console.log('Hello Codeit!');
};

4-2. HTML 태그의 onclick 속성에 바로 표시하기
<button id="myBtn" onclick="console.log('Hello Codeit!')">클릭!</button>

#4-2. 브라우저와 자바스크립트

\*01. 브라우저도 객체다?
window : 전역객체 (Global Object)
window 객체: 자바스크립트로 브라우저가 가지고 있는 다양한 정보를 얻거나 브라우저를 제어할 수 있다.

\*02. DOM
DOM (Document Object Model) 문서 객체 모델: 웹페이지에 나타나는 html 문서 전체를 객체로 표현한 것
document 객체을 활용하면 웹페이지의 내부에 무엇이든 수정할 수 있고 새로운 컨텐츠를 만들어낼 수 있다.

객체형태로 보기: console.dir()

\*03. console.dir?
console.log와 console.dir의 차이

1. 출력하는 자료형이 다르다.
   먼저 문자열, 숫자, 불린 부분을 봅시다.
   각 값을 출력할 때 두 번째 dir 부분에서 출력되는 값의 색이 다른 게 보이시나요? dir 메소드는 문자열 표시 형식으로 콘솔에 출력합니다.

2. log는 값 자체에, dir은 객체의 속성에!
   log 메소드는 파라미터로 전달받은 값을 위주로 출력하는 반면, dir 메소드는 객체의 속성을 좀 더 자세하게 출력합니다.

dir 메소드가 출력한 부분을 자세히 보면 객체의 유형이 먼저 출력되고, 특히 함수 부분에서는 클릭해서 펼쳤을 때 함수가 가진 속성들을 더 보여주는 모습을 확인할 수 있습니다. (log 메소드는 펼쳐지지 않음)

3. log는 여러 개, dir은 하나만!
   둘 사이의 차이는 파라미터로 전달할 수 있는 값의 개수에도 있는데요.
   log 메소드는 여러 값을 쉼표로 구분해서 전달하면 전달받은 모든 값을 출력하는 반면, dir 메소드는 여러 값을 전달하더라도 첫 번째 값만 출력합니다.

4. DOM 객체를 다룰 때..
   지난 시간에도 확인했듯 log와 dir 메소드의 가장 큰 차이는 DOM 객체를 다룰 때 나타납니다.
   값에 좀 더 중점을 둔 log 메소드는 대상을 HTML 형태로 출력하고, 객체의 속성에 좀 더 중점을 둔 dir 메소드는 대상을 객체 형태로 출력합니다.

\*04. DOM 트리
DOM 트리
부모 노드
자식 노드
형제 노드
텍스트 노드 (잎 노드)

\*05. DOM 트리 여행하기 -부모 요소 노드
console.log(myTag.parentElement);

-자식 요소 노드
console.log(myTag.children);
console.log(myTag.firstElementChild); // 첫번째 자식 선택
console.log(myTag.lastElementChild); //마지막 자식 선택

-형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

-이어서 선택하는 것도 가능
console.log(myTag.parentElement.nextElementSibling);

\*06. DOM 트리 여행하기: 부록

-요소 노드에 대한 이동 프로퍼티
프로퍼티

1. element.children (자식 요소 노드) -element의 자식 요소 모음(HTMLCollection)
2. element.firstElementChild (자식 요소 노드) -element의 첫 번째 자식 요소 하나
3. element.lastElementChild (자식 요소 노드) -element의 마지막 자식 요소 하나
4. element.parentElement (부모 요소 노드) -element의 부모 요소 하나
5. element.previousElementSibling (형제 요소 노드) -element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
6. element.nextElementSibling (형제 요소 노드) -element의 다음(next) 혹은 우측(right)에 있는 요소 하나

-모든 노드에 대한 이동 프로퍼티
만약 요소 노드가 아닌 다른 노드들을 이동하고 싶은 경우에는 아래와 같은 프로퍼티를 활용할 수도 있다.

프로퍼티

1. node.childNodes (자식 노드) -node의 자식 노드 모음(NodeList)
2. node.firstChild (자식 노드) -node의 첫 번째 자식 노드 하나
3. node.lastChild (자식 노드) -node의 마지막 자식 노드 하나
4. node.parentNode (부모 노드) -node의 부모 요소 하나
5. node.previousSibling (형제 노드) -node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
6. node.nextSibling (형제 노드) -node의 다음(next) 혹은 우측(right)에 있는 노드 하나

\*08. 요소 노드 프로퍼티
요소 노드 주요 프로퍼티
-innerHTML: 요소안에 있는 html 자체를 문자열로 리턴해준다.
-myTag.innerHTML += '<li>리스트 추가</li> : 덧셈 할당 연산자를 통해서 기존 html의 마지막 부분에 요소를 추가할 수도 있다.

-outerHTML: 해당 요소를 포함한 전체 HTML코드를 문자열로 리턴해준다.
outerHTML에 새로운 값을 할당하게 되면 처음 선택한 요소는 사라진다.

-textContent: 요소 안에 있는 내용들 중에서 html을 제외한 텍스트만 가져온다.
새로운 값을 할당할 수 있다. 요소 안의 내용이 완전히 수정된다.

\*09. inner/outerHTML, textContent 비교

1. element.innerHTML
   요소 노드 내부의 HTML 코드를 문자열로 리턴해 줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
   요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용됩니다. (내부에 있던 값을 완전히 새로운 값으로 교체하기 때문에 주의해서 사용해야해요!)

2. element.outerHTML
   요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
   outerHTML은 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의해야 합니다.

3. element.textContent
   요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
   새로운 값을 할당하면 innerHTML과 마찬가지로 내부의 값을 완전히 새로운 값으로 교체 합니다.
   하지만 textContent는 말그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리한다는 점, 꼭 기억해주세요!

\*11. 요소 노드 추가하기

1. 요소 노드 만들기: document.createElement('태그이름')
   const first = document.createElement('li');

2. 요소 노드 꾸미기: textContent, innerHTML, ...
   first.textContent = '처음';

3. 요소 노드 추가하기: NODE.prepend, append, after, before
   tomorrow.prepend(first);

\*12. 노드 삭제와 이동하기 -노드 삭제하기: NODE.remove();
tomorrow.remove();
today.children[2].remove();

-노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);

\*14. HTML 속성 다루기
-HTML 속성 (HTML attribute)

1. elem.getAttribute('속성'): 속성에 접근하기
   console.log(tomorrow.getAttribute('href'));
   console.log(item.getAttribute('class'));

2. elem.setAttribute('속성', '값'): 속성 추가(수정)하기
   tomorrow.setAttribute('class', 'list'); // 추가
   tomorrow.setAttribute('href', 'https://www.codeit.kr'); // 수정

3. elem.removeAttribute('속성'): 속성 제거하기
   tomorrow.removeAttribute('class');
   tomorrow.removeAttribute('href');

\*16. 스타일 다루기

-elem.classList: add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done', 'other');
item.classList.remove('done', 'other');
item.classList.toggle('done'); // 있으면 제거하고 없으면 추가. 클래스 하나만.
item.classList.toggle('done', true); // 추가하는 역할만 함.
item.classList.toggle('done', false); // 제거하는 역할만 함.

- elem.className
  today.children[1].className = 'done';

-style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#eee';

\*18. 비표준 속성 다루기 -비표준 속성 활용하기

1. 선택자로 활용
   가장 간단하게는 아래와 같이 querySelector로 태그를 선택할 때 css 선택자를 활용해서 태그를 선택하는 데에 활용할 수도 있습니다.

2. 값을 표시할 태그를 구분할 때 활용
   비표준 속성은 객체 형태의 데이터가 있을 때, 각 프로퍼티 값들이 들어갈 태그를 구분하는데 활용할 수도 있습니다.

3. 스타일이나 데이터 변경에 활용
   getAttribute 메소드를 활용해서 속성값을 가져오고, setAttribute 메소드를 활용해서 속성값을 설정해주는 원리로 이벤트를 통해 실시간으로 스타일을 변경하거나 데이터를 변경하는데 활용할 수 있습니다.

때로는 class를 다루는 것보다 setAttribute로 비표준 속성을 변경하는게 스타일을 다루기에 오히려 편리한 경우도 있습니다.

-좀 더 안전하게, dataset 프로퍼티
다양한 방식으로 활용되는 비표준 속성에는 한 가지 문제가 있습니다.
비표준 속성을 사용해 코드를 작성했을 때 시간이 지나서 나중에 그 속성이 표준으로 등록되면 문제가 발생할 수 있다는 건데요.
HTML은 아직까지도 개발자들의 요구를 반영하기 위해 계속해서 발전하는 언어입니다. 그래서 이런 경우 예기치 못한 부작용이 발생할 수 있는 것이죠.

예를 들어서, 만약 glitter라는 비표준 속성을 만들어서 glitter 속성값이 true면 마우스를 올렸을 때 주변에 별이 반짝이는 애니메이션이 동작하도록 프로그램를 설계했다고 가정해봅시다.
그런데 갑자기 glitter라는 속성이 true일 때 태그가 계속 깜빡거리는 기능을 하는 표준으로 생겨나버리면 우리가 처음에 설계한 방식대로 동작하지 않을 수 있겠죠?

그래서 비표준 속성을 사용하기 위해 미리 약속된 방식이 존재하는데요. 바로 data-\* 속성입니다.

data-로 시작하는 속성은 모두 dataset이라는 프로퍼티에 저장되는데요. 예를 들어서 data-status라는 속성이 있다면, element.dataset.status라는 프로퍼티에 접근해서 그 값을 가져올 수 있는 것이죠.

data-\*형태와 dataset프로퍼티를 사용하는 것이 조금 더 안전하다는 점도 꼭 잊지 말고 기억해두시면 좋을 것 같습니다.

\*19. 종합 정리

1. window 객체
   window 객체는 브라우저 창을 대변하면서 자바스크립트에서 최상단에 존재하는 객체이다.
   자바스크립트 코드 어느 곳에서나 항상 접근할 수 있는 객체이기 때문에 전역 객체, 영어로는 Global Object라고 부른다.
   어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 window.을 생략할 수도 있다.

2. DOM
   DOM이란 Document Object Model의 약자로, 한국어로는 문서 객체 모델이다.
   간단하게 표현하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것으로 생각하면 됩니다.
   이때 각 객체를 노드(Node)라는 용어로 표현하고, 태그는 요소 노드, 문자는 텍스트 노드로 구분된다.

3. DOM 트리
   HTML의 계층 구조는 DOM에서도 반영되는데 이러한 계층구조를 나무에 비유해서 DOM 트리라고 부른다.
   각 노드 간의 관계는 부모, 자식, 형제라는 용어로 표현한다.

4. DOM 이동 시 활용 가능한 프로퍼티
5. element.children - 자식 요소 노드 - element의 자식 요소 모음(HTMLCollection)
6. element.firstElementChild - 자식 요소 노드 - element의 첫 번째 자식 요소 하나
7. element.lastElementChild - 자식 요소 노드 - element의 마지막 자식 요소 하나
8. element.parentElement - 부모 요소 노드 - element의 부모 요소 하나
9. element.previousElementSibling - 형제 요소 노드 - element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
10. element.nextElementSibling - 형제 요소 노드 - element의 다음(next) 혹은 우측(right)에 있는 요소 하나
11. node.childNodes - 자식 노드 - node의 자식 노드 모음(NodeList)
12. node.firstChild - 자식 노드 - node의 첫 번째 자식 노드 하나
13. node.lastChild - 자식 노드 - node의 마지막 자식 노드 하나
14. node.parentNode - 부모 노드 - node의 부모 요소 하나
15. node.previousSibling - 형제 노드 - node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
16. node.nextSibling - 형제 노드 - node의 다음(next) 혹은 우측(right)에 있는 노드 하나

17. 주요 요소 노드 프로퍼티
18. element.innerHTML - 요소 노드 내부의 HTML코드 문자열로 리턴 - 요소 안의 정보를 확인할 수도 있지만,
    내부의 HTML 자체를 수정할 때 좀 더 자주 활용
19. element.outerHTML - 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴 - outerHTML은 새로운 값을 할당하면
    요소 자체가 교체되어 버리기 때문에 주의
20. element.textContent - 요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴 - textContent는 말그대로 텍스트만 다루기 때문에
    HTML태그를 쓰더라도 모두 텍스트로 처리됨

21. 요소 노드 다루기
22. 요소 노드 만들기: document.createElement('태그이름')
23. 요소 노드 꾸미기: element.textContent, element.innerHTML, ...
24. 요소 노드 추가 혹은 이동하기: element.prepend, element.append, element.after, element.before
25. 요소 노드 삭제하기: element.remove()

26. HTML 속성 다루기
    대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 된다.
    하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안 된다. 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있다.
27. 속성에 접근하기: element.getAttribute('속성')
28. 속성 추가(수정)하기: element.setAttribute('속성', '값')
29. 속성 제거하기: element.removeAttribute('속성')

30. 스타일 다루기
    자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지가 있다.
31. style 프로퍼티 활용하기: element.style.styleName = 'value';
32. class 변경을 통해 간접적으로 스타일 적용하기: element.className, element.classList

8-1. classList의 유용한 메소드

1.classList.add :클래스 추가하기 - 여러 개의 값을 전달하면 여러 클래스 추가 가능
2.classList.remove: 클래스 삭제하기 - 여러 개의 값을 전달하면 여러 클래스 삭제 가능
3.classList.toggle: 클래스 없으면 추가, 있으면 삭제하기 - 하나의 값만 적용 가능하고,
두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음

#4-3. 이벤트 살펴보기
\*01. 이벤트 핸들러 등록하기

1. 이벤트 등록하기 elem.addEventListener(event, handler);
2. 이벤트 삭제하기 elem.removeEventListener(event, handler);

\*02. 다양한 이벤트 -마우스 이벤트
mousedown 마우스 버튼을 누르는 순간
mouseup 마우스 버튼을 눌렀다 떼는 순간
click 왼쪽 버튼을 클릭한 순간
dblclick 왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu 오른쪽 버튼을 클릭한 순간
mousemove 마우스를 움직이는 순간
mouseover 마우스 포인터가 요소 위로 올라온 순간
mouseout 마우스 포인터가 요소에서 벗어나는 순간
mouseenter 마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
mouseleave 마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

-키보드 이벤트
keydown 키보드의 버튼을 누르는 순간
keypress 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
keyup 키보드의 버튼을 눌렀다 떼는 순간

-포커스 이벤트
focusin 요소에 포커스가 되는 순간
focusout 요소로부터 포커스가 빠져나가는 순간
focus 요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur 요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)

-입력 이벤트
change 입력된 값이 바뀌는 순간
input 값이 입력되는 순간
select 입력 양식의 하나가 선택되는 순간
submit 폼을 전송하는 순간

-스크롤 이벤트
scroll 스크롤 바가 움직일 때

-윈도우 창 이벤트
resize 윈도우 사이즈를 움직일 때 발생

\*04. 이벤트 객체
이벤트 핸들러가 되는 함수의 첫번째 파라미터는 무조건 이벤트 객체가 전달된다. event 또는 e
이벤트 객체의 currentTarget프로퍼티는 이벤트가 발생했을 때, 이벤트 핸들러가 등록된 요소를 담고 있다.

\*05. 이벤트 객체 프로퍼티

1. 공통 프로퍼티
   아래의 프로퍼티들은 이벤트 타입과 상관없이 모든 이벤트 객체들이 공통적으로 가지고 있는 프로퍼티이다.
   type 이벤트 이름 ('click', 'mouseup', 'keydown' 등)
   target 이벤트가 발생한 요소
   currentTarget 이벤트 핸들러가 등록된 요소
   timeStamp 이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초)
   bubbles 버블링 단계인지를 판단하는 값

2. 마우스 이벤트
   마우스와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있다.
   button 누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽)
   clientX, clientY 마우스 커서의 브라우저 표시 영역에서의 위치
   pageX, pageY 마우스 커서의 문서 영역에서의 위치
   offsetX, offsetY 마우스 커서의 이벤트 발생한 요소에서의 위치
   screenX, screenY 마우스 커서의 모니터 화면 영역에서의 위치
   altKey 이벤트가 발생할 때 alt키를 눌렀는지
   ctrlKey 이벤트가 발생할 때 ctrl키를 눌렀는지
   shiftKey 이벤트가 발생할 때 shift키를 눌렀는지
   metaKey 이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

3. 키보드 이벤트
   키보드와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있다.
   key 누른 키가 가지고 있는 값
   code 누른 키의 물리적인 위치
   altKey 이벤트가 발생할 때 alt키를 눌렀는지
   ctrlKey 이벤트가 발생할 때 ctrl키를 눌렀는지
   shiftKey 이벤트가 발생할 때 shift키를 눌렀는지
   metaKey 이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

\*07. 이벤트 버블링
버블링 멈추기 -> e.stopPropagation();

\*08. 캡쳐링
이벤트엔 버블링 이외에도 ‘캡처링(capturing)’ 이라는 흐름이 존재한다.

먼저, 표준 DOM 이벤트에서 정의한 이벤트 흐름에는 3가지 단계가 있다.

1.캡처링 단계: 이벤트가 하위 요소로 전파되는 단계 2.타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계 3.버블링 단계: 이벤트가 상위 요소로 전파되는 단계

이벤트가 발생하면 가장 먼저 window 객체에서부터 target 까지 이벤트 전파가 일어난다. (캡쳐링 단계)
그리고 나서 타깃에 도달하면 타깃에 등록된 이벤트 핸들러가 동작하고, (타깃 단계)
이후 다시 window 객체로 이벤트가 전파된다. (버블링 단계)

캡쳐링 단계에서 이벤트 핸들러를 동작시키려면, addEventListener에 세번째 프로퍼티에 true 또는 { capture:true }를 전달하면 된다.

\*10. 이벤트 위임
자식 요소에서 발생하는 이벤트를 부모 요소에서 다루는 방식을 이벤트 위임이라고 한다.

\*12. 브라우저의 기본 동작
브라우저의 기본 동작을 막는 메소드 -> event.preventDefault();
브라우저의 기본동작을 막고 원하는 대로 동작하게 할 수 있다.

\*14. 종합 정리

1. 이벤트 핸들러 등록하기
   HTML의 속성이나 DOM 프로퍼티를 활용해 이벤트를 등록하는 방법 외에 Element.addEventListener('type', 'handler')를 통해서 이벤트 핸들러를 등록할 수 있다.

2. 이벤트 핸들러 삭제하기
   addEventListener 메소드를 활용해서 이벤트 핸들러를 등록했다면, Element.removeEventListner('type', 'handler')를 통해서 이벤트 핸들러를 삭제할 수 있다.

3. 이벤트 객체 (Event Object)
   이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달된다.
   이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있다.

4. 이벤트 버블링 (Event Bubbling)
   이벤트는 전파가 된다.
   어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작하는데,

자식 요소에서 부모 요소로 이벤트가 전파되는 것을 이벤트 버블링(Event Bubbling)이라고 부른다.

참고로 이벤트 버블링은 이벤트 객체의 stopPropagation 메소드로 전파를 막을 수 있다.

5. 이벤트 위임 (Event Delegation)
   버블링 개념을 활용하면 훨씬 효과적인 이벤트 관리를 할 수 있다. 예를 들어 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트를 관리할 수도 있는데,

이렇게 이벤트를 다루는 방식을 자식 요소의 이벤트를 부모 요소에 위임한다고 해서 이벤트 위임(Event Delegation)이라고 부른다.
이벤트 위임을 잘 활용하면 훨씬 더 효율적으로 이벤트를 다룰 수 있다.

6. 브라우저의 기본 동작
   브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작들이 있다.

예를 들어 마우스 오른쪽 버튼을 클릭하면 상황에 맞는 메뉴 창이 뜬다거나, input 태그에 커서를 두고 키보드 키를 누르면 해당 값이 입력된다거나..

그런데 만약 이러한 동작들을 막고 싶다면 이벤트 객체의 preventDefault 메소드를 통해 막을 수가 있다.

하지만 각 HTML 태그들이 가지고 있는 고유한 역할과 의미를 훼손하게 될 수도 있기 때문에 꼭 필요한 경우에만 주의해서 사용해야 한다는 점.

#4-4. 다양한 이벤트 알아보기
\*01. 마우스 버튼 이벤트
MouseEvent.button
0: 마우스 왼쪽 버튼
1: 마우스 휠
2: 마우스 오른쪽 버튼

MouseEvent.type
click 왼쪽 버튼을 클릭한 순간
contextmenu 오른쪽 버튼을 클릭한 순간
mousedown 마우스 버튼을 누르는 순간
mouseup 마우스 버튼을 눌렀다 떼는 순간
dblclick 왼쪽 버튼을 빠르게 두 번 클릭한 순간

\*03. 마우스 이동 이벤트 I
MouseEvent.type
mousemove: 마우스 포인터가 이동할 때
mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때

MouseEvent.clientX, clientY
: 화면에 표시되는 창 기준 마우스 포인터 위치

MouseEvent.pageX, pageY
: 웹 문서 전체 기준 마우스 포인터 위치

MouseEvent.offsetX, offsetY
: 이벤트가 발생한 요소 기준 마우스 포인터 위치

\*04. client, page, offset 차이

1. clientX, clientY
   client 프로퍼티는 말 그대로 클라이언트 영역 내에서 마우스의 좌표 정보를 담고있다. 클라이언트 영역이란 이벤트가 발생한 순간에 브라우저가 콘텐츠를 표시할 수 있는 영역을 뜻합니다.

clientX : 브라우저가 표시하는 화면 내에서 마우스의 X좌표 위치를 담고 있다.
clientY : 브라우저가 표시하는 화면 내에서 마우스의 Y좌표 위치를 담고 있다.

client 값은 그 순간 보여지는 화면을 기준으로 계산하기 때문에 스크롤 위치와는 무관하게 항상 보여지는 화면의 좌측 상단의 모서리 위치를 (0, 0)으로 계산합니다.

2. offsetX, offsetY
   offset 프로퍼티는 이벤트가 발생한 target이 기준이 된다.

offsetX : 이벤트가 발생한 target 내에서 마우스의 X좌표 위치를 담고 있다.
offsetY : 이벤트가 발생한 target 내에서 마우스의 Y좌표 위치를 담고 있다.

offset 값도 이벤트가 발생한 대상을 기준으로 계산하기 때문에 스크롤 위치와는 무관하게 항상 대상의 좌측 상단의 모서리 위치를 (0, 0)으로 계산합니다.

3. pageX, pageY
   page 프로퍼티는 전체 문서를 기준으로 마우스 좌표 정보를 담고 있다. 그렇기 때문에 스크롤로 인해서 보이지 않게된 화면의 영역까지 포함해서 측정한다는 점이 앞의 두 프로퍼티와의 차이점이다.

pageX : 전체 문서 내에서 마우스의 X좌표 위치를 담고 있다.
pageY : 전체 문서 내에서 마우스의 Y좌표 위치를 담고 있다.

자칫 client 값과 혼동하기 쉬우니 잘 구분해 두는 것이 좋다.

\*05. 마우스 이동 이벤트 II
MouseEvent.type
mousemove: 마우스 포인터가 이동할 때
mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때

MouseEvent.target
: 이벤트가 발생한 요소

MouseEvent.relatedTarget
: 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소

\*06. mouseenter / mouseleave
마우스 이벤트 타입에는 mouseover, mouseout과 비슷한 mouseenter와 mouseleave라는 타입이 있다.
mouseenter는 mouseover처럼 마우스 포인터가 요소 바깥에서 안쪽으로 들어갈 때, mouseleave는 mouseout처럼 마우스 포인터가 요소 안쪽에서 바깥으로 나갈 때 발생한다.

mouseover, mouseout과 어떤 차이가 있을까?

1. 버블링이 일어나지 않는다.
   mouseenter와 mouseleave는 버블링이 일어나지 않는다.

2. 자식 요소의 영역을 계산하지 않는다.
   mouseenter와 mouseleave는 자식 요소의 영역을 계산하지 않는다.

정리
mouseover/mouseout과 비교하면서 mouseenter/mouseleave에 대해 살펴봤는데,
간단하게 정리하면, 이벤트가 자식 요소에 영향을 끼치는지가 둘의 가장 큰 차이라고 할 수 있다.

그래서 이벤트 핸들러가 자식 요소에까지 영향을 끼치게 하고싶은 경우에는 mouseover/mouseout을, 자식 요소에는 영향을 끼치지 않고 해당 요소에만 이벤트 핸들러를 다루고자 한다면 mouseenter/mouseleave를 활용하면 좋겠다.

\*08. 키보드 이벤트
KeyboardEvent.type
keydown: 키보드 버튼을 누른 순간
keypress: 키보드 버튼을 누른 순간
keyup: 키보드 버튼을 눌렀다 뗀 순간

KeyboardEvent.key
: 이벤트가 발생한 버튼의 값

KeyboardEvent.code
: 이벤트가 발생한 버튼의 키보드에서 물리적인 위치

\*10. input 태그 다루기

-포커스 이벤트
focusin: 요소에 포커스가 되었을 때
focusout: 요소에 포커스가 빠져나갈 때
focus: 요소에 포커스가 되었을 때 (버블링 x)
blur: 요소에 포커스가 빠져나갈 때 (버블링 x)

-입력 이벤트
input: 사용자가 입력을 할 때
change: 요소의 값이 변했을 때

\*12. 스크롤 이벤트
window.addEventListener('scroll', function);

\*13. 종합 정리

1. MouseEvent.button
   마우스 이벤트 객체의 버튼 프로퍼티를 활용하면, 마우스 버튼을 눌렀을 때 일어난 이벤트에 대해서 어떤 버튼을 눌러서 일어난 이벤트인지를 정확하게 알아낼 수 있다.
   0 마우스 왼쪽 버튼
   1 마우스 휠
   2 마우스 오른쪽 버튼
   3 X1 (일반적으로 브라우저 뒤로 가기 버튼)
   4 X2 (일반적으로 브라우저 앞으로 가기 버튼)

참고로 mouseenter, mouseleave, mouseover, mouseout, mousemove 처럼 마우스 이동과 관련된 이벤트에서는 이 값이 null이나 undefined가 아니라 0이라는 점.

2. MouseEvent.type
   마우스 이벤트의 타입에는 아래와 같은 타입들이 있다.
   mousedown 마우스 버튼을 누르는 순간
   mouseup 마우스 버튼을 눌렀다 떼는 순간
   click 왼쪽 버튼을 클릭한 순간
   dblclick 왼쪽 버튼을 빠르게 두 번 클릭한 순간
   contextmenu 오른쪽 버튼을 클릭한 순간
   mousemove 마우스를 움직이는 순간
   mouseover 마우스 포인터가 요소 위로 올라온 순간
   mouseout 마우스 포인터가 요소에서 벗어나는 순간
   mouseenter 마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
   mouseleave 마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

3. MouseEvent.위치프로퍼티
   마우스 이벤트 객체에는 마우스 포인터의 위치와 관련된 다양한 프로퍼티들이 있는데, 주로 아래와 같은 프로퍼티들이 자주 사용된다.

clientX, clientY 마우스 포인터의 브라우저 표시 영역에서의 위치
pageX, pageY 마우스 커서의 문서 영역에서의 위치
offsetX, offsetY 마우스 포인터의 이벤트 발생한 요소에서의 위치
screenX, screenY 마우스 포인터의 모니터 화면 영역에서의 위치

4. MouseEvent.relatedTarget
   mouseenter, mouseleave, mouseover, mouseout 이벤트에는 relatedTarget이라는 프로퍼티가 존재하는데,
   target 프로퍼티가 이벤트가 발생한 요소를 담고 있다면, relatedTarget 프로퍼티는 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소를 담고 있다.

5. KeyboardEvent.type
   키보드 이벤트의 타입에는 아래와 같은 타입들이 있다.
   keydown 키보드의 버튼을 누르는 순간
   keypress 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
   keyup 키보드의 버튼을 눌렀다 떼는 순간

6. KeyboardEvent.key vs KeyboardEvent.code
   키보드 이벤트 객체에는 key와 code 프로퍼티가 자주 사용되는데,
   key는 사용자가 누른 키가 가지고 있는 값을 나타내고 code는 누른 키의 물리적인 위치를 나타낸다는 점!

7. input태그 다루기
   input 태그는 말 그대로 입력의 역할을 하는 태그이다. 타입에 따라 조금씩 차이가 있을 수 있지만, input 태그를 다룰 때는 아래와 같은 이벤트 타입들이 활용될 수 있다.
   focusin 요소에 포커스가 되는 순간
   focusout 요소에 포커스가 빠져나가는 순간
   focus 요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
   blur 요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)
   change 입력된 값이 바뀌는 순간
   input 값이 입력되는 순간
   select 입력 양식의 하나가 선택되는 순간
   submit 폼을 전송하는 순간

8. 스크롤 이벤트
   scroll 이벤트는 보통 window 객체에 이벤트 핸들러를 등록하고 window 객체의 프로퍼티와 함께 자주 활용되는데.
   특히 scrollY 프로퍼티를 활용하면 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향(위로 스크롤 중인지/아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수도 있다.

#4-2. 모던 자바스크립트
\*01. 모던 자바스크립트란?
ECMAScript: 자바스크립트 표준 명세서
ECMA international: 국제 표준화 기구
ECMA-262: 자바스크립트를 사용할 떄 준수해야 하는 규칙, 세부사항 -> ECMAScript
모던 자바스크립트: 현시점에 사용하기 적합한 범위 내에서 최신 버전의 표준을 준수하는 자바스크립트

\*03. ECMAScript 더 알아보기

1. 공식 문서
   ECMAScript의 공식 문서가 궁금하다면 아래 링크를 참고해 보세요.

ECMA-International 공식 ECMA-262문서

2. 진행 현황
   지금까지 제정된 ECMAScript 표준 사항이나 과거 역사가 궁금하다면 아래 링크들을 참고해 보세요.

위키백과 - ECMA스크립트
MDN 문서

3. 브라우저 지원 현황
   각각의 문법별로 브라우저의 지원 여부를 확인하고 싶다면 아래 링크들을 참고해 보세요.

한눈에 확인하는 호환성 테이블
문법 검색으로 확인하는 호환성 테이블

4. 버전의 정식 표기
   개발자들 사이에서는 짧고 빠르게 소통하기 위해서 ES6, ES7이라는 용어를 사용하지만, 실제로 ECMA International에서 버전을 발표할 때 표기하는 정식 명칭은 연호를 사용해서 ECMAScript 2015라고 표기한다는 점!

5. JavaScript vs ECMAScript
   간혹 JavaScript와 ECMAScript가 똑같다고 오해하는 경우가 있는데, 둘 사이에는 명확한 차이가 있다!
   일단 첫 번째 차이점은, JavaScript는 프로그래밍 언어이고, ECMAScript는 프로그래밍 언어의 표준이다.
   쉽게 생각하면 ECMAScript는 JavaScript가 갖추어야 할 내용을 정리해둔 '설명서'이고, JavaScript는 ECMAScript를 준수해서 만들어낸 '결과물' 이라고 생각할 수 있는데요. 참고로 ECMAScript가 JavaScript화 하기 위해 등장하긴 했지만, ECMAScript는 JavaScript 뿐만아니라 모든 스크립트 언어(scripting languages)가 지켜야 하는 표준이다. 만약 여러분이 자바스크립트와 같은 언어를 직접 만들고자 한다면, 이 ECMAScript를 준수해야 한다!

그리도 두 번째 차이점은 JavaScript는 ECMAScript를 기반으로 하지만 ECMAScript에 정의된 내용뿐만 아니라, 다른 부가적인 기능도 있다는 것이다.
특히, 우리가 자바스크립트로 HTML 코드를 제어하기 위해 사용하는 DOM(Document Object Model)을 다루는 문법들은 ECMAScript에 표준화된 문법이 아니라 WebIDL에서 표준화된 기술이라고 할 수 있다.

\*01. 데이터 타입의 특징과 종류
자바스크립트의 데이터 타입 특징: 데이터 타입이 유연하다! -> 데이터 타입이 상황에 따라 변할 수 있다!

\*8가지 데이터 타입의 종류
기본형: Number String Boolean Symbol: 유일한 값을 만들 때! BigInt: 엄청 큰 숫자를 다룰 때! Null Undefined
참조형: 오브젝트

\*02. Symbol과 BigInt
-Symbol
심볼(symbol)은 기본형 데이터 타입(primitive data type) 중 하나이다. 심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용한다.

const user = Symbol();
일단, 이렇게 Symbol이라는 함수를 통해서 심볼 값을 만들어 낼 수 있다.
const user = Symbol('this is a user');
그리고 괄호 안에 심볼에 대한 설명을 붙일 수도 있다. 이렇게 Symbol 값을 담게 된 user라는 이름의 변수는 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수가 된다.

const user = Symbol('this is a user');

user === 'this is user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false
...

심지어는 똑같은 설명을 붙인 심볼을 만들더라도 두 값을 비교하면 false가 반환된다.

const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');

console.log(symbolA === symbolB); // false

-BigInt
BigInt는 자바스크립트에서 아주 큰 정수(Integer)를 표현하기 위해 등장한 데이터 타입이다.
사실 자바스크립트의 숫자에는 안전한 정수 표현의 한계가 있는데, 안전한 정수 표현이라는 게 조금 이상하죠? 자바스크립트에서 안전한 최대 정수는 2**53 - 1, 안전한 최소 정수는 -(2**53 - 1) 이다. 2\*\*53 - 1은 구체적으로 9007199254740991이라는 숫자로 약 9,000조 정도의 숫자인데, 안전한 정수 표현이라는 의미는 자바스크립트에서 이 숫자 범위를 초과하는 정숫값을 사용하려고 하면 연산에 미세한 오류가 발생한다는 뜻이다.

예를 들면, 9007199254740991 + 1과 9007199254740991 + 2를 비교하면 true라는 결과가 리턴된다. 실제로 콘솔에 9007199254740991 + 2과 심지어 9007199254740993을 출력해봐도 9007199254740993이 아니라 9007199254740992가 출력되는 모습을 확인할 수 있다.

console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
console.log(9007199254740991 + 2); /// 9007199254740992
console.log(9007199254740993); /// 9007199254740992

이 숫자 범위는 JavaScript가 IEEE 754에 기술된 배정밀도 부동소수점 형식 숫자체계를 사용하기 때문이다. 혹시 용어가 너무 어색하다거나 개념이 조금 어렵다면, 일단은 자바스크립트의 숫자형(number type) 값에는 9000조 정도의 정수 표현의 한계가 존재한다. 정도만 이해하면된다!
사실 9,000조라는 숫자도 꽤 큰 숫자기 때문에 대부분 상황에서는 큰 문제가 되지 않는데, 그래도 암호 관련 작업이나 계산기 관련 작업을 할 때, 아주 큰 숫자를 다루거나 혹은 굉장히 정확한 연산이 필요한 상황에서 이보다 더 큰 숫자가 필요할 수도 있겠죠?

그럴 때 바로 BigInt라는 데이터 타입의 값을 사용하면 된다. BigInt 타입의 값은 일반 정수 마지막에 알파벳 n을 붙이거나 BinInt라는 함수를 사용하면 되는데,
console.log(9007199254740993n); // 9007199254740993n
console.log(BigInt(9007199254740993)); // 9007199254740993

이렇게 BigInt 타입을 사용하면 2\*\*53 - 1 보다 큰 정숫값도 안전하게 표현할 수가 있다. 단, BigInt 타입에는 몇 가지 주의사항이 있는데, 일단 BigInt 타입은 말 그대로 큰 정수를 표현하기 위한 데이터 타입이기 때문에 소수 표현에는 사용할 수가 없다.
1.5n; // SyntaxError

그래서 소수 형태의 결과가 리턴되는 연산은 소수점 아랫부분은 버려지고 정수 형태로 리턴된다.
10n / 6n; // 1n
5n / 2n; // 2n

그리고 BigInt 타입끼리만 연산할 수 있고, 서로 다른 타입끼리의 연산은 명시적으로 타입 변환을 해야 한다.
3n _ 2; // TypeError
3n _ 2n; // 6n
Number(3n) \* 2; // 6

*03. typeof 연산자
*typeof 연산자
우리가 사용하는 값이 어떤 데이터 타입을 가지고 있는지 확인하려면 typeof 연산자를 사용해야 한다.
typeof 연산자는 키워드 다음에 공백(띄어쓰기)을 두고 값을 작성해도 되고, 함수를 사용하듯 괄호로 감싸서 사용할 수도 있다.

typeof 'Codeit'; // string
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof true; // boolean
typeof(false); // boolean
typeof(123); // number
typeof(NaN); // number
typeof(456n); // bigint
typeof(undefined); // undefined

하지만 한 가지 주의해야 할 점은 typeof 연산자의 결과가 모든 타입과 1:1로 매칭되지 않는다는 점이다.

-null이 object라고?
일단, typeof null을 하면 문자열 null이 리턴되는 게 아니라 문자열 object가 리턴되는데.
typeof null; // object

이건 자바스크립트가 처음 구현될 때의 특별한 문법 설계 때문이다. 나중에 ECMAScript에서 수정이 제안되었었지만, 이미 개발된 많은 프로젝트에 버그가 생기는 우려로 인해 반영되지 않고 있다.

-function?
그리고 함수에 typeof 연산자를 사용하면 function이라는 값을 리턴하는데.
function sayHi() {
console.log('Hi!?');
}

typeof sayHi; // function

자바스크립트에서 함수는 객체로 취급됩니다. 그래서 간혹 object를 리턴할거라 예상하는 실수를 하기도 하는데. typeof 연산자를 함수에 사용하면 function이 리턴된다는 점도 꼭 기억해 두면 좋을 것 같다.

\*04. 자바스크립트 데이터 타입의 특징 익히기
자바스크립트는 연산할 때 상황에 따라 데이터 타입이 유연하게 변하는 특징이 있다.
곱셈의 경우에는 연산 대상을 모두 숫자 형으로 형 변환을 한 다음 연산을 수행한다.

\*05. 불린인 듯 불린 아닌 불린같은 값
Falsy값(False로 평가되는 값): false, null, indefined, NaN, 0, ''
Truthy 값(True로 평가되는 값): 나머지 값들! [], {}
Boolean 함수를 사용했을 때 false로 나오는 값은 모두 false, 나머지 값은 모두 true를 반환한다!

\*06. 불린인 듯 불린 아닌 불린같은 값 익히기
if, for, while 등 불린 타입의 값이 요구되는 맥락에서 truthy와 falsy 개념은 특히나 중요한 역할을 하는데, for 문의 안에서 조건을 평가하는 부분이 반드시 false가 되는 것이 아니라 0이나 ''(빈 문자)가 되는 순간에도 반복은 충분히 멈출 수 있기 때문이다.

\*07. AND와 OR의 연산 방식
자바스크립트에서 논리연산자는 매번 true 혹은 false를 리턴하는게 아니라 상황에 따라서 양쪽 값들 중 한쪽을 선택하는 방식으로 동작한다.

AND 연산자 && -왼쪽값이 truth면 오른쪽 값을 리턴하고, 왼쪽 값이 false면 그대로 왼쪽 값을 리턴한다.

OR 연산자 || -왼쪽 값이 truth면 그대로 왼쪽 값을 리턴하고, 왼쪽 값이 false면 오른쪽 값을 리턴한다.

\*08. AND와 OR의 연산 우선순위

function checkAnswer(value) {
if (value < 10 && value > 0 && value !== 3) {
return '정답입니다!';
}

return '틀렸습니다!';
}

console.log(checkAnswer(4)); // 정답입니다!

한 가지 조심해야 할 부분이 있다. 위에 있는 코드처럼 AND 연산자나 OR 연산자 중 하나만 계속해서 사용할 때는 문제 없지만, 만약 AND 연산자와 OR 연산자를 섞어서 사용할 때는 연산의 우선순위가 존재한다는 것이다. 쉽게 설명해서 1 + 2 + 3 처럼 계속해서 더하기 연산자만 사용한다면 왼쪽부터 차례대로 더하면 되지만, 1 + 2 \* 3 처럼 더하기와 곱하기 연산자가 섞여 있다면 연산자 우선순위를 고려해야 한다는 것이다.
곱하기 연산자가 더하기 연산자보다 연산 우선순위가 높다는 사실 모두 알고 계시죠? AND 와 OR 연산자 사이에서는 AND 연산자의 우선순위가 더 높다.

console.log(true || false && false); // true
console.log((true || false) && false); // false

console.log('Codeit' || NaN && false); // Codeit
console.log(('Codeit' || NaN) && false); // false

위 코드처럼 OR 연산자 뒤에 AND 연산자를 사용한다면, 소괄호로 OR 연산을 감쌀 때와 감싸지 않았을 때 서로 다른 결과를 보여주는 걸 확인할 수 있다. 프로그래밍을 하다 보면 AND와 OR 연산자뿐만 아니라 다양한 연산자들을 복합적으로 사용하게 될 텐데, 연산의 우선순위를 명확하게 하지 않으면 예상치 못한 결과를 얻을 수 있으니 잘 구분해두는 것이 중요하다.

하지만 여러분이 코드를 작성할 때, 특히 여러 사람과 함께 협업하는 상황에서 다양한 연산자들을 복합적으로 사용해야 한다면 소괄호를 활용해서 의도에 맞는 연산 우선순위를 명확하게 표기하는 것이 좋은 습관이라는 점도 잘 기억해 두면 좋을 것 같다.
console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log('Codeit' || (NaN && false)); // Codeit
console.log(('Codeit' || NaN) && false); // false

\*10. null 병합 연산자 ??
ES2020에서 새롭게 추가된 null 병합 연산자에 대해 살펴보겠다. 영어로는 'Nullish coalescing operator' 라고 한다.

-null 병합 연산자 ??
물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자 이다.
아래 코드.
const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';

console.log(example1, example2, example3); // ?

example1과 2를 보면, 지금 null 병합 연산자 왼편에 각각 null과 undefined가 있다. 이렇게 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴되고, example3처럼 연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴되는 원리로 동작한다. 결과적으로 마지막 줄에서 콘솔에 출력되는 값은 I love Codeit이 되겠다.

const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit

-OR 연산자(||)와 비교
그런데 이렇게 보니깐 이전에 앞서 OR 연산자 (||)와 동작하는 방식이 비슷해 보인다. 실제로도 다음과 같은 상황이라면 똑같이 동작을 하게 된다.
const title1 = null || 'codeit';
const title2 = null ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // codeit

하지만 null 병합 연산자(??)는 왼편의 값이 null이나 undefined인지 확인하고 OR 연산자(||)는 왼편의 값이 falsy인지를 확인하기 때문에 아래 코드와 같이 null이나 undefined가 아닌 falsy 값을 활용할 때 결과가 서로 다르니깐, 이 부분은 꼭 기억해 둬야한다!

const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0

\*11. 변수와 스코프
변수: 변수는 이름을 통해서 어떤 값에 특별한 의미를 부여할 수 있다. 프로그래밍에서 초상화의 가장 기본적인 수단.

var // 함수 스코프 (fucntion scope)
let // 블록 스코프 (block scope)
const // 블록 스코프 (block scope)

\*13. 종합 정리

-자바스크립트의 데이터 타입
자바스크립트에는 8가지 데이터 타입이 있다.

number
string
boolean
undefined
null
object
symbol
bigint

-자바스크립트의 유연한 데이터 타입
자바스크립트는 데이터 타입이 유연한 프로그래밍 언어다. 맥락에 유연하게 변하는 데이터 타입의 특징은 처음엔 생소하고 혼란스러울 수 있지만, 잘 이해하고 활용한다면 좀 더 간결한 코드를 작성하고 빠르게 개발할 수 있는 장점이 될 수 있다!

-Truthy 값과 Falsy 값
if, for, while 등 불린 타입의 값이 요구되는 맥락에서는 조건식이나 불린 타입의 값 뿐만아니라 다른 타입의 값도 불린 값처럼 평가될 수 있다. 이 때, false 처럼 평가되는 값을 falsy 값, true 처럼 평가되는 값을 truthy값이라고 부른다. falsy값에는 false, null, undefined, 0, NaN, ''(빈 문자열)이 있고, falsy값을 제외한 값들은 모두 truthy값이 된다.

만약 falsy와 truthy값을 명확하게 확인하고 싶다면 Boolean 함수를 사용해서 직접 boolean 타입으로 형 변환 해볼 수도 있다.

// falsy
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean(NaN);
Boolean('');

// truthy
Boolean(true);
Boolean('codeit');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
truthy와 falsy의 개념은 자바스크립트에서 불린 타입으로의 형 변환을 이해할 때 핵심이되는 개념이 잘 기억해야한다.

-독특한 방식으로 동작하는 논리 연산자
자바스크립트에서 AND와 OR연산자는 무조건 불린 값을 리턴하는게 아니라, 왼쪽 피연산자 값의 유형에 따라서 두 피연산자 중 하나를 리턴하는 방식으로 동작한다.
AND 연산자는 왼쪽 피연산자가 falsy값일 때 왼쪽 피연산자를, 왼쪽 피연산자가 truthy값일 때 오른쪽 피연산자를 리턴하고 반대로, OR 연산자는 왼쪽 피연산자가 falsy 일 때 오른쪽 피연산자를, 왼쪽 피연산자가 truthy 일 때 왼쪽 피연산자를 리턴한다.

console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}

-자바스크립트의 다양한 변수 선언 방식
자바스크립트에는 다양한 변수 선언 키워드가 있다. 자바스크립트가 처음 등장할 때부터 사용되던 var와, 그리고 var의 부족함을 채우기위해 ES2015에서 새롭게 등장한 let과 const가 있다.

var 변수는 아래와 같은 특징이 있었다.

-변수 이름 중복선언 가능, -변수 선언 전에 사용 가능(호이스팅), -함수 스코프
특히나 중복된 이름으로 선언이 가능했던 특징은 여러 사람이 협업할 때 생각보다 자주 문제가 되곤 했었다.
이런 문제를 개선하기 위해 ES2015에서 let과 const가 등장했고, 다음과 같은 특징이 있다.

-변수 이름 중복선언 불가 (SyntaxError 발생) -변수 선언 전에 사용 불가 (ReferenceError 발생) -블록 스코프
덧붙여 const 키워드는 let 키워드와 다르게 값을 재할당할 수 없다는 특징도 있다.
그래서 ES2015 이후부터는 var보다 let과 const 키워드 사용이 권장된다는 사실도 참고해 두면 좋을 것 같다.

-함수 스코프(function scope)와 블록 스코프(block scope)
var 키워드로 선언한 변수는 함수 스코프 let과 const 키워드로 선언한 변수는 블록 스코프를 가진다.

함수 스코프란 말 그대로 함수를 기준으로 스코프를 구분한다는 뜻이다. 그렇기 때문에 아래 코드처럼 함수 안에서 선언한 변수는 함수 안에서만 유효하게 된다.

function sayHi() {
var userName = 'codeit';
console.log(`Hi ${userName}!`);
}

console.log(userName); // ReferenceError
하지만 함수를 제외한 for, if, while 등과 같은 문법 안에서 선언한 변수는 그 문법 밖에서도 계속 유효했었기 때문에 때로는 중복선언등의 문제가 생겨나기도 했다.
이런 문제를 해결하기 위해 let과 const 키워드와 함께 블록 스코프가 등장하게 된 것이다.

for (var i = 0; i < 5; i++) {
console.log(i);
}

console.log(i); // 5
블록 스코프는 중괄호로 감싸진 코드 블록에 따라 유효 범위를 구분하게 된다. 아래 코드에서 볼 수 있듯이 함수와 다른 문법들 뿐만아니라, 그냥 중괄호로 감싸진 코드 블록으로도 유효 범위가 구분되는 모습을 확인할 수 있다.

function sayHi() {
const userName = 'codeit';
console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
console.log(i);
}

{
let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError

\*01. 함수를 만드는 방법 -함수를 만드는 방법

1. 함수 선언
   function 함수이름(파라미터){
   동작
   return 리턴값
   }

2. 함수 표현식: 함수 선언을 값처럼 사용하는 방식
   const printCodeit = function () {
   console.log('Codeit');
   }

printCodeit();

\*03. 이름이 있는 함수 표현식
-Named Function Expression (기명 함수 표현식)
함수 표현식으로 함수를 만들 때는 선언하는 함수에 이름을 붙여줄 수도 있다.
이름이 있는 함수 표현식, 즉 기명 함수 표현식이라고 부른다.
함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 된다.

const sayHi = function () {
console.log('Hi');
};

console.log(sayHi.name); // sayHi

이렇게 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 된다. 하지만 함수에 이름을 붙여주게 되면, name 속성은 함수 이름을 문자열로 갖게 된다.

const sayHi = function printHiInConsole() {
console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole

이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수는 없다.

const sayHi = function printHiInConsole() {
console.log('Hi');
};

printHiInConsole(); // ReferenceError

기명 함수 표현식은 일반적으로 함수 내부에서 함수 자체를 가리킬 때 사용된다. 아래 코드.

let countdown = function(n) {
console.log(n);

if (n === 0) {
console.log('End!');
} else {
countdown(n - 1);
}
};

countdown(5);

아규먼트로 숫자 값을 전달하고 전달받은 그 값이 0이 될 때까지 하나씩 값을 줄이면서 자기 자신을 호출하는 countdown이라는 함수를 함수 표현식으로 작성해봤다. 이런 식으로 자기 자신을 부르는 함수를 재귀 함수(Recursive function)라고 부른다.
그런데 만약 이 함수를 복사하려고 다른 변수에 똑같이 담았다가, countdown 변수에 담긴 값이 변하게 되면 문제가 발생한다.

let countdown = function(n) {
console.log(n);
if (n === 0) {
console.log('End!');
} else {
countdown(n - 1);
}
};

let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError

마지막 줄에서 myFunction 함수를 호출했을 때, 함수가 실행되긴 하지만, 6번줄 동작을 수행할 때 호출하려는 countdown 함수가 이미 12번에서 null 값으로 변경되었기 때문에 함수가 아니라는 TypeError가 발생한 것이다!
이런 상황을 방지하기 위해서 함수 내부에서 함수 자신을 사용하려고 하면 함수표현식에서는 반드시 기명 함수 표현식을 사용하는 것이 좋다.

let countdown = function printCountdown(n) {
console.log(n);
if (n === 0) {
console.log('End!');
} else {
printCountdown(n - 1);
}
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작

함수 표현식을 작성할 때, 함수에 이름을 지정할 수 있다는 점과 특히 이렇게 함수 내에서 함수를 가리켜야 할 때는 꼭 함수 이름을 작성해주는 것이 안전하다는 점. 잘 기억해 두면 좋을 것 같다.

\*04. 즉시 실행 함수 (IIFE) -즉시 실행 함수
(function () {
console.log('Hi!');
})();

보이는 것처럼 함수선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식이다.
이렇게 하면 함수가 선언된 순간 바로 실행이 되는 것이다.

이렇게 함수 선언과 동시에 즉시 실행되는 함수를 가리켜 즉시 실행 함수 (표현)이라고 부른다.
영어로는 Immediately Invoked Function Expression, 줄여서 IIFE라고 부릅니다.

(function (x, y) {
consoel.log(x + y);
})(3, 5);

그리고 즉시 실행 함수도 일반 함수처럼 파라미터를 작성하고, 함수를 호출할 때 아규먼트를 전달할 수도 있다.
한 가지 주의할 점은 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용할 수 없다는 것이다.

(function sayHi() {
console.log('Hi!');
})();

sayHi(); // ReferenceError

그래서 일반적으로는 이름이 없는 익명 함수를 사용한다.
다만, 이름이 있는 함수 표현식 레슨에서도 살펴봤던 것처럼 함수 내부에서 자기 자신을 호출하는 재귀적인 구조를 만들고자 할 땐 이름이 필요할 수도 있으니까 이 부분은 참고해라!

-즉시 실행 함수의 활용
즉시 실행 함수는 말 그대로 선언과 동시에 실행이 이뤄지기 때문에 일반적으로 프로그램 초기화 기능에 많이 활용된다.

(function init() {
// 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();

혹은 재사용이 필요 없는, 일회성 동작을 구성할 때 활용하기도 한다.

const firstName = Young;
const lastName = Kang;

const greetingMessage = (function () {
const fullName = `${firstName} ${lastName} `;

return `Hi! My name is ${fullName}`;
})();

이렇게 함수의 리턴값을 바로 변수에 할당하고 싶을 때 활용할 수 있다.

즉시 실행 함수에서 사용하는 변수들은 함수 내에서만 유효하기 때문에 이런 점을 활용하면, 일시적으로 사용할 변수의 이름들을 조금 자유롭게 작성할 수도 있다는 점. 잘 기억해라!

\*05. 값으로서 함수
자바스크립트는 함수를 특별한 종류의 값으로 취급한다. 때문에 함수표현식이 가능
typeOf 연산자를 사용해보면 함수는 객체 타입의 값으로 평가된다.
배열의 요소로 함수를 선언하고, 호출할 수도 있음.

파라미터로 함수를 선언할 수도 있다.

콜백 함수(Callback Function): 다른 함수의 파라미터로 전달된 함수

고차 함수(Higher Order Function): 함수를 리턴하는 함수. 이중 괄호를 활용해서 고차 함수로 활용되는 함수를 바로 호출할수도 있다. 프로그래밍에서 이런 특징을 가진 함수를 일급 함수(Frist Class Function)라고 한다.

\*07. Parameter
파라미터: 함수를 호출할 때 함수 밖에서 안쪽으로 값을 전달하는 것. 파라미터를 활용하면 같은 함수라도 전달하는 값에 따라서 다양한 결과로 동작한다. 함수 선언 부분에서 소괄호 안에 작성되는 것.

함수를 호출할 때 파라미터로 전달하는 값: 아규먼트(Argument)

파라미터의 기본 값: undefined
파라미터에 할당 연산자를 활용해서 기본 값을 설정해줄 수 있다. 그러면 함수를 호출할 때 아규먼트를 적지 않아도 기본 값을 사용한다. ex) function greeting (name = 'Codeit', interest)

아규먼트가 파라미터로 전달될 때는 파라미터의 기본 값과는 전혀 관계없이 함수를 호출할 때 작성한 순서 그래도 전달된다.

함수를 호출할 때 undefined를 전달해서 기본 값을 사용할 수도 있다.

두개의 파라미터가 있는데 하나의 아규먼트만을 전달했을 때, 값을 전달받은 파라미터가 다른 파라미터의 기본값에 활용될 수도 있다.

파라미터의 기본값 정의는 ES6에서 정의된 것이라서, ES6를 지원하지 않으면 사용할 수 없다.

\*09. Arguments
Arguments: 함수를 호출할 때 전달하는 값

-아규먼트 갯수에 따라 유연하게 동작하는 함수 만들기
argumets: 특별한 객체. 파라미터의 갯수와 관계없이 모든 아규먼트를 배열처럼 출력해준다. 배열과 모양이 비슷하지만 배열의 메소드는 사용할 수 없는 유사 배열이다.

\*11. Rest Parameter
Rest Parameter: 일반 파라미터 앞에 ...을 붙여준 것. 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다.
일반 파라미터와 함께 사용할 때는 반드시 가장 마지막에 작성되어야한다.

_13. Arrow Function
Arrow Function: 이름이 없는 익명 함수
const elem = (number) => {
return number _ 2;
};

파라미터가 하나만 있을 때는 소괄호를 생략해도 된다. + return 문만 있을 때는 return을 생략해도 된다.
파라미터가 여러개일 때는 소괄호를 생략할 수 없다.
ex) const elem = number => number \* 2;

return 문 하나밖에 없지만 return 값이 '객체'일 때 무작정 중괄호를 생략해 버리면, 객체를 표현하는 중괄호를 함수의 동작 부분을 구분하는 중괄호로 해석해 버려서 오류가 발생한다.
또, arguments 객체를 활용하는 함수라면 Arrow Function을 사용할 수 없다.

\*15. What is this?
// this
console.log(this); -> window 객체가 기본 값으로 출력됨.
자바스크립트에서 this => 함수를 호출한 객체를 가리키는 키워드

arrow function에서 this의 값은 일반함수처럼 호출한 대상에 따라 상대적으로 변하지 않고, arrow function이 선언되기 직전에 유효한 this 값과 똑같은 값을 가지고서 동작하게 된다.

\*17. 종합 정리

1.함수 선언
자바스크립트에서 함수는 다양한 방식으로 선언할 수 있습니다.
가장 일반적인 방법은 function 키워드를 통해 함수를 선언하는 방식인데요.

// 함수 선언
function sayHi() {
console.log('Hi!');
}
이렇게 작성하는 방식을 함수 선언(function declaration)이라고 합니다.

2.함수 표현식
그리고 자바스크립트에서 함수는 값으로 취급될 수도 있기 때문에 변수에 할당해서 함수를 선언할 수도 있습니다.

// 함수 표현식
const sayHi = function () {
console.log('Hi!');
};
이렇게 함수를 값으로 다루는 방식을 함수 표현식 (function expression)이라고 합니다.

3.다양한 함수의 형태
자바스크립트에서 함수는 값으로 취급되는데요. 이런 특징은 코드를 작성할 때 다양한 형태로 활용될 수 있습니다.

// 변수에 할당해서 활용
const printJS = function () {
console.log('JavaScript');
};

// 객체의 메소드로 활용
const codeit = {
printTitle: function () {
console.log('Codeit');
}
}

// 콜백 함수로 활용
myBtn.addEventListener('click', function () {
console.log('button is clicked!');
});

// 고차 함수로 활용
function myFunction() {
return function () {
console.log('Hi!?');
};
};

4.파라미터의 기본값
자바스립트에서 함수의 파라미터는 기본값을 가질 수가 있는데요. 기본값이 있는 파라미터는 함수를 호출할 때 아규먼트를 전달하지 않으면, 함수 내부의 동작은 이 파라미터의 기본값을 가지고 동작하게 됩니다.

function sayHi(name = 'Codeit') {
console.log(`Hi! ${name}`);
}

sayHi('JavaScript'); // Hi! JavaScript
sayHi(); // Hi! Codeit

5.arguments 객체
자바스크립트 함수 안에는 arguments라는 독특한 객체가 존재합니다.
arguments 객체는 함수를 호출할 때 전달한 아규먼트들을 배열의 형태로 모아둔 유사 배열 객체인데요. 특히, 함수를 호출할 때 전달되는 아규먼트의 개수가 불규칙적일 때 유용하게 활용될 수 있습니다.

function printArguments() {
// arguments 객체의 요소들을 하나씩 출력
for (const arg of arguments) {
console.log(arg);
}
}

printArguments('Young', 'Mark', 'Koby');
참고로 arguments라는 객체를 활용하고자 한다면 함수 안에서 사용할 파라미터나 변수, 함수의 이름을 arguments라고 짓는 것은 피하는게 좋겠죠?

6.Rest Parameter
arguments 객체를 이용하는 것 말고도 불규칙적으로 전달되는 아규먼트를 다루는 방법이 있는데요. 파라미터 앞에 마침표 세 개를 붙여주면, 여러 개로 전달되는 아규먼트들을 배열로 다룰 수가 있게 됩니다.
그리고 arguments객체는 유사 배열이기 때문에 배열의 메소드를 활용할 수 없는 반면, rest parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다는 장점이 있습니다.

function printArguments(...args) {
// args 객체의 요소들을 하나씩 출력
for (const arg of args) {
console.log(arg);
}
}

printArguments('Young', 'Mark', 'Koby');
rest parameter는 다른 일반 파라미터들과 함께 사용될 수도 있는데요.

function printRankingList(first, second, ...others) {
console.log('코드잇 레이스 최종 결과');
console.log(`우승: ${first}`);
console.log(`준우승: ${second}`);
for (const arg of others) {
console.log(`참가자: ${arg}`);
}
}

printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
이름 그대로 앞에 정의된 이름 그대로 앞에 정의된 파라미터에 argument를 먼저 할당하고 나머지 argument를 배열로 묶는 역할을 하기 때문에 일반 파라미터와 함께 사용할 때는 반드시 가장 마지막에 작성해야 한다는 점을 꼭 기억해 주세요!

7.Arrow Function
arrow function은 익명 함수를 좀 더 간결하게 표현할 수 있도록 ES2015에서 새롭게 등장한 함수 선언 방식입니다.
아래 코드와 같이 표현식으로 함수를 정의할 때 활용될 수도 있고 콜백 함수로 전달할 때 활용할 수도 있습니다.

// 화살표 함수 정의
const getTwice = (number) => {
return number \* 2;
};

// 콜백 함수로 활용
myBtn.addEventListener('click', () => {
console.log('button is clicked!');
});
화살표 함수는 다양한 상황에 따라 축약형으로 작성될 수 있는데요.
아래 코드와 주석을 한 번 참고해 주세요!

// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
return number \* 2;
};

// 파라미터를 감싸는 소괄호 생략 가능
const getTwice = number => {
return number \* 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
return a + b;
};

// return문과 중괄호 생략 가능
const sum = (a, b) => a + b;
그리고 Arrow function이 일반 함수와 몇 가지 차이점이 있는데요.
가장 대표적인 차이점은 arguments 객체가 없고, this가 가리키는 값이 일반 함수와 다르다는 점입니다.
arrow function을 사용할 땐 이런 부분을 잘 고려해야 된다는 점을 잊지 마세요!

8.this
자바스크립트에는 this라는 조금 특별한 키워드가 있습니다.
웹 브라우저에서 this가 사용될 때는 전역 객체, Window 객체를 가지게 됩니다. 하지만 객체의 메소드를 정의하기 위한 함수 안에선 메소드를 호출한 객체를 가리키게 됩니다.

const user = {
firstName: 'Tess',
lastName: 'Jang',
getFullName: function () {
return `${this.firstName} ${this.lastName}`;
},
};

console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체

\*01. 문장과 표현식

1.문장 (statements)
우리가 작성하는 모든 자바스크립트 코드는 모두 문장과 표현식으로 구성되어 있습니다.
먼저, 자바스크립트에서 문장은 어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리를 가리킵니다.

예를 들어서

let x;
x = 3;

if (x < 5) {
console.log('x는 5보다 작다');
} else {
console.log('x는 5와 같거나 크다');
}

for (let i = 0; i < 5; i++) {
console.log(i);
}
이 코드의 첫 번째 줄도 x라는 변수를 선언하는 동작이 일어나는 하나의 문장이고, 두 번째 줄도 x에 3이라는 값을 할당하는 동작이 일어나는 하나의 문장입니다. 그리고 4번줄 부터 8번줄 까지도 하나의 문장이고 그리고 10번줄 부터 12번줄 까지도 반복 동작을 하는 문장의 예시라고 볼 수 있는데요.
선언문, 할당문, 조건문, 반복문 .. 이렇게 끝에 문이라고 붙은 이유가 모두 동작을 수행하는 문장이기 때문입니다.

2.표현식 (expressions)
표현식은 결과적으로 하나의 값이 되는 모든 코드를 가리킵니다. 이게 무슨 말이냐면,

5 // 5

'string' // string
어떤 하나의 값을 그대로 작성하는 것도 표현식이지만,

5 + 7 // 12

'I' + ' Love ' + 'Codeit' // I Love Codeit

true && null // null
이렇게 연산자를 이용한 연산식도 결국은 하나의 값이 되고,

const title = 'JavaScript';
const codeit = {
name: 'Codeit'
};
const numbers = [1, 2, 3];

typeof codeit // object
title // JavaScript
codeit.name // Codeit
numbers[3] // undefined
위 코드의 마지막 네 줄처럼 선언된 변수를 호출하거나, 객체의 프로퍼티에 접근하는 것도 결국에는 하나의 값으로 평가되는데요. 그래서 길이와는 상관없이 결과적으로 하나의 값이 되는 코드를 모두 표현식이라고 할 수가 있습니다.

3.표현식이면서 문장, 문장이면서 표현식
표현식은 보통 문장의 일부로 쓰이지만, 그 자체로 문장일 수도 있습니다. 가장 대표적인 예시가 할당식과 함수 호출인데요.

// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식이다.
title = 'JavaScript'; // JavaScript

// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식이다.
sayHi(); // sayHi 함수의 리턴 값

// console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 표현식이다.
console.log('hi'); // undefined
사실은 할당연산자 자체가 할당한 값을 그대로 리턴하는 특징이 있기 때문에 연산 자체로 값이 되는 표현식이기도 합니다. 그런데 할당식은 왼쪽에 있는 피연산자에 오른쪽 피연산자 값을 할당하는 동작을 하기 때문에, 문장이 되기도 하죠?
그리고 함수 호출도 함수를 호출한 자리가 결국에는 하나의 리턴하는 값을 가지기 때문에 표현식이라고 할 수도 있지만 함수 내부에 정의한 코드를 실행하는 동작이기 때문에 문장이 되기도 하는 것이죠.

4.표현식인 문장 vs 표현식이 아닌 문장
결과적으로 문장은 다시 표현식인 문장과, 표현식이 아닌 문장으로 나눌 수 있는데요.
이 둘을 구분하는 가장 간단한 방법은 우리가 구분하고자 하는 문장을 변수에 할당하거나, 어떤 함수의 아규먼트로 전달해보는 겁니다.

let x;
x = 3;

console.log(if (x < 5) {
console.log('x는 5보다 작다');
} else {
console.log('x는 5보다 크다');
});

const someloop = for (let i = 0; i < 5; i++) {
console.log(i);
};
console.log 메소드의 아규먼트로 if문을 전달하거나 someloop라는 변수에 for 반복문을 할당하게 되면, Error가 발생하게 되는데요.
조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가되기 때문입니다.

5.마무리
이번 시간에는 문장과 표현식에 대해서 살펴봤는데요. 처음 프로그래밍을 공부할 때는 여러 문법들 속에 이 둘의 개념이 코드 속에 너무나도 자연스럽게 녹아있기 때문에 별로 중요하게 생각하지 않고 그냥 넘어가는 경우가 생각보다 많이 있는데요.
다른 사람들이 작성한 코드의 맥락을 이해하는데에도 도움이 되지만, 자바스크립트의 문법을 좀 더 깊이 이해하고 능숙하게 다루기 위해서도 이 문장과 표현식에 대한 개념을 명확히 해 두는 것이 좋습니다.

참고로 자바스크립트에서 특별한 경우를 제외하면 일반적으로 표현식인 문장은 세미콜론으로, 표현식이 아닌 문장은 문장 자체의 코드 블록(중괄호)로 그 문장의 범위가 구분되는데요.

(3 + 4) \* 2;
console.log('Hi!');

while(true) {
x++;
}
그래서 다른 사람들이 작성한 코드를 볼 때도 이 세미콜론과 중괄호를 따라가 보면 좀 더 쉽게 표현식인 문장과 표현식이 아닌 문장을 구분할 수가 있는데요. 물론 우리가 코드를 작성할 때도 이런 점을 잘 구분해서 세미콜론을 사용하는 게 좋겠죠!?

\*02. 조건을 다루는 표현식
// 조건 연산자

1. if문
   if (조건) {
   // 조건이 true일 때 동작
   } else {
   // 조건이 false일 때 동작
   }

2. switch문
   switch (값) {
   case A:
   // 값이 A와 일치할 떄 동작
   break;
   default:
   // 값이 일치하는 case가 없을 때 동작
   }

// 조건 ? truthy 할 때 표현식 : falsey 할 때 표현식
// 삼항 연산자 (Ternary operator)

\*04. Spread 구문
// Spread 구문 (Spread Syntax)

1. 배열 펼치기
   const numbers = [1, 2, 3];

console.log(...numbers); -> 1 2 3

2. 배열 복사하기
   const aaa = ['a', 'b'];
   const bbb = [...aaa, 'c']

3. 배열 합치기
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); -> [1, 2, 3 ,4 ,5 ,6]

4. 함수 호출할 떄 아규먼트로 활용하기
   const introduce = (name, birth, job) => {
   함수 동작 부분
   };

const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr);

5. 객체로 만들기
   const members = ['지은', '지율', '하영'];

const newObject = { ...members }
console.log(newObject) -> {0:'지은', 1:'지율', 3:'하영' };

\*05. 객체 Spread하기
지난 영상에서 Spread 구문에 대해서 살펴봤습니다. Spread 구문은 특히 배열을 다룰 때 유용하게 활용할 수 있었는데요. 그래서 사실 ES2015에서 Spread 구문이 처음 등장했을 땐 배열에서만 사용이 가능했고, 일반 객체에는 사용할 수가 없었습니다.
그러다가 ES2018에서 일반 객체에도 Spread 구문을 사용할 수있는 표준이 등장하게 되었는데요. 2018년이 훨씬 지난 지금, 대부분의 브라우저에서는 객체를 복사하거나 기존의 객체를 가지고 새로운 객체를 만들 때 Spread 구문을 활용할 수가 있습니다.

-객체 Spread하기
아래 코드를 살펴봅시다.

const codeit = {
name: 'codeit',
};

const codeitClone = {
...codeit, // spread 문법!
};

console.log(codeit); // {name: "codeit"}
console.log(codeitClone); // {name: "codeit"}
이렇게 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수가 있게 됩니다.

const latte = {
esspresso: '30ml',
milk: '150ml'
};

const cafeMocha = {
...latte,
chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
이런 식으로 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용할 수도 있겠죠?

-주의 사항
배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만, 객체로는 새로운 배열을 만들거나 함수의 아규먼트로 사용할 수는 없습니다.

const latte = {
esspresso: '30ml',
milk: '150ml'
};

const cafeMocha = {
...latte,
chocolate: '20ml',
}

[...latte]; // Error

(function (...args) {
for (const arg of args) {
console.log(arg);
}
})(...cafeMocha); // Error
그렇기 때문에 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다는 점. 잘 기억해 두시면 좋을 것 같습니다!

\*07. 모던한 프로퍼티 표기법
const title = '코드잇';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
title,
birth,
job
}

// 계산된 속성명(computed property name)
const user = {
['Code' + 'it']: 'value',
};

console.log(user); -> {Codeit: "value"}

\*09. 옵셔널 체이닝 -옵셔널 체이닝 (Optional Chaining)
ECMAScript2020에서 등장한 옵셔널 체이닝이라는 접근 방법입니다. 일반적으로 객체의 프로퍼티는 점 표기법을 통해서 접근하게 되는데요.

아래 코드를 잠시 살펴봅시다.

function printCatName(user) {
console.log(user.cat.name);
}

const user1 = {
name: 'Captain',
cat: {
name: 'Crew',
breed: 'British Shorthair',
}
}

printCatName(user1); // Crew
객체를 활용해서 데이터를 표현하다 보면 이렇게 중첩된 객체를 작성하게 될 일이 빈번하고, 함수에서도 이런 중첩 객체의 프로퍼티를 활용할 일이 많은데요.
중첩된 객체의 프로퍼티에 접근하는 방법은 이미 다 알고 계시죠? 함수 printCatName은 user 파라미터에 중첩된 cat객체의 name 프로퍼티를 콘솔에 출력해주는 함수입니다.

그런데, 이렇게 중첩 객체를 다룰 때 한가지 조심해야 될 부분이 있습니다.

const user2 = {
name: 'Young',
}

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined

여러 가지 상황에 맞춰 데이터를 다루다 보면 때로는 우리가 예상한 프로퍼티를 가지고 있지 않을 수도 있는데요.
cat 프로퍼티를 가지고 있지 않은 user2는 cat 프로퍼티가 undefined이기 때문에 user2.cat.name에 접근하려는 순간 에러가 발생하게 됩니다.

그래서 printCatName과 같이 중첩된 객체의 프로퍼티를 다룰 때는 user.cat.name에 접근하기 전에 user.cat이 null 혹은 undefined가 아니라는 것을 검증하고 접근해야 에러를 방지할 수가 있는데요.

function printCatName(user) {
console.log(user.cat && user.cat.name);
}

if문을 활용할 수도 있지만, 일반적으로는 간결하게 AND 연산자를 활용해서 이 문제를 해결하곤 했었습니다.
그런데 이마저도 객체의 이름이나 프로퍼티의 이름이 길어질수록 가독성이 나빠지는 문제가 있는데요, 이런 상황에 훨씬 더 코드를 간결하게 사용할 수 있는 문법이 바로 옵셔널 체이닝(Optional Chaining)입니다.

function printCatName(user) {
console.log(user.cat?.name);
}

위 코드에서 볼 수 있는 것처럼 물음표와 마침표를 붙여 사용하는 부분이 바로 옵셔널 체이닝 연산자(?.)인데요.
만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환하는 문법입니다.

옵셔널 체이닝 연산자의 동작 원리를 삼항 연산자를 통해 구체적으로 표현하면 다음과 같이 작성할 수 있는데요.

function printCatName(user) {
console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}
이렇게 보니 옵셔널 체이닝 연산자가 어떻게 동작하는지 이해가 되죠?
이전에 배운 null 병합 연산자와 함께 활용하면 다음과 같이 응용할 수도 있습니다.

function printCatName(user) {
console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const user2 = {
name: 'Young',
}

printCatName(user2); // 함께 지내는 고양이가 없습니다.
이후 레슨에서 자세히 다루겠지만 자바스크립트에서 에러를 방지하는 일은 굉장히 중요한데요.
중첩된 객체를 다룰 때 에러를 방지하기 위해 다양한 방식을 활용할 수 있지만 옵셔널 체이닝 연산자를 활용하면 훨씬 더 간결하게 코드를 작성할 수 있다는 점! 잘 기억해 두세요!

\*10. Destructuring (구조 분해)
// 구조 분해 (Destructuring) (배열)

const rank = ['유나', '효준', '민환', '재하', '규식'];

const [macbook, ipad, airpods, coupon] = rank;  
변수의 갯수보다 배열의 요소의 갯수가 더 많으면 넘치는 요소는 생략됨.

const [macbook, ipad, airpods, ...coupon] = rank;
마지막 변수에 ...(Rest Parameter)를 활용하면 나머지 요소를 다 할당함.

const [macbook, ipad, airpods, coupon = '없음'] = rank;
변수에 기본 값 할당 가능

\*12. Destructuring (구조 분해) II
// 구조 분해 (Destructuring) (객체)

const macbook = {
title: '맥북',
price: 369000,
}

const { title, price } = macbook;

const { title, price, color = 'silver' } = macbook;

const { title, price, ...rest } = macbook;

const { title: product, price } = macbook;

\*14. 함수와 Destructuring
// 구조 분해 (Destructuring) (함수)

\*16. 에러와 에러 객체
// 에러와 에러 객체
// name, message
기본적으로 에러 객체에는 에러 이름을 담고 있는 name 프로퍼티와 에러 내용을 담고 있는 message 프로퍼티를 가지고 있다.

// 에러의 대표적인 3가지 종류
ReferenceError, TypeError, SyntaxError(문법 에러)

// 의도적으로 에러 객체 만들기
const error = new TypeError('타입 에러가 발생했습니다.');

throw error;

\*17. try catch 문
// try catch 문
try {
// 코드
} catch (error) {
// 에러가 발생했을 때 동작할 코드
}

(error) -> error, err, e로 쓰기도 함 (맘대로 정할 수 있음)

\*18. try catch 활용하기
// try catch 활용하기

// 예외 (Exception)
실행이 가능한 코드에서 발생한 에러

\*20. finally 문
지난시간에 try catch문을 통해 에러를 다루는 방법에 대해서 살펴봤는데요.
try catch는 사실 finally라는 코드 블록을 하나 더 가질 수 있습니다!

finally문은 try catch문이 끝난 다음에 최종적으로 실행될 코드를 다룰 때 활용하는데요.

-finally문
try {
// 실행할 코드
} catch (err) {
// 에러가 발생했을 때 실행할 코드
} finally {
// 항상 실행할 코드
}
try문에서 에러가 발생하지 않는다면 try문의 코드가 모두 실행된 다음에,
try문에서 에러가 발생한다면 catch문의 코드가 모두 실행된 다음 실행할 코드를 finally문에 작성하면 됩니다.

다시 말해 try문에서 어떤 코드를 실행할 때 '에러 여부와 상관 없이 항상 실행할 코드'를 작성하는 것이죠!

function printMembers(...members) {
for (const member of members) {
console.log(member);
}
}

try {
printMembers('영훈', '윤수', '동욱');
} catch (err) {
alert('에러가 발생했습니다!');
console.error(err);
} finally {
const end = new Date();
const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
console.log(msg);
}
위 코드 처럼 에러 유무와 관계없이 코드 실행 시각을 알고 싶을 때 활용할 수도 있겠죠?

finally문에서의 에러 처리는?
참고로 finally문에서 에러가 발생할 경우에는 다시 그 위에 있는 catch문으로 넘어가진 않습니다.
만약 finally문에서도 에러 처리가 필요한 경우에는 아래 처럼 try catch문을 중첩해서 활용하는 방법이 있는데요.
이런 부분도 잘 참고해 두셨다가 필요한 상황에 맞게 응용해 보세요!

try {
try {
// 실행할 코드
} catch (err) {
// 에러가 발상했을 때 실행할 코드
} finally {
// 항상 실행할 코드
}
} catch (err) {
// finall문에서 에러가 발생했을 때 실행할 코드
}

\*22. 종합 정리

조건부 연산자 (Conditional operator)
삼항 연산자 (Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자 입니다.
if문과 같은 원리로 조건에 따라 값을 결정할 때 활용되는데요.

const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

console.log(passChecker(75));
간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현할 수 있는 장점이 있지만 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장은 작성할 수 없다는 한계가 있기 때문에 if문을 완벽하게 대체할 수는 없다는 점. 꼭 기억해 주세요!

Spread 구문
여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수가 있습니다.

const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있습니다.
참고로 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다는 부분도 잘 기억해 두시면 좋을 것 같습니다.

const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
name: '모던 자바스크립트',
language: 'JavaScript',
}
const newArray = [...topic]; // TypeError!
모던한 프로퍼티 표기법
ES2015 이후부터는 자바스크립트에서 변수나 함수룰 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있습니다.

function sayHi() {
console.log('Hi!');
}

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
title,
birth,
job,
sayHi,
};

console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}
그리고 메소드를 작성할 때도 다음과 같이 function 키워드를 생략할 수가 있습니다.

const user = {
firstName: 'Tess',
lastName: 'Jang',
getFullName() {
return `${this.firstName} ${this.lastName}`;
},
};

console.log(user.getFullName()); // Tess Jang
뿐만아니라 아래 코드와 같이 대괄호를 활용하면 다양한 표현식으로 프로퍼티 네임을 작성할 수도 있으니까 잘 기억해 두셨다가 유용하게 활용해 보세요!

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
['topic' + 'name']: 'Modern JavaScript',
[propertyName]: 2017,
[getJob()]: '프로그래밍 강사',
};

console.log(codeit);
구조 분해 Destructuring
배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있습니다.

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
title: '맥북 프로 16형',
price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
함수에서 default parater, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있습니다.

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
title: '맥북 프로 16형',
price: 3690000,
memory: '16 GB 2667 MHz DDR4',
storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}
에러와 에러 객체
자바스크립트에서 에러를 다루는 일은 굉장히 중요하다고 할 수 있는데요.
자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않기 때문입니다.

그리고 에러가 발생하면 에러에 대한 정보를 name과 message라는 프로퍼티로 담고 있는 에러 객체가 만들어지는데요.
대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError 입니다.

에러 객체는 직접 만들 수도 있는데요.
new 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있습니다.

throw new TypeError('타입 에러가 발생했습니다.');
try catch문
try catch문은 자바스크립트에서 대표적인 에러 처리 방법입니다.

try {
// 실행할 코드
} catch (error) {
// 에러 발생 시 동작할 코드
}
try문 안에서 실행할 코드를 작성하고, try문에서 에러가 발생한 경우에 실행할 코드를 catch 문 안에 작성하면 되는데요.
이 때 try문에서 발생한 에러 객체가 catch문의 첫 번째 파라미터로 전달됩니다. 만약, try문에서 에러가 발생하지 않을 경우 catch문의 코드는 동작하지 않습니다.

그리고 try catch문에서 에러의 유무와 상관없이 항상 동작해야할 코드가 필요하다면 finally문을 활용할 수 있습니다.

try {
// 실행할 코드
} catch (error) {
// 에러가 발상했을 때 실행할 코드
} finally {
// 항상 실행할 코드
}

\*01. 배열 메소드 I: forEach와 map
// forEach와 map
// forEach
members.forEach( function (member) {
conosle.log(`${member}님이 입장하셨습니다.`);
});

members.forEach((member) => {
conosle.log(`${member}님이 입장하셨습니다.`);
});

members.forEach((member, i) => {
conosle.log(`${i} ${member}님이 입장하셨습니다.`);
});

members.forEach((member, i,arr) => {
conosle.log(`${i} ${member}님이 입장하셨습니다.`);
});

[배열].forEach((member, i,arr) => {
conosle.log(`${i} ${member}님이 입장하셨습니다.`);
});

// map
firstNames.map((firstNames, i) => {
return lastNames[i] + firstNames;
});

\*04. 배열 메소드 II: filter와 find
// filter와 find
// filter
const apples = devices.filter((el) => el.brand === 'apple'); -> return 값: 조건에 만족하는 모든 값의 배열

// find
const apples = devices.find((el) => el.brand === 'apple'); -> return 값: 조건에 만족하는 하나의 값

\*07. 배열 메소드 III: some과 every
// some과 every
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el) => el > 5);

console.log('some:', someReturn); -> some: true
console.log('every:', everyReturn); -> every: false

\*09. 배열 메소드 IV: reduce
// reduce
const numbers = [1, 2, 3, 4];

const sumAll = numbers.reduce((acc, el, i, arr) => {
console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
console.log('acc:', acc);
console.log('el:', el);
console.log('----------');

return acc + el;
}, 0);

console.log('sumAll:', sumAll)

\*11. sort, reverse
sort 메소드
배열에서 sort라는 메소드를 활용하면 배열을 정렬할 수 있습니다.
sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬됩니다.

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
그렇기 때문에 numbers에 sort 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다.

그럴 땐 sort 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데요.

const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
sort 메소드를 사용할 때 한 가지 주의해야될 부분은 메소드를 실행하는 원본 배열의 요소들을 정렬한다는 점입니다.
그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니, 그런 경우에는 미리 다른 변수에 복사해두는 것이 좋겠죠!?

reverse 메소드
reverse 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 입니다.
reverse 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순이 메소드를 호출해주기만 하면 배열의 순서가 뒤집히는데요.
sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점은 꼭 주의헤야 합니다.

const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]

\*12. Map, Set
-Map과 Set
객체는 property name을 통해 이름이 있는 여러 값들을 묶을 때 활용할 수 있고,
배열은 index를 통해 순서가 있는 여러 값들을 묶을 때 유용하게 활용할 수 있습니다.

그런데 ES2015에서 객체와 비슷한 Map과 배열과 비슷한 Set이라는 데이터 구조가 새롭게 등장했는데요.
각각 어떤 특징들을 가지고 있는지 간단하게 살펴보도록 합시다.

-Map
Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷합니다.
하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게
Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요.

new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

map.set(key, value): key를 이용해 value를 추가하는 메소드.
map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.delete(key): key에 해당하는 값을 삭제하는 메소드.
map.clear(): Map 안의 모든 요소를 제거하는 메소드.
map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게
Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

-Set
Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷합니다.
하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요.

Map과 마찬가지로 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
set.clear(): Set 안의 모든 요소를 제거하는 메소드.
set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 get메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요.
한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다.
그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요.
바로, 중복을 허용하지 않는 값들을 모을 때입니다.

Set은 중복되는 값을 허용하지 않는 독특한 특징이 있는데요.

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시하는 특징이 있습니다.

처음 Set을 생성할 때 아규먼트로 배열을 전달할 수도 있는데요.
이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용하기도 합니다.

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}

\*13. 종합 정리
-forEach 메소드
배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드입니다. forEach 메소드는 첫 번째 아규먼트로 콜백 함수를 전달받는데요. 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달됩니다. (index와 array는 생략가능)

const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});

-map 메소드
forEach와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드 입니다. 단, 첫 번째 아규먼트로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징이 있습니다.

const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
return element \* 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]
filter 메소드
filter 메소드는 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴하는 메소드입니다.

const devices = [
{name: 'GalaxyNote', brand: 'Samsung'},
{name: 'MacbookPro', brand: 'Apple'},
{name: 'Gram', brand: 'LG'},
{name: 'SurfacePro', brand: 'Microsoft'},
{name: 'ZenBook', brand: 'Asus'},
{name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((element, index, array) => {
return element.brand === 'Apple';
});

console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]
find 메소드
find 메소드는 filter 메소드와 비슷하게 동작하지만, 배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료하는 메소드 입니다.

const devices = [
{name: 'GalaxyNote', brand: 'Samsung'},
{name: 'MacbookPro', brand: 'Apple'},
{name: 'Gram', brand: 'LG'},
{name: 'SurfacePro', brand: 'Microsoft'},
{name: 'ZenBook', brand: 'Asus'},
{name: 'MacbookAir', brand: 'Apple'},
];

const myLaptop = devices.find((element, index, array) => {
console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}
some 메소드
some 메소드는 배열 안에 콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드 입니다. 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 false를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하는 요소가 등장한다면 바로 true를 리턴하고 반복을 종료합니다.

const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
return element > 5;
});

console.log(someReturn); // true;
every 메소드
every 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드 입니다.
배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 true를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하지 않는 요소가 등장한다면 바로 false를 리턴하고 반복을 종료합니다.

const numbers = [1, 3, 5, 7, 9];

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
console.log(index); // 콘솔에는 0까지만 출력됨.
return element > 5;
});

console.log(everyReturn); // false;
reduce 메소드
reduce 메소드는 누적값을 계산할 때 활용하는 조금 독특한 메소드 입니다. reduce 메소드는 일반적으로 두 개의 파라미터를 활용하는데요.
첫 번째는 반복동작할 콜백함수입니다. 매번 실행되는 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫번째 파라미터로 전달되는데요. 결과적으로 마지막 콜백함수가 리턴하는 값이 reduce 메소드의 최종 리턴값이 되는겁니다.
이 때 reduce 메소드의 두 번째 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫 번째 파라미터로 전달되는 것이죠.

const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
return accumulator + element;
}, 0);

console.log(sumAll); // 10
처음에는 조금 복잡할 수 있지만, 원리를 잘 이해하고나면 유용하게 활용할 수 있으니 포기하지 마시고 잘 기억해 주세요!

-sort 메소드
배열에서 sort라는 메소드를 활용하면 배열을 정렬할 수 있습니다.
sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬됩니다.

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
그렇기 때문에 numbers에 sort 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다. 그럴 땐 sort 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데요.

const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
sort 메소드를 사용할 때 한 가지 주의해야될 부분은 메소드를 실행하는 원본 배열의 요소들을 정렬한다는 점입니다. 그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니까, 원본 배열의 순서가 필요하다면 미리 다른 변수에 복사해두는 것이 좋겠죠!?

-reverse 메소드
reverse 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 입니다. reverse 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순이 메소드를 호출해주기만 하면 배열의 순서가 뒤집히는데요. sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점은 꼭 주의헤야 합니다.

const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]

-Map
Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷합니다. 하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요.
new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

map.set(key, value): key를 이용해 value를 추가하는 메소드.
map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.delete(key): key에 해당하는 값을 삭제하는 메소드.
map.clear(): Map 안의 모든 요소를 제거하는 메소드.
map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

-Set
Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷합니다. 하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요.
Map과 마찬가지로 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
set.clear(): Set 안의 모든 요소를 제거하는 메소드.
set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 get메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요. 한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다.
그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요. 바로, 중복을 허용하지 않는 값들을 모을 때입니다.

Set은 중복되는 값을 허용하지 않는 독특한 특징이 있는데요. Set 객체에 요소를 추가할 때 이미 Set 객체 안에 있는 값(중복된 값)을 추가하려고 하면 그 값은 무시되는 특징이 있습니다.
처음 Set을 생성할 때 아규먼트로 배열을 전달할 수가 있는데요. 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용할 수 있습니다.

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}

\*01. 모듈이란?
Module: 코드를 효율적으로 관리할 수 있다! 다른 프로그램에서 재사용 할 수 있다!

\*02. 모듈 파일의 조건
// 모듈 파일의 조건

1. 모듈 스코프(Modeul Scope)를 가져야한다.

\*03. Live Server 설치하기

\*05. 모듈 문법
파일 내보내기: export
파일 불러오기: import { 변수, 함수 } from '파일이름';

\*07. 이름 바꾸기
// 이름 바꾸기
import { 변수 as 변경하고자 하는 이름, 함수 } from './파일이름';

\*09. 한꺼번에 다루기

1. import _ as 새로운이름 from './파일이름';
   console.log(새로운이름.변수)
   _: 와일드카드 문자(Wildcard Character)

2. export { 변수, 함수 };

\*11. default export
// Default export
export default -> 한 파일에서 한번만 사용 가능

// Named export
export { };

\*13. 복습과 활용
그동안 배운 문법만 되돌아봐도 모듈 문법은 정말 다양한 방식으로 작성될 수가 있습니다.
export를 할 때도 선언문을 export하거나

export const title = 'Module';
선언된 변수나 함수를 코드 블록으로 묶어서 export할 수도 있고,

const printer = (value) => {
console.log(value);
};

const arrPrinter = (arr) => {
arr.forEach((el, i) => {
console.log(`${i + 1}. ${el}`);
})
};

export { printer, arrPrinter };
때로는 as 키워드를 통해 이름을 변경해서 export를 할 수도 있었죠?

const printer = (value) => {
console.log(value);
};

const arrPrinter = (arr) => {
arr.forEach((el, i) => {
console.log(`${i + 1}. ${el}`);
})
};

export { printer as namedPrinter, arrPrinter };
그리고 default 키워드를 통해 표현식을 export하는 방법도 배우면서,

const title = 'Module';

export default title;
위 코드 처럼 단순히 하나의 대상을 export하는 것뿐만 아니라 아래 코드처럼 여러 대상을 객체 값으로 모아 내보내는 방식도 가능하다는 것도 배웠습니다.

const title = 'Module';

const printer = (value) => {
console.log(value);
};

const arrPrinter = (arr) => {
arr.forEach((el, i) => {
console.log(`${i + 1}. ${el}`);
})
};

export default { title, printer, arrPrinter };
그리고 import도 import 키워드 이후에 중괄호를 감싸면, 아래 코드 처럼 모듈 파일에서 export하는 항목들을 선택적으로 불러올 수 있고

import { title, data } from './modules.js';
as 키워드를 통해서 아래 코드 처럼 이름을 바꿀 수도 있었죠?

import { title as moduleTitle, data } from './modules.js';
뿐만 아니라 와일드카드 문자(\*)를 통해서 아리 코드 처럼 export된 항목들을 모두 불러올 수도 있었습니다.

import \* as modules from './modules.js';
그리고 아래 코드 처럼 default export된 대상을 import할 때는

import { defult as modules } from './modules.js';
아래 처럼 축약형으로 불러올 수 있다는 부분도 살펴봤었습니다.

import modules from './modules.js';
심지어 이러한 방식들을 잘 응용하면,

// (modules.js)
import module1 from './sub-module1.js';
import module2 from './sub-module2.js';
import module3 from './sub-module3.js';

export { module1, module2, module3 };
// index.js
import { module1, module2, module3 } from 'modules.js';
위 코드들 처럼 여러 개의 기능으로 잘게 나누어진 모듈을 import한 다음 다시 export하는 모듈 파일을 만들 수 있는데요. 비슷한 특징을 가진 여러 모듈 파일들을 다시 하나의 모듈 파일로 만들 수 있어서 파일 관리를 유용하게 할 수 있도록 도와줍니다.

\*15. 종합 정리 -모듈
모듈은 간단하게, 자바스크립트 파일 하나라고 할 수 있습니다.
복잡하고 많은 양의 코드를 기능에 따라 각각의 파일로 나눠 관리하면

코드를 좀 더 효율적으로 관리할 수 있고,
비슷한 기능이 필요할 때 다른 프로그램에서 재사용 할 수도 있다는 장점이 있습니다.

-모듈 스코프
모듈 파일 안에서 선언한 변수는 외부에서 자유롭게 접근할 수 없도록 막아야 하는데요.
다시 말해 모듈은 파일 안에서 모듈 파일만의 독립적인 스코프를 가지고 있어야 합니다.

HTML파일에서 자바스크립트 파일을 불러올 때 모듈 스코프를 갖게 하려면
script태그에 type속성을 module이라는 값으로 지정해 주어야 합니다.

<body>
  <script type="module" src="index.js"></script>
</body>

-모듈 문법
자바스크립트의 모듈 문법은 기본적으로 export와 import 입니다.
모듈 스코프를 가진 파일에서 외부로 내보내고자 하는 변수나 함수를 export 키워드를 통해 내보내고,
모듈 파일에서 내보낸 변수나 함수들은 다른 파일에서 import 키워드를 통해 가져옵니다.

// printer.js
export const title = 'CodeitPrinter';

export function print(value) {
console.log(value);
};
// index.js
import { title, print } from './printer.js';

print(title);

-이름 바꿔 import 하기
import 키워드를 통해 모듈을 불러올 때 as 키워드를 활용하면 import하는 대상들의 이름을 변경할 수 있습니다.
import 할 변수나 함수 이름을 조금 더 간결한 이름으로 바꾸거나, 혹은 더 구체적으로 바꾸고 싶을 때 활용하면 좋겠죠?
뿐만 아니라 이름을 바꿔서 import 하면 여러 파일에서 불러오는 대상들의 이름이 중복되는 문제를 해결할 수도 있습니다.

import { title as printerTitle, print, printArr } from './printer.js';
import { title, data as members } from './members.js';

printer(title);
arrPrinter(members);

-한꺼번에 import 하기
import할 때 와일드카드 문자(\*)와 as를 활용하면 모듈 파일에서 export하는 모든 대상을 하나의 객체로 불러올 수 있습니다.

import \* as printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }

-한꺼번에 export 하기
변수나 함수 앞에 매번 export 키워드를 붙일 수도 있지만, 선언된 변수나 함수를 하나의 객체로 모아 한꺼번에 내보낼 수도 있습니다.
이때 as 키워드를 활용하면 이름을 변경해서 export할 수도 있습니다.

const title = 'CodeitPrinter';

function print(value) {
console.log(value);
}

function printArr(arr) {
arr.forEach((el, i) => {
console.log(`${i + 1}. ${el}`);
});
}

export { title as printerTitle, print, printArr };

-default export
export를 할 때 default 키워드를 함께 사용하면 모듈 파일에서 기본적으로 export할 대상을 정할 수 있습니다.
일반적으로 모듈 파일에서 export 대상이 하나라면, 이 default 키워드를 함께 활용하는 것이 조금 더 간결한 코드를 구성하는데 도움이 되는데요.

const title = 'CodeitPrinter';

function print(value) {
console.log(value);
}

export default print;
default export는 import할 때 기본적으로 다음과 같이 불러올 수 있지만,

import { default as printerJS } from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
다음과 같이 축약형 문법으로 import 할 수도 있기 때문입니다.

import printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }

#4-3. 자바스크립트 웹 개발 기본기
\*1-1. 이번 토픽에서 배울 내용
웹브라우저와 서버 사이의 통신

\*1-2. fetch 함수 사용해보기
fetch('https://www.google.com') -> 파라미터로 넘어온 url로 request를 보낸다.
.then((response) => response.text()) -> 서버의 리스폰스가 오면 실행되는 함수 (콜백함수)
.then((result) => { console.log(result); });
then 메소드: 콜백을 등록하는 메소드

\*1-3. fetch 함수 살펴보기
request: 웹브라우저가 서버로 보낸 요청
response: 서버가 다시 보내준 응답
fetch: 서버로 request를 보내고 response를 받는 함수
then 메소드: 콜백을 등록하는 메소드

\*1-4. response 객체
fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => { console.log(result); });

이전 영상에서는 fetch 함수로 리퀘스트를 보내고, 리스폰스를 받아서 그 내용을 출력해봤습니다. fetch 함수의 실행 원리를 다시 정리하자면,

fetch 함수는 어떤 객체를 리턴하는데(Promise 객체, 챕터 3에서 배웁니다)
이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있습니다.
이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있는데요.
그런데 예리한 분들은 이 코드를 보고 이런 궁금증이 생겼을 수도 있습니다.

위 코드처럼 적지 않고 그냥

fetch('https://www.google.com')
.then((response) => { console.log(response); });

'이렇게 코드를 적어도 리스폰스의 내용을 출력할 수 있지 않나요?' 라는 의문을 가지셨을 수도 있는데요.

사실 이 response 파라미터로는 리스폰스의 실제 내용 자체가 넘어오는 게 아닙니다. response 파라미터에는, 리스폰스에 관한 각종 부가 정보들과, 실제 내용을 함께 갖고 있는 하나의 객체(object)가 넘어오는데요. 그래서 우리가 원하는 리스폰스의 실제 내용을 보려면,

fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => { console.log(result); });

이렇게 reponse 객체의 text라는 메소드를 호출해야 합니다. 그리고 이 text 메소드의 리턴값이 바로 리스폰스의 실제 내용입니다.(사실은 실제 내용을 갖고 있는 Promise 객체이지만, 더 자세한 내용은 챕터 3에서 알아봅시다)

\*1-5. 개발자 도구에 관해 알아야할 내용

1. 개발자 도구란?
   웹 브라우저에 내장된 개발자 도구는, 웹 브라우저가 내부적으로 어떤 동작을 하고 있는지 살펴보게 해주는 도구입니다. 사실 일반 사용자들에게는 필요 없는 도구이지만, 웹 페이지를 만드는 개발자 즉, '웹 프론트엔드 개발자'에게 이 개발자 도구는 정말 중요한 도구입니다. 왜냐하면 이 개발자 도구를 사용해서 자신이 작성한 코드를 브라우저가 어떻게 해석하고 실행하는지 자세하게 살펴볼 수 있기 때문인데요.

그래서 웹 프론트엔드 개발자가 되고 싶은 분이라면, 이 개발자 도구의 기초적인 사용법을 익혀두는 게 좋습니다. 하지만 이번 토픽은 개발자 도구 사용법에 관한 토픽은 아니기 때문에 사용법을 별도로 배우지는 않습니다. 혹시 크롬의 개발자 도구를 별도로 공부해보고 싶은 분은 구글에서 제공하는 공식 설명을 참조하세요. 해당 링크를 방문했을 때 모든 내용이 영어라서 보기가 힘들다면,

페이지 우측 상단의 버튼을 클릭해서 언어를 바꿔볼 수 있습니다. 참고로 개발자 도구 사용법을 몰라도 이번 토픽을 듣는 데는 아무 지장이 없습니다. 안심하세요.

2. 개발자 도구를 여는 단축키
   자바스크립트를 실행하는 방법에는 여러 가지가 있습니다. 보통은 HTML 태그에서 자바스크립트 파일을 로드해서 실행하지만, 이번 토픽에서는 보다 빠르고 직관적인 결과 확인을 위해서, 개발자 도구에서 자바스크립트를 실행할 겁니다. 따라서 웹 브라우저에서 매번 마우스로 개발자 도구를 여는 것보다는 그 단축키를 알아두는 것이 효율적인데요. 크롬에서 개발자 도구를 여는 단축키는 다음과 같습니다.

Mac : Command 키 + Option 키 + 알파벳 i 키
Windows : Ctrl 키 + Shift 키 + 알파벳 i 키
각자 자신의 환경에 맞는 단축키를 외우고, 활용해보세요.

3. 개발자 도구 위치 설정
   개발자 도구를 처음 여는 분들은 개발자 도구 창이 전체 화면의 오른쪽에 떠 있을 수도 있습니다.

만약 이전 영상에서 본 것처럼, 개발자 도구의 위치를 화면 하단으로 옮기고 싶다면, 위 이미지에서 보이는 빨간색 박스 안의 점 세 개 아이콘을 클릭하세요. 그럼 다음과 같이

개발자 도구의 위치를 설정하는 탭을 볼 수 있습니다. 여기서 여러분이 원하는 위치를 자유롭게 선택하시면 됩니다.

4. Console 탭의 출력 원리
   앞으로 여러분은 개발자 도구의 Console 탭에서 자바스크립트 코드를 실행하게 될 겁니다.

그런데 Console 탭의 출력 결과에 관해 여러분이 알아둬야 할 내용이 있습니다. 잠깐 Console 탭 화면에서, 어떤 숫자를 합한 값을 리턴해주는 add라는 함수를 정의해보겠습니다. 함수를 정의하고 엔터를 치면

이런 식으로 그 뒤에 undefined가 출력되는 것을 알 수 있습니다. 이 undefined는 왜 출력된 걸까요?
이번엔 잠깐 이 add 함수를 실행해봅시다.

이번에는 add 함수가 리턴한 값인 3이 잘 출력되었습니다. 자, 이번엔 Hello라는 단어를 출력해보겠습니다.

이번에는 Hello라는 단어가 출력되고, 그 밑에 또 undefined가 출력되었습니다. 이번에도 undefined가 등장했네요.
자, 그럼 이제 add 함수를 여러 번 호출해볼까요?

이렇게 코드를 여러 줄 연달아 작성하려면 Enter 말고 Shift + Enter를 사용하시면 됩니다.
실행 결과를 보니 가장 마지막 add 함수의 리턴값인 201만 출력되네요.

이때까지 본 것처럼 개발자 도구의 Console 탭은 해당 코드에서 최종적으로 리턴하는 값을 출력합니다. 만약 아무런 값도 리턴하지 않는 경우에는 undefined를 리턴한 것으로 간주하는데요. 그래서 위에서 봤던 것처럼 단순히

(1) add 함수를 선언하거나,
(2) Hello라는 문자열을 출력하는 코드는

어떤 값을 리턴하는 코드는 아니기 때문에 undefined를 리턴한 것으로 간주해서 undefined가 출력된 것입니다. 하지만

add(1, 2)
처럼 실제로 어떤 값을 리턴하는 코드인 경우에는 undefined가 아닌 실제 리턴값 3이 출력됩니다. 그리고 위에서 add 함수를 여러 번 실행한 경우처럼, 여러 개의 리턴 값이 존재하는 경우에는, 가장 마지막 코드의 리턴값을 출력합니다.

앞으로 Console 탭의 자바스크립트 코드를 실행하다보면,

(1) 개발자 도구가 출력하는 undefined 때문에 당황하거나,
(2) 나의 코드에서 출력한 undefined와, 개발자 도구가 출력한 undefined가 섞여서 혼란스러울 수도 있는데요.
그럴 때마다 방금 배운 내용에 유의하면서, Console 탭에서의 출력 결과를 해석하시면 됩니다.

\*1-6. 웹이란?
웹(web) - world wide web
웹브라우저를 통해 돌아다니는 가상의 연결망 세계
웹페이지에 적혀있는 텍스트: HyperText 다른 텍스트에 대한 참조를 갖고있는 텍스트 HTML

\*1-7. URL이란?
URL Uniform Resource Locator: 웹에 존재하는 특정 데이터를 나타내는 문자열
Resource: 웹에서 우리가 찾고자 하는 데이터를 전문 용어로는 '리소스(Resource)'라고 표현한다.
www.shopping.com -> 호스트(Host): 전 세계 서버 중 하나의 서버를 특정
/clothes/shirts -> 경로(Path): 서버에 있는 데이터 중 원하는 데이터를 특정
color=blue&size=m -> 쿼리(Query): 원하는 데이터에 관한 세부적인 요구사항

\*1-8. URL과 리퀘스트
이전 영상에서는 웹에 존재하는 수많은 데이터 중에서 원하는 데이터를 특정하기 위해 URL을 사용한다는 사실을 배웠습니다. 그리고 URL은 크게

호스트(host),
패스(path),
쿼리(query)
로 이루어져있다는 걸 배웠는데요.(다른 구성 요소들도 있지만 일단은 일반적으로 보게 되는 것들만 배워봅시다.)
이번 노트에서는 URL에 관한 또 다른 궁금증들을 해결해봅시다.

1. 전 URL을 직접 입력한 적이 거의 없는데요?
   이전 영상에서 URL의 의미와 구조에 대해 배울 때, 여러분은 이런 의문을 가졌을 수도 있습니다.

'내가 URL을 직접 입력한 적은 거의 없는데?'

하는 의문 말이죠.

굉장히 의미 있는 생각입니다. 여러분이 웹 서핑을 할 때를 생각해봅시다. 여러분은 보통 웹 브라우저의 주소창에 www.naver.com나 www.google.com 처럼, URL에서의 호스트(host) 부분까지만 입력하고, 어떤 서비스의 메인 페이지로 진입할 겁니다. 그리고 그 뒤로는 마우스로 화면에 있는 이미지나 버튼 등을 클릭할 뿐, 더이상 URL을 직접 입력할 일이 많지는 않은데요. 그 이유는 바로, 이미 여러분이 화면에서 클릭하는 버튼 등에 어느 URL로 새로운 리퀘스트를 보낼지, HTML 코드 또는 Javascript 코드로 다 작성이 되어있기 때문입니다. 예를 들어, 여러분이 화면에서 클릭하는 버튼은 이런 식의 HTML 코드로 작성되어 있습니다.

<a href="https://www.nazer.com/blogs/codeitOfficial/120"...>...</a>
<a href="/codeitCommunity/threads/731" ...>...</a>
(지금 두 번째 URL은 상대 URL입니다. 같은 서버 안에 존재하는 데이터의 경우 이렇게 path 이후의 부분만 표시해서 나타낼 수도 있습니다.)

우리가 웹 페이지에서 버튼을 클릭하면 지금 보이는 것 같은 a 태그의 href 속성에 적힌 URL 주소로 웹 브라우저가 알아서 리퀘스트를 보내서 리스폰스를 받아 새로운 웹 페이지를 로드합니다. 이런 식으로 웹 페이지에 미리 모든 것이 세팅되어 있기 때문에 여러분은 해당 서비스의 서버에서 요구하는 path의 형식, query의 형식을 알 필요가 없습니다. 다만 의식하지 않는 상태에서 우리는 계속 URL을 사용하고 있는 겁니다.

하지만 일반 사용자가 아닌 개발자라면, 이런 path에 관한 설계, query에 관한 설계를 직접 해야 하기 때문에 URL의 구조에 대해서 정확하게 알고 있어야 합니다.

2. 리퀘스트를 보내면 일어나는 일
   우리가 웹 브라우저의 주소창에 URL을 입력하고 엔터를 치면, 실제로 어떤 일이 이루어지는 걸까요?
   잠깐 아래 그림을 봅시다.

위 이미지에서 왼쪽 아이콘은 웹 브라우저를 나타내고, 오른쪽은 codeitshopping이라고 하는 서비스의 서버를 나타낸다고 가정해봅시다. 만약 우리가 위와 같은 URL을 입력하고 엔터를 치면 다음과 같은 일들이 순차적으로 발생합니다.

(1) 웹 브라우저는 URL에서 호스트(host, 위 그림에서 www.codeitshopping.com에 해당하는 부분) 부분을 보고, 전 세계의 수많은 서버들 중에서 정확히 어느 서버와 통신을 해야 하는지를 찾습니다. 이때 호스트 부분에 적힌 www.codeitshopping.com 같은 것을 도메인 네임(Domain Name)이라고 하는데요. 특정 서버를, 외우기 어려운 IP 주소가 아니라 외우기 쉬운 문자열로 나타낸 것이 바로 도메인 네임입니다. 그럼 어떻게 웹 브라우저는 도메인 네임만으로 특정 서버를 식별할 수 있는 걸까요? 이를 위해서는 Domain Name Resolution이라고 하는 작업을 수행해야 합니다. 이 작업을 수행하면 해당 도메인 네임이 나타내는 특정 서버를 식별할 수 있는데요. 혹시 Domain Name Resolution이 뭔지 궁금한 분들은 코드잇의 또 다른 토픽에 있는 '도메인 네임과 IP 주소' 노트를 참조하세요.

(2) (1)에서 어떤 서버와 통신해야 하는지를 식별하고 나면, 웹 브라우저는 해당 서버로 리퀘스트를 보냅니다. 이때 URL에서 path 이후의 부분들(보라색 표시한 부분, path와 query)을 리퀘스트에 담아서 보냅니다.

(3) 리퀘스트를 받은 서버는 리퀘스트에 담긴 path 이후의 부분들을 보고, 그것이 의미하는 데이터를 찾고, 찾은 결과를 리스폰스에 담아서 보내줍니다.

(4) 그럼 웹 브라우저는 받은 리스폰스의 내용을 갖고 사용자에게 보여줍니다. 이때 리스폰스의 내용이 HTML 코드, Javascript 코드 등에 해당하면 그에 맞는 예쁜 화면을 사용자에게 그려서 보여주는 것이구요. 리스폰스의 내용에는 다른 종류도 많은데요. 이건 챕터 2에서 배워봅시다.

\*1-9. HTTP란?
https -> 스킴(Scheme): 프로토콜의 이름
프로토콜(Protocol): 통신을 하는 두 주체가 지켜야 할 통신 규약
http -> HyperText Transfer Protocol
HyperText: 다른 텍스트에 대한 참조를 갖고 있는 텍스트
https -> HyperText Transfer Protocol Secure: http에 보안성이 더해짐

\*1-10. 한 번의 접속, 여러 번의 Request
우리가 어떤 웹 페이지를 보기 위해 URL을 입력하고 엔터를 치면 보통 한 번 이상의 리퀘스트와 리스폰스가 오고 갑니다. 딱 한 번의 리퀘스트와 리스폰스만 오고 가면 될 것 같은데, 이게 무슨 말일까요? 확인해보겠습니다.

저는 지금 크롬의 개발자 도구를 열어두었습니다.

그리고 개발자 도구에서 Network 탭이라고 하는 걸 클릭했는데요. 이 Network 탭에서는 브라우저가 구체적으로 어떻게 생긴 리퀘스트를 보내고, 어떻게 생긴 리스폰스를 받는지를 보여줍니다. 이 상태에서 웹 브라우저를 새로고침해보겠습니다.

그럼 구글 메인 페이지로 재접속하게 되고, 이제 Network 탭에 여러 개의 줄(row)들이 뜨는데요. 이때 각각의 한 줄이, 하나의 '리퀘스트-리스폰스' 쌍이라고 보시면 됩니다. 전 딱 한 번 엔터를 쳤을 뿐인데 정말 많은 수의 리퀘스트와 리스폰스가 오고 갔죠? 화면 하단을 보면 총 19번의 리퀘스트가 전송된 것을 알 수 있는데요. 왜 이런 일이 발생하는 걸까요?

사실 웹 브라우저가 처음으로 리퀘스트를 보내고, 서버로부터 받는 첫 리스폰스의 내용만으로 온전한 화면을 그릴 수 있는 경우는 많지 않습니다. 보통은 받은 첫 리스폰스의 내용에 적힌 '추가적으로 필요한 데이터'들을 재차 요청해야 하는 것이 더 일반적입니다. 예를 들어, 이런 식의 HTML 코드가 첫 리스폰스의 내용으로 왔다고 해봅시다.

<html>
<head></head>
<body>
    ...
    <div>
        <img src="https://www.server_A.com/a/b/exmaple.png".../>
    </div>
  ...
<script src="http://www.server_B.com/c/d/main.js"></script>
</body>
</html>
웹 브라우저는 당장 이 코드만으로는 완벽한 화면을 그릴 수 없습니다. 왜냐하면 새롭게 리퀘스트를 보내서 가져와야할 것들이 존재하기 때문이죠.

예를 들어, 지금 여기서 이 img 태그의 src 속성에 있는 이미지를 그리려면

<img src="https://www.server_A.com/a/b/exmaple.png".../>
img 태그의 src 속성에 적힌 URL로 다시 리퀘스트를 보내서 example.png에 해당하는 이미지를 받아와야 합니다.

그리고

<script src="http://www.server_B.com/c/d/main.js"></script>

이 script 태그의 src 속성에 적힌 URL로도 리퀘스트를 보내서 main.js라는 자바스크립트 파일을 받아와야 하구요.

벌써 이렇게 2번의 추가적인 리퀘스트가 필요한 겁니다.

이런 식으로 보통 브라우저가 하나의 페이지를 그릴 때는 첫 리스폰스의 내용 안에서 또다시 요구되는, 여러 가지 다른 것들을 구하기 위해 다시 여러 개의 리퀘스트를 보내는 것이 일반적입니다. 게다가 그렇게 또 받은 리스폰스의 내용에 따라 또 새로운 리퀘스트를 보내야 할 수도 있습니다. 바로 이런 원리 때문에 여러분이 어떤 웹 페이지를 딱 한번 접속했다고 해도 그 사이에는 수많은 리퀘스트와 리스폰스가 발생하는 겁니다.

예를 들어, 지금 Network 탭에 보이는 하나의 줄(하나의 '리퀘스트-리스폰스 쌍')을 클릭해보면

https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4340&directory=Untitled%202.png&name=Untitled+2.png

이렇게 Google 로고 이미지를 받기 위해 추가적인 리퀘스트를 보내고, 이 이미지를 받아온 것을 확인할 수 있습니다.

이렇게 우리가 웹 브라우저로 특정 페이지에 접속할 때, 보통 한 번 이상의 리퀘스트-리스폰스가 오고간다는 사실, 잘 기억하세요.

\*2-1. JSON이란?
JSON JavaScript Object Nocation: 어떤 정보를 교환할 때 사용하기 위해서 만들어짐. 자바스크립트 언어의 문법을 빌려서 만들어진 데이터 포맷.

\*2-2. 자바스크립트 객체 표기법과 JSON 문법의 차이
이 두 가지가 비슷하기는 하지만 완벽하게 동일한 것은 아닙니다.

1. JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한이 있습니다.
   (1) JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표(")로 감싸줘야 합니다.
   잠깐 자바스크립트 코드로 member라는 객체를 생성해볼까요?

const member = {
name: 'Michael Kim',
height: 180,
weight: 70,
hobbies: ['Basketball', 'Listening to music']
};
자바스크립트에는 객체를 생성할 수 있는 여러 가지 방법이 있는데요. 그중 한 가지는 이런 식으로 중괄호('{ }') 안에 객체의 프로퍼티의 이름(키)과 값(밸류)쌍을 순서대로 나열해서 생성하는 방법입니다. 지금 보이는 표기를 Object Literal이라고 하는데요. Object Literal을 쓸 때는 문법에 약간의 유연함이 있습니다. 저는 지금 member 객체의 각 프로퍼티의 이름인 name, height, weight, hobbies에 큰따옴표를 붙이지 않았는데요. Object Literal에서는 이렇게 프로퍼티의 이름에 큰따옴표를 붙이지 않아도 되고,

const member = {
"name": 'Michael Kim',
"height": 180,
"weight": 70,
"hobbies": ['Basketball', 'Listening to music']
};
이렇게 큰따옴표를 붙여도 됩니다.

하지만 JSON의 경우에는 프로퍼티의 이름에 반드시 큰따옴표를 붙여줘야만 합니다.

{
"name":"Michael Kim",
"height":180,
"weight":70,
"hobbies":["Basketball", "Listening to music"]
}
지금 각 프로퍼티의 이름이 모두 큰따옴표로 둘러싸여 있죠? 이렇게 JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표로 감싸주어야 합니다. 큰따옴표로 감싸주지 않으면 JSON을 처리하려고 할 때 에러가 납니다.

(2) JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 합니다.
const member = {
"name": 'Michael Kim',
"height": 180,
"weight": 70,
"hobbies": ['Basketball', 'Listening to music']
};
잠깐 member 객체를 다시 볼게요. 지금 name 프로퍼티의 값으로 'Michael Kim'이라는 문자열이 들어가 있죠? 자바스크립트에서는 문자열을 나타낼 때, 이렇게 작은따옴표(')를 써도 되고, 큰따옴표(")를 써서 "Michael Kim"이라고 써도 됩니다.

하지만 JSON에서는 문자열 값을

{
"name":"Michael Kim",
"height":180,
"weight":70,
"hobbies":["Basketball", "Listening to music"]
}
지금 보이는 "Michael Kim", "Basketball", "Listening to music"처럼 항상 큰따옴표로 감싸서 적어줘야만 합니다.

2. JSON에서는 표현할 수 없는 값들이 있습니다.
   자바스크립트에서는 프로퍼티의 값으로 사용할 수 있는 undefined, NaN, Infinity 등을 JSON에서는 사용할 수 없습니다. 참고로, JSON은 비록 자바스크립트로부터 비롯된 데이터 포맷이지만, 그 탄생 목적은 언어나 환경에 종속되지 않고, 언제 어디서든 사용할 수 있는 데이터 포맷이 되는 것이었습니다. 따라서 자바스크립트의 문법에서만 유효한 개념을 JSON에서는 나타낼 수 없다는 것은 어찌 보면 당연한 결과입니다.

3. JSON에는 주석을 추가할 수 없습니다.
   JSON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없습니다.

자, 이때까지 자바스크립트의 문법과 JSON 문법 간의 미세한 차이를 배워봤는데요. 이 둘은 일반적으로 호환되는 것이 맞지만, 위에서 살펴본 세부적인 차이가 있다는 점을 알아두는 게 좋습니다. 이런 차이가 있다는 것을 모르면, 나중에 실무에서 JSON 데이터를 처리하다가 에러가 생겨도, 그 이유를 이해할 수 없기 때문입니다.

\*2-3. JSON 데이터를 객체로 변환하기
JSON의 타입 -> string
JSON: JSON 데이터를 다루기 위해 사용되는 자바스크립트의 기본 객체
parse 메소드: string 타입의 JSON 데이터를 자바스크립트 객체로 변환할 수 있다.

\*2-5. 메소드의 의미
요청 (Request)의 4가지 종류

1. 데이터 조회 GET
2. 데이터 추가 POST
3. 데이터 수정 PUT
4. 데이터 삭제 DELETE

메소드(Method)

만약 서버가 데이터베이스를 사용한다면 CRUD 작업을 하게 될 것이다.
CRUD란 Create-Read-Update-Delete의 약자로 데이터베이스 관점에서 데이터에 관한 처리를 나타낸 합성어이다.

메소드 데이터 처리
GET READ
POST CREATE
PUT UPDATE
DELETE DELETE

\*2-6. Request의 Head와 Body
Request
Head: Request에 대한 부가 정보가 담긴 부분. 메소드(Method) 값이 담김.
Body: 실제 데이터를 담는 부분.

post, put -> Body가 필요함
get, delete -> Body가 필요하지 않음

headers: head안에 존재하는 하나 하나의 키와 값의 쌍

Method 값은 request의 head에 존재함.

\*2-7. 앞으로 사용할 URL 미리보기
이제 우리는 웹 브라우저가 서버로 보내는 리퀘스트의 종류에 크게 다음과 같은 4가지 종류가 있다는 걸 배웠습니다.

기존 데이터를 조회하는 리퀘스트 - GET
새 데이터를 추가하는 리퀘스트 - POST
기존 데이터를 수정하는 리퀘스트 - PUT
기존 데이터를 삭제하는 리퀘스트 - DELETE
그리고 각 리퀘스트의 종류에 따라 리퀘스트의 헤드에, 오른쪽에 써있는 각각의 method(메소드)를 설정해야 한다는 것도 배웠는데요.

다음 영상부터는 이때까지 우리가 해온 GET 리퀘스트 뿐만 아니라 POST 리퀘스트, PUT 리퀘스트, DELETE 리퀘스트도 차례대로 직접 수행해볼 겁니다. 그리고 이를 위해서 코드잇에서 제공하는 다음과 같은 학습용 URL을 사용할 건데요.

학습용 URL : https://learn.codeit.kr/api/members
이 URL을 사용해서 다음과 같은 작업들을 순차적으로 진행해볼 겁니다.

(1) 전체 직원 정보 조회 - GET
(2) 특정 직원 정보 조회 - GET
(3) 새 직원 정보 추가 - POST
(4) 기존 직원 정보 수정 - PUT
(5) 기존 직원 정보 삭제 - DELETE

각 작업을 위해 리퀘스트의 헤드에 무슨 메소드를 설정해야하는지 기억해두세요.

그리고 마지막으로 한 가지 더 기억해야할 중요한 내용이 있습니다. 그건 위의 5가지 작업을 수행할 때 사용하는 URL의 유형에 크게 2가지가 있다는 점입니다.

위의 5가지 작업 중

(2) 특정 직원 정보 조회 - GET
(4) 기존 직원 정보 수정 - PUT
(5) 기존 직원 정보 삭제 - DELETE

이 작업들을 수행할 때는 작업의 대상이 되는 직원 정보를 특정할 수 있도록 URL 끝에 아래와 같은 고유 식별자를 붙여줘야 합니다. (직원의 id 값입니다.)

https://learn.codeit.kr/api/members/3
지금 이 URL은 3번 직원 정보에 대한 작업을 수행하겠다는 뜻입니다. 이렇게 작업의 종류에 따라 메소드뿐만 아니라 URL도 적절하게 변경해가며 써줘야 합니다.

그리고 나머지 작업인

(1) 전체 직원 정보 조회 - GET
(3) 새 직원 정보 추가 - POST

들은 특정 직원 정보를 대상으로 수행하는 작업이 아니라 아니라 전체 직원 정보에 대해서 수행하는 작업이기 때문에

https://learn.codeit.kr/api/members
/members로 끝나는 원래의 URL을 그대로 사용하면 됩니다.

\*2-8. POST request 보내기
기존 데이터를 조회하는 리퀘스트 - GET
새 데이터를 추가하는 리퀘스트 - POST

1. GET 리퀘스트 보내기
   fetch('https://learn.codeit.kr/api/members/3', {
   })
   .then((response) => response.text())
   .then((result) => { console.log(result); });

2. POST 리퀘스트 보내기
   const newMember = {
   name: 'Jerry',
   email: 'jerry@codeitmall.kr',
   department: 'engineering',
   };

fetch('https://learn.codeit.kr/api/members', {
method: 'POST',
body: JSON.stringify(newMember),
})
.then((response) => response.text())
.then((result) => { console.log(result); });

pare 메소드: string 타입의 JSON 데이터를 자바스크립트 데이터로 변환한다.
stringify 메소드: 자바스크립트 객체를 string 타입의 JSON 데이터로 변환한다.

\*2-9. POST request 살펴보기
이전 영상에서는 처음으로 GET 리퀘스트가 아닌, POST 리퀘스트를 보내봤습니다. 우리는 리퀘스트의 헤드와 바디에 대해서 배울 때 GET 리퀘스트를 가지고 배웠는데요. POST 리퀘스트의 경우에는 리퀘스트의 헤드와 바디가 어떻게 생겼는지 살펴봅시다. 개발자 도구의 Network 탭을 사용해서 확인해볼게요.
이렇게 이전 영상에서처럼 새 직원 정보를 POST 리퀘스트로 추가하고 Network 탭을 클릭할게요.
그리고나면 뜨게 되는 화면에서 제가 보낸 POST 리퀘스트와 받은 리스폰스 쌍을 의미하는 한 줄(members)을 클릭할게요. 그다음 오른쪽 화면을 보면 지금 Request Method 부분에 POST라고 써있는게 보입니다.
자, 그리고 이번에는 GET 리퀘스트 때는 보지 못했던 바디도 확인해보겠습니다. 스크롤을 좀 더 내려보면
이렇게 Request Payload라고 쓰인 부분이 바로 리퀘스트의 바디 부분입니다. 새 직원 정보를 나타내는 JSON 데이터가 잘 들어가 있죠? GET 리퀘스트 때는 없었던 바디의 내용을 POST 리퀘스트에서는 볼 수 있네요.
그리고 Response 탭을 눌러보면,
이렇게 실제로 추가된 직원 정보가 JSON 데이터로 잘 온 것을 알 수 있습니다.
앞으로 여러분도 자바스크립트로 웹 통신을 할 때, 이렇게 개발자 도구로 리퀘스트와 리스폰스의 모습을 종종 살펴보세요. 그럼 현재 무슨 일이 이루어지고 있는지 훨씬 실감나게 느낄 수 있을 겁니다.

\*2-10. PUT request, DELETE request 보내기
기존 데이터를 수정하는 리퀘스트 - PUT
기존 데이터를 삭제하는 리퀘스트 - DELETE

1. PUT request 보내기
   const member = {
   name: 'Alice',
   email: 'alice@codeitmall.kr',
   department: 'marketing',
   };

fetch('https://learn.codeit.kr/api/members/2', {
method: 'PUT',
body: JSON.stringify(member),
})
.then((response) => response.text())
.then((result) => { console.log(result); });

2. DELETE request 보내기
   fetch('https://learn.codeit.kr/api/members/2', {
   method: 'DELETE',
   })
   .then((response) => response.text())
   .then((result) => { console.log(result); });

\*2-11. 모범적인 Web API, REST API
우리는 이제 웹 브라우저가 리퀘스트를 보낼 때

(1) 어느 URL로 리퀘스트를 보내는지
(2) 무슨 메소드(GET, POST, PUT, DELETE 등)가 그 헤드에 설정되어있는지가

중요하다는 것을 배웠습니다.

그런데 우리가 어떤 리퀘스트를 보냈을 때, 무슨 리스폰스를 받는지는 어떻게 설계되는 걸까요? 개발자들이 실제로 개발을 할 때 이 부분을 어떻게 만들고 있는지 이번 노트에서 배워보겠습니다.

1. Web API
   우리가 어떤 리퀘스트를 보냈을 때, 무슨 리스폰스를 받는지는 모두 그 서비스를 만드는 개발자들이 정하는 부분입니다. 잠깐 실제 개발 현장에서 일어나는 이야기를 해볼게요. 개발자에는 크게 두 가지 종류가 있습니다. 첫 번째는 사용자가 직접 서비스 화면을 보는 웹 페이지나 앱 등을 만드는 프론트엔드(Front-end) 개발자, 두 번째는 웹 브라우저나 앱이 보내는 리퀘스트를 받아서 적절한 처리를 한 후 리스폰스를 주는 서버의 프로그램을 만드는 백엔드(Back-end) 개발자, 이 두 가지인데요.

하나의 서비스를 만들 때는 프론트엔드 개발자들과 백엔드 개발자들이 모여 '프론트엔드에서 이 URL로 이렇게 생긴 리퀘스트를 보내면, 백엔드에서 이런 처리를 하고 이런 리스폰스를 보내주는 것으로 정합시다'와 같은 논의를 하고, 이런 내용들을 정리한 후에 개발을 시작합니다.

이것을 'Web API 설계'라고 하는데요. API란 Application Programming Interface의 약자로, 원래는 '개발할 때 사용할 수 있도록 특정 라이브러리나 플랫폼 등이 제공하는 데이터나 함수 등'을 의미합니다. 웹 개발에서는 어느 URL로 어떤 리퀘스트를 보냈을 때, 무슨 처리가 수행되고 어떤 리스폰스가 오는지에 관해 미리 정해진 규격을 Web API라고도 하는데요.

Web API를 설계한다는 것은 서비스에서 사용될 모든 URL들을 나열하고, 각각의 URL에 관한 예상 리퀘스트와 리스폰스의 내용을 정리한다는 뜻입니다. 예를 들어, 이전 영상에서 사용한 학습용 URL(https://learn.codeit.kr/api/members)에서 직원 정보 추가 기능을 설계한다면 다음과 같이 할 수 있는 겁니다.

...

3. 직원 정보 추가

https://learn.codeit.kr/api/members

(1) Request

- Head
  Method : POST
  ...

- Body
  {
  "name": "Jerry",
  "email: "jerry@codeitshopping.kr",
  "department": "engineering",
  }
  ...

(2) Response
Success인 경우 :

- Head
  ...
- Body
  {
  "id": "[부여된 고유 식별자 값]",
  "name": "Jerry",
  "email": "jerry@codeshopping.kr"
  "department": "engineering",
  }
  Fail인 경우 :
  ...
  이렇게 해당 서비스에서 제공되는 각 URL에, 어떤 리퀘스트를 보내면, 서버는 어떤 리스폰스를 보내야 하는지를 일일이 설계하는 것이 Web API 설계인 겁니다. 물론 실무에서는 지금 보이는 예시보다 훨씬 체계적이고 단정한 방식으로, 상용 툴 등을 사용해서 정리하지만 일단은 이해 차원에서 보여드렸습니다. 이런 식으로 Web API가 설계되고 나면, 그때 프론트엔드/백엔드 개발자들이 해당 설계에 맞게 각자 코드를 작성하기 시작하는 겁니다. 물론 설계와 개발이 동시에 진행되기도 하고, 설계 내용이 중간에 수정되기도 합니다.

오늘날 많은 회사 내의 개발팀은 이런 식으로 Web API를 설계하고 웹 서비스를 만듭니다. 그런데 문제가 하나 있습니다. 그건 바로 Web API는 어떻게 설계해도 동작하는 데는 아무런 지장이 없다는 문제입니다.

이전 영상들에서 저는 직원 정보를 추가하기 위해

(1) 'https://learn.codeit.kr/api/members' URL로  
(2) 리퀘스트의 헤드에 POST 메소드를 설정하고,
(3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

는 내용의 설계를 했습니다.

그런데 어떤 회사는 같은 기능을 이런 식으로 설계할 수도 있습니다.

(1) 'https://learn.codeit.kr/api/members' URL로
(2) 리퀘스트의 헤더에 GET 메소드를 설정하고,
(3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

어느 방식으로 설계해도 서비스가 동작하는 데는 아무런 문제가 없습니다. 하지만 기능적으로 아무런 문제가 없다고 해도 Web API를 아무렇게나 설계해도 되는 것은 아닙니다. 사실 Web API가 잘 설계되었는지에 관한 기준으로는 보통 REST API라는 기준이 사용되고 있는데요. 많은 개발자들이 Web API를 개발할 때 이 REST API를 준수하기 위해 노력하고 있습니다. 이게 뭔지 한번 살펴봅시다.

2. REST API 이야기
   REST API는 오늘날 많은 웹 개발자들이 Web API 설계를 할 때, 준수하기 위해 노력하는 일종의 가이드라인입니다. REST API를 이해하기 위해서는 일단 REST architecture가 무엇인지부터 알아야 하는데요. 일단 REST architecture에 대해 설명하겠습니다.

REST architecture란 미국의 컴퓨터 과학자인 Roy Fielding이 본인의 박사 논문 'Architectural Styles and the Design of Network-based Software Architectures'에서 제시한 개념인데요. 그는 웹이 갖추어야 할 이상적인 아키텍처(구조)로 REST architecture라는 개념을 제시했습니다. 여기서 REST는 Representational State Transfer(표현적인 상태 이전)의 줄임말로, 해석하면 '표현적인, 상태 이전'이라는 뜻입니다. 이게 무슨 말일까요? 이 용어는 Roy Fielding이 고안한 용어인데요. 지금 여러분이 웹 서핑을 할 때를 생각해보세요. 만약 웹을 하나의 거대한 컴퓨터 프로그램이라고 생각한다면, 각각의 웹 페이지는 그 프로그램의 내부 상태를 나타낸다고 할 수 있습니다. 그렇다면 우리가 웹 페이지들을 계속 옮겨 다니면서 보게 되는 내용은, 웹이라는 프로그램의 매번 새로운 상태를 나타내는 표현이라고 할 수 있는데요. 그래서 이것을 '표현적인, 상태 이전'이라고 하는 겁니다. 조금 추상적인 느낌이지만 이해는 되시죠?

그럼 REST architecture가 되기 위한 조건에는 어떤 것들이 있을까요? 다음과 같은 6가지 기준을 충족하면 REST architecture로 인정됩니다.

Client-Server
Stateless
Cache
Uniform Interface
Layered System
Code on Demand
각 기준에 대해 간략하게 설명해보자면 REST architecture는,

(Client-Server) Client-Server 구조를 통해 양측의 관심사를 분리해야 합니다. 현재 토픽에서는 웹 브라우저가 실행되고 있는 컴퓨터가 Client, 서비스를 제공하는 컴퓨터가 Server에 해당하는데요. 이렇게 분리를 해놓으면 Client 측은 사용자에게 어떻게 하면 더 좋은 화면을 보여줄지, 다양한 기기에 어떻게 적절하게 대처해야할지 등의 문제에 집중할 수 있고, Server 측은 서비스에 적합한 구조, 확장 가능한 구조를 어떻게 구축할 것인지 등의 문제에 집중할 수 있습니다. 이렇게 각자가 서로를 신경쓰지 않고 독립적으로 운영될 수 있는 겁니다.

(Stateless) Client가 보낸 각 리퀘스트에 관해서 Server는 그 어떤 맥락(context)도 저장하지 않습니다. 즉, 매 리퀘스트는 각각 독립적인 것으로 취급된다는 뜻입니다. 이 때문에 리퀘스트에는 항상 필요한 모든 정보가 담겨야합니다.

(Cache) Cache를 활용해서 네트워크 비용을 절감해야 합니다. Server는 리스폰스에, Client가 리스폰스를 재활용해도 되는지 여부(Cacheable)를 담아서 보내야합니다.

(Uniform Interface) Client가 Server와 통신하는 인터페이스는 다음과 같은 하위 조건 4가지를 준수해야 합니다. 이 조건이 REST API와 연관이 깊은 조건입니다. 어떤 4가지 하위 조건들이 있는지 살펴봅시다.

(4-1) identification of resources : 리소스(resource)는 웹상에 존재하는 데이터를 나타내는 용어인데요. 저도 이번 노트에서는 리소스라는 용어를 사용하겠습니다. 이것은 리소스(resource)를 URI(Uniform Resource Identifier)로 식별할 수 있어야 한다는 조건입니다. URI는 URL의 상위 개념으로 일단 지금은 URL이라고 생각하셔도 큰 무리는 없습니다.

(4-2) manipulation of resources through representations : Client와 Server는 둘 다 리소스를 직접적으로 다루는 게 아니라 리소스의 '표현(representations)'을 다뤄야 합니다. 예를 들어, Server에 '오늘 날씨'(/today/weather)라는 리소스를 요청했을 때, 어떤 Client는 HTML 파일을 받을 수도 있고, 어떤 Client는 이미지 파일인 PNG 파일을 받도록 구현할 수도 있는데요. 이때 HTML 파일과 PNG 파일 같은 것들이 바로 리소스의 '표현'입니다. 즉, 동일한 리소스라도 여러 개의 표현이 있을 수 있다는 뜻입니다. 사실, 리소스는 웹에 존재하는 특정 데이터를 나타내는 추상적인 개념입니다. 실제로 우리가 다루게 되는 것은 리소스의 표현들뿐인데요. 이렇게 '리소스'와 '리소스의 표현'이라는 개념 2개를 서로 엄격하게 구분하는 것이 REST architecture의 특징입니다.

(4-3) self-descriptive messages : self-descriptive는 '자기설명적인'이라는 뜻인데요. 위에서 살펴본 2. Stateless 조건 때문에 Client는 매 리퀘스트마다 필요한 모든 정보를 담아서 전송해야 합니다. 그리고 이때 Client의 리퀘스트와 Server의 리스폰스 모두 그 자체에 있는 정보만으로 모든 것을 해석할 수 있어야 한다는 뜻입니다.

(4-4) hypermedia as the engine of application state : REST architecture는 웹이 갖추어야 할 이상적인 아키텍처라고 했죠? 이때 '웹'을 좀더 어려운 말로 풀어써 보자면 '분산 하이퍼미디어 시스템'(Distributed Hypermedia System)이라고도 할 수 있는데요. 여기서 하이퍼미디어(Hypermedia)는 하이퍼텍스트(Hypertext)처럼 서로 연결된 '문서'에 국한된 것이 아니라 이미지, 소리, 영상 등까지도 모두 포괄하는 더 넓은 개념의 단어입니다. 즉, 웹은 수많은 컴퓨터에 하이퍼미디어들이 분산되어 있는 형태이기 때문에, '분산 하이퍼미디어 시스템'에 해당합니다. 이 조건은 웹을 하나의 프로그램으로 간주했을 때, Server의 리스폰스에는 현재 상태에서 다른 상태로 이전할 수 있는 링크를 포함하고 있어야 한다는 조건입니다. 즉, 리스폰스에는 리소스의 표현, 각종 메타 정보들뿐만 아니라 계속 새로운 상태로 넘어갈 수 있도록 해주는 링크들도 포함되어 있어야 한다는 거죠.

자, 여기까지가 Uniform Interface의 4가지 하위 조건입니다. 사실, 오늘날 우리가 Web API를 설계할 때 위의 하위 조건들을 모두 제대로 이해하고 준수하는 것은 쉽지 않은 일인데요. 일단 아직 남은 5, 6번 조건들을 마저 살펴보고, 4번에 관해 그나마 우리가 실천할 수 있는 규칙들을 아래에서 살펴봅시다.

(Layered System) Client와 Server 사이에는 프록시(proxy), 게이트웨이(gateway)와 같은 중간 매개 요소를 두고, 보안, 로드 밸런싱 등을 수행할 수 있어야 합니다. 이를 통해 Client와 Server 사이에는 계층형 층(hierarchical layers)들이 형성됩니다.

(Code-On-Demand) Client는 받아서 바로 실행할 수 있는 applet이나 script 파일을 Server로부터 받을 수 있어야 합니다. 이 조건은 Optional한 조건으로 REST architecture가 되기 위해 이 조건이 반드시 만족될 필요는 없습니다.

자, 이때까지 REST architecture가 되기 위해 충족해야 하는 조건들을 배웠는데요. 이해가 잘 되는 것도 있고 조금 어려운 것도 있죠? 사실 이 내용은 다소 이론적이기도 하고, 웹에 대해 좀 더 많이 공부해야 이해할 수 있는 것들도 있기 때문에 일단은 그냥 넘어가셔도 괜찮습니다.

하지만 기억해야 할 사실은, REST API는 바로 이런 REST architecture에 부합하는 API를 의미한다는 사실입니다. 참고로 이런 REST API를 사용하는 웹 서비스를 RESTful 서비스라고 합니다. 그렇다면 구체적으로 어떤 식으로 Web API를 설계해야 REST API가 될 수 있는 걸까요? 사실 Roy Fielding의 논문에는 이것에 관한 구체적이고 실천적인 내용들은 제시되어 있지 않습니다. 하지만 많은 개발자들의 경험과 논의를 통해 형성된 사실상의(de facto) 규칙들이 존재하는데요.

우리는 그중에서도 조건 4. Uniform Interface의 하위 조건인 (4-1) identificaton of resources 에 관해서 특히 개발자들이 강조하는 규칙, 2가지만 배워보겠습니다.

(1) URL은 리소스를 나타내기 위해서만 사용하고, 리소스에 대한 처리는 메소드로 표현해야 합니다.
이 규칙은 조금 다르게 설명하자면, URL에서 리소스에 대한 처리를 드러내면 안 된다는 규칙인데요. 이게 무슨 말인지 1. Web API 부분에서 마지막에 언급했던 예시를 통해 이해해보겠습니다.

예를 들어, 새 직원 정보를 추가하기 위해서

(1) 'https://learn.codeit.kr/api/members' URL로  
(2) 리퀘스트의 헤드에 POST 메소드를 설정하고,
(3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

고 하는 경우는, URL은 리소스만 나타내고, 리소스에 대한 처리(리소스 추가)는 메소드 값인 POST로 나타냈기 때문에 이 규칙을 준수한 것입니다.

하지만

(1) 'https://learn.codeit.kr/api/members/add' URL로
(2) 리퀘스트의 헤더에 GET 메소드를 설정하고,
(3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

고 하는 이 경우는 URL에서 리소스뿐만 아니라, 해당 리소스에 대한 처리(add, 추가하다)까지도 나타내고 있습니다. 그리고 정작 메소드 값으로는 리소스 추가가 아닌 리소스 조회를 의미하는 GET을 설정했기 때문에 이 규칙을 어긴 것입니다.

URL은 리소스를 나타내는 용도로만 사용하고, 리소스에 대한 처리는 메소드로 표현해야 한다는 사실, 꼭 기억하세요!

(2) 도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표시합니다.
또 다른 규칙 하나를 살펴볼까요? 이 규칙은 URL로 리소스를 나타내는 방식에 관한 규칙인데요. URL에서는

https://www.soccer.com/europe/teams/manchester-united/players/pogba
이런 식으로 path 부분에서 특정 리소스(pogba, 축구 선수 포그바의 정보)를 나타낼 때 슬래시(/)를 사용해서 계층적인 형태로 나타냅니다. 지금 위 URL의 path 부분을 보면 '유럽의', '축구팀들 중에서', '맨체스터 유나이티드 팀의', '선수들 중에서', '포그바'라는 선수의 정보를 의미하는 리소스라는 걸 한눈에 알 수 있는데요. 이렇게 계층적 관계를 잘 나타내면, URL만으로 무슨 리소스를 의미하는지를 누구나 쉽게 이해할 수 있습니다. Web API를 설계할 때는 이렇게 가독성 좋고, 이해하기 쉬운 URL을 설계해야 하는데요. 그런데 이때 지켜야 할 규칙이 있습니다.

사실 리소스는 그 특징에 따라 여러 종류로 나눠볼 수 있습니다. 이 중에서 우리는 '컬렉션(collection)'과 '도큐먼트(document)'를 배울 건데요. 보통 우리가 하나의 객체로 표현할 수 있는 리소스를 '도큐먼트'라고 합니다. 그리고 여러 개의 '도큐먼트'를 담을 수 있는 리소스를 '컬렉션'이라고 하는데요. 쉽게 비유하자면, 도큐먼트는 하나의 '파일', 컬렉션은 여러 '파일'들을 담을 수 있는 하나의 '디렉토리'에 해당하는 개념입니다.

그리고 이에 관한 규칙은 바로, URL에서 '도큐먼트'를 나타낼 때는 단수형 명사를, '컬렉션'을 나타낼 때는 복수형 명사를 사용해야 한다는 규칙입니다.

지금 위 URL에서 europe, manchester-united, pogba가 '도큐먼트'에 해당하고, teams, players가 '컬렉션'에 해당합니다. 도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표현한 것이 잘 보이죠?

이 규칙을 잠깐 이전 영상의 내용과 연관 지어 생각해볼까요? 예를 들어, 제가

전체 직원 정보 조회 - GET
새 직원 정보 추가 - POST
이 작업들을 수행하기 위해 사용했던 'https://learn.codeit.kr/api/members' URL에서도
직원 전체를 의미하는 members는 이렇게 복수 명사를 사용했다는 것을 알 수 있습니다. members는 member들을 담을 수 있는 컬렉션에 해당하는 개념이기 때문입니다.

그리고 제가

특정 직원 정보 조회 - GET
기존 직원 정보 수정 - PUT
기존 직원 정보 삭제 - DELETE
이 작업들을 수행하기 위해 사용했던 https://learn.codeit.kr/api/members/3 URL에서는
도큐먼트를 나타내기 위해 단수 명사 대신 직원 고유 식별자인 id 값을 썼는데요. 이렇게 숫자를 쓰는 경우에는 단복수 문제가 없겠죠?

'도큐먼트', '컬렉션' 개념을 우리가 배운 메소드 종류와 연결해서 모든 경우의 수를 생각해보면 다음과 같습니다.

제목 /members /members/3
GET 전체 직원 정보 조회 3번 직원 정보 조회
POST 새 직원 정보 추가 X
PUT 전체 직원 정보 수정(잘 쓰이지 않음) 3번 직원 정보 갱신
DELETE 전체 직원 정보 삭제(잘 쓰이지 않음) 3번 직원 정보 삭제
지금 표에서 보이는 것처럼, 전체 직원 정보를 대상으로 PUT 리퀘스트 또는 DELETE 리퀘스트를 보내는 것은 전체 직원 정보를 모두 수정 또는 모두 삭제한다는 뜻이기 때문에 사실상 잘 쓰이지 않습니다. 위험한 동작이기 때문에 애초에 Web API 설계에 반영하지도 않고, 서버에서 허용하지 않을 때가 일반적이죠.

그리고 또 여기서 주목할 점은 POST 리퀘스트를 보낼 때, 컬렉션(members) 타입의 리소스를 대상으로 작업을 수행한다는 점입니다. 이 부분이 조금 헷갈릴 수도 있는데요. POST 리퀘스트를 보낼 때는 우리가 전체 직원 정보를 의미하는 컬렉션에 하나의 직원 정보(하나의 도큐먼트)를 추가하는 것이기 때문에 URL로는 컬렉션까지만 /members 이렇게 표현해줘야 합니다. 따라서 /members/3 이렇게 특정 도큐먼트를 나타내는 URL에 POST 리퀘스트를 보내는 것은 문맥상 맞지 않는 표현입니다. 그리고 지금 같은 경우는 추가될 직원 정보가 어떤 id 값을 할당받을지 알 수도 없기 때문에 애초에 /members/[id]에 id 값을 지정한다는 것도 불가능하죠.

이 도큐먼트와 컬렉션 개념을 잘 기억하고 있으면 나중에 URL에서 단수 명사를 써야 할지, 복수 명사를 써야 할지 고민이 될 때 답을 얻을 수 있을 겁니다.

자, 이때까지 REST API의 조건 중 하나인 4. Uniform Interface을 좀 더 잘 지키기 위해 개발자들이 강조하는 규칙 2가지를 배웠습니다. 하지만 이것만으로 Web API를 REST API로 설계할 수 있는 것은 아닙니다. 여전히 만족시켜야 하는 다른 조건들도 있기 때문이죠. 나머지 조건들을 어떻게 지킬 수 있는지에 관한 내용은 난이도 및 분량 관계상 생략하겠습니다. 나머지 조건들을 어떻게 준수하는지는 여러분이 웹에 좀더 익숙해지고 나서 나중에 더 찾아보시는 걸 추천합니다.

\*2-13. JSON 데이터 다루기 종합
자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 것은 영어로 Serialization, 우리말로는 직렬화라고 합니다.
그리고 이와 반대로 string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 것을 영어로는 Deserialization, 우리말로는 역직렬화라고 하는데요. 그리고 이것들을 동사로 표현하면 Serialize한다, Deserialize한다고 표현할 수 있겠죠?
이 Serialization과 Deserialization은 자바스크립트뿐만 아니라 모든 프로그래밍 언어에서 중요하게 다뤄지는 개념입니다. 왜냐하면 어떤 언어든지 리퀘스트를 보내거나, 리스폰스를 받을 때 이런 작업을 수행해줘야하기 때문입니다. 이번 노트에서는 Serialization과 Deserialization에 대해 좀 더 자세하게 살펴보겠습니다.

1. string 타입의 JSON 데이터 vs 자바스크립트 객체
   우리는 Serialization을 수행하기 위해 JSON이라는 자바스크립트 기본 내장 객체의 stringify 메소드를 사용했고,
   Deserialization을 수행하기 위해 JSON 객체의 parse 메소드를 사용했는데요.

혼동을 막기 위해서, 앞으로 데이터 포맷으로서의 json은 이렇게 소문자로,
stringify 메소드, parse 메소드를 갖고 있는 JSON 객체는 이렇게 대문자로 쓸게요.

이제 string 타입의 json 데이터와 자바스크립트 객체 사이에 구체적으로 어떤 차이가 있는 건지, 각 작업이 왜 필요한지 그 이유를 생각해봅시다.

잠깐 아래 코드를 볼까요?

const obj = { x: 1, y: 2 };
const jsonString = JSON.stringify(obj);
지금 x 프로퍼티와 y 프로퍼티를 가진 obj라는 객체를 Serialize했는데요.
이 코드를 실행하고 obj와 jsonString을 순서대로 조회해보면

이렇게 obj는 자바스크립트 객체이고, 이것을 Serialize한 결과인 jsonString은 string 타입이라는 걸 알 수 있습니다.
obj 객체 왼쪽의 화살표를 클릭해보면

이렇게 obj 객체는 자바스크립트 객체로서, 우리가 직접 정의하지는 않았지만, 기본으로 내장하는 프로퍼티들이 존재한다는 것을 알 수 있습니다. 이런 것들은 자바스크립트 실행 환경에서, 객체라면 가지는 프로퍼티들일 뿐 서버에는 전혀 보낼 필요가 없는 것들입니다. 그리고 특히 이 객체의 메소드 같은 경우 서버에서 이를 인식 가능하도록 보낼 수 있는 방법도 없구요. 바로 이러한 이유 때문에 우리는 객체(object)가 가진 데이터만을 string 타입으로 변환하는 Serialization 작업을 해야하는 겁니다.(Serialization이 왜 필요한지에 대해서 제대로 이해하려면 컴퓨터 공학에 관한 깊은 지식이 필요합니다. 지금은 자바스크립트 실행 환경에서만 인식되는 객체라는 존재를 어느 환경에서든 해석될 수 있는 포맷으로 변환하기 위해 Serialize를 한다는 정도로만 이해하시면 됩니다.)

그럼 이번엔 반대로 Deserialize를 해봅시다.

const jsonString = '{"x": 1, "y": 2}';
const obj = JSON.parse(jsonString);
이번엔 코드 순서가 반대이고, JSON 객체의 stringify 메소드 대신 parse 메소드를 썼는데요.

지금 jsonString은 string 타입입니다. 이때 y키의 값인 2를 가져와야 한다고 해봅시다. 어떻게 가져와야할까요? 지금 같은 문자열 상태로는 y 값을 가져올 수 없습니다. 문자열 자체를 파싱(parsing)해서 어떻게든 2라는 값을 가져올 수 있겠지만 그건 우리가 원하는 게 아니죠. 따라서 이 string 타입의 값을 Deserialize해서 그대로 자바스크립트 객체로 변환해줘야 코드에서 자유롭게 사용할 수 있게 됩니다. 그 후에는 이렇게

obj.y처럼 자바스크립트에서 객체의 프로퍼티의 값을 읽을 때 쓰는 문법을 사용해서, obj 객체의 y프로퍼티에 바로 접근할 수 있죠. 왜 리스폰스의 내용이 JSON 데이터일 때 그것을 Deserialize해야 하는지 아시겠죠? 굳이 string 타입의 값에서 문자열을 파싱하느라 낑낑대며 어렵게 필요한 데이터를 추출하기보다는 이렇게 자바스크립트 객체로 변환해서 편하게 데이터를 다루면 되는 겁니다.

Serialization과 Deserialization은 자바스크립트로 웹 개발을 할 때 반드시 숙지하고 있어야 하는 개념입니다. 리퀘스트를 보내거나 리스폰스를 받았을 때 이 작업을 빼먹지 않도록 주의하셔야 합니다.

2. text 메소드 말고 json 메소드도 있어요.
   우리가 배웠던 코드를 잠깐 살펴봅시다.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => { const users = JSON.parse(result); });
이 코드에서는 리스폰스의 내용을 추출하기 위해 response.text()를 호출했고,
그 다음에 그 리턴값인 JSON 데이터
(result, 실제로는 JSON 데이터를 품은 Promise 객체라는 것이 리턴됩니다. Promise 객체는 챕터 3에서 배우니까 조금만 기다려주세요.)
를 Deserialize(JSON.parse(result))해서 생성한 객체를 users에 할당했는데요.

그런데 여기서 코드의 양을 조금이나마 줄일 수 있는 방법이 있습니다. 바로 보여드릴게요.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((result) => { const users = result; });
지금 저는 response 객체의 text 메소드 대신 json이라는 메소드를 사용했고, 콜백 안에 있던 JSON.parse 코드를 삭제했습니다. 왜 그런 걸까요?

response 객체의 text 메소드 대신 json이라는 메소드를 호출하면, 리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행해줍니다. 이렇게 json 메소드를 사용하면, 두 번째 콜백의 result 파라미터로는 Deserialization 결과로 생성된 자바스크립트 객체가 넘어가게 되는데요. 그래서 두 번째 콜백 안에서 JSON.parse를 해주지 않아도 result를 바로 자바스크립트 객체로서 사용할 수 있는 겁니다. 참고로, 리스폰스의 내용이 JSON 데이터에 해당하지 않을 경우에는 에러가 발생하게 됩니다.

리스폰스의 내용이 JSON 데이터로 미리 약속된 경우에는 response 객체의 text 메소드 대신 json 메소드를 사용해서 Deserialization까지 한 번에 수행하기도 합니다.

\*2-15. Status Code
Response
Head -> Response에 대한 부가 정보. 상태 코드(Status Code)
Body -> 실제 데이터를 담는 부분. 주로 JSON 데이터가 들어감.
200: 요청 내용을 서버가 정상 처리함
404: 해당 URL에 해당하는 데이터를 찾을 수 없음

\*2-16. Status Code 더 자세히

1. 각각의 상태 코드에는 대응되는 상태 메시지가 있습니다.
   모든 상태 코드(Status Code)는 각각 그에 대응되는 상태 메시지(Status Message)를 갖고 있습니다.

예를 들어, 우리가 배운 200번은 OK, 404번은 Not Found라는 상태 메시지를 갖고 있습니다. 각 상태 코드의 의미를 모두 외우기는 힘들기 때문에 이러한 상태 메시지는 상태 코드의 의미를 빠르게 파악하는데 도움을 줍니다.

2. 상태 코드는 100번대~500번대까지 있어요.
   이전 영상에서는 상태 코드 200번과 404번만 봤는데요. 사실 상태 코드는 100번대부터 500번대까지 존재합니다. 그리고 각 번호대는 그것만의 의미를 가지고 있는데요. 각 번호대 별 주요 상태 코드들을 살펴봅시다. 각 상태 코드는 상태 코드 옆에 바로 상태 메시지를 쓰는 형식(예: 200 OK)으로 나타내겠습니다.

(1) 100번대
서버가 클라이언트에게 정보성 응답(Informational response)을 줄 때 사용되는 상태 코드들입니다.

100 Continue : 클라이언트가 서버에게 계속 리퀘스트를 보내도 괜찮은지 물어봤을 때, 계속 리퀘스트를 보내도 괜찮다고 알려주는 상태 코드입니다. 예를 들어, 클라이언트가 용량이 좀 큰 파일을 리퀘스트의 바디에 담아 업로드하려고 할 때 서버에게 미리 괜찮은지를 물어보는 경우가 있다고 할 때, 서버가 이 100번 상태 코드의 리스폰스를 주면 그제서야 본격적인 파일 업로드를 시작합니다.
101 Switching Protocols : 클라이언트가 프로토콜을 바꾸자는 리퀘스트를 보냈을 때, 서버가 '그래요, 그 프로토콜로 전환하겠습니다'라는 뜻을 나타낼 때 쓰이는 상태 코드입니다.
(2) 200번대
클라이언트의 리퀘스트가 성공 처리되었음을 의미하는 상태 코드들입니다.

200 OK : 리퀘스트가 성공적으로 처리되었음을 포괄적으로 의미하는 상태 코드입니다. 이때 성공의 의미는 리퀘스트에 있던 메소드의 종류에 따라 다르겠죠? GET 리퀘스트의 경우 리소스가 잘 조회되었다는 뜻이고, POST 리퀘스트의 경우 새 리소스가 잘 생성되었다, PUT 리퀘스트의 경우 기존 리소스가 잘 수정되었다, DELETE 리퀘스트의 경우 기존 리소스가 잘 삭제되었다는 뜻입니다.
201 Created : 리퀘스트의 내용대로 리소스가 잘 생성되었다는 뜻입니다. POST 리퀘스트가 성공한 경우에 200번 대신 201번이 올 수도 있습니다.
202 Accepted : 리퀘스트의 내용이 일단은 잘 접수되었다는 뜻입니다. 즉, 당장 리퀘스트의 내용이 처리된 것은 아니지만 언젠가 처리할 것이라는 뜻인데요. 리퀘스트를 어느 정도 모아서 한번에 실행하는 서버인 경우 등에 이런 응답을 줄 수도 있습니다.
(3) 300번대
클라이언트의 리퀘스트가 아직 처리되지 않았고, 리퀘스트 처리를 원하면 클라이언트 측의 추가적인 작업이 필요함을 의미하는 상태 코드들입니다.

301 Moved Permanently : 리소스의 위치가 바뀌었음을 나타냅니다. 보통 이런 상태 코드가 있는 리스폰스의 헤드에는 Location이라는 헤더도 일반적으로 함께 포함되어 있습니다. 그리고 그 헤더의 값으로 리소스에 접근할 수 있는 새 URL이 담겨있는데요. 대부분의 브라우저는 만약 GET 리퀘스트를 보냈는데 이런 상태 코드가 담긴 리스폰스를 받게 되면, 헤드에 포함된 Location 헤더의 값을 읽고, 자동으로 그 새 URL에 다시 리퀘스트를 보내는 동작(리다이렉션, redirection)을 수행합니다.
302 Found : 리소스의 위치가 일시적으로 바뀌었음을 나타냅니다. 이 말은 지금 당장은 아니지만 나중에는 현재 요청한 URL이 정상적으로 인식될 것이라는 뜻입니다. 이 상태 코드의 경우에도 보통 그 리스폰스의 헤드에 Location 헤더가 있고, 여기에 해당 리소스의 임시 URL 값이 있습니다. 이 경우에도 대부분의 브라우저들은 임시 URL로 리다이렉션합니다.
304 Not Modified : 브라우저들은 보통 한번 리스폰스로 받았던 이미지 같은 리소스들을 그대로 내부에 저장하고 있습니다. 그리고 서버는 해당 리소스가 바뀌지 않았다면, 리스폰스에 그 리소스를 보내지 않고 304번 상태 코드만 헤드에 담아서 보냄으로써 '네트워크 비용'을 절약하고 브라우저가 저장된 리소스를 재활용하도록 하는데요. 사실 이 상태 코드는 웹에서 '캐시(cache)'라는 주제에 대해서 공부해야 정확하게 이해할 수 있습니다. 당장 배울 내용은 아니니까 넘어갈게요. 혹시 관심이 있는 분들은 이 링크를 참조하세요.
(4) 400번대
리퀘스트를 보내는 클라이언트 쪽에 문제가 있음을 의미하는 상태 코드들입니다.

400 Bad Request : 말그대로 리퀘스트에 문제가 있음을 나타냅니다. 리퀘스트 내부 내용의 문법에 오류가 존재하는 등의 이유로 인해 발생합니다.
401 Unauthorized : 아직 신원이 확인되지 않은(unauthenticated) 사용자로부터 온 리퀘스트를 처리할 수 없다는 뜻입니다.
403 Forbidden : 사용자의 신원은 확인되었지만 해당 리소스에 대한 접근 권한이 없는 사용자라서 리퀘스트를 처리할 수 없다는 뜻입니다.
404 Not Found : 해당 URL이 나타내는 리소스를 찾을 수 없다는 뜻입니다. 보통 이런 상태 코드가 담긴 리스폰스는 그 바디에 관련 웹 페이지를 이루는 코드를 포함하고 있는 경우가 많습니다. 예를 들어, 다음과 같이

https://www.google.com/abc와 같이 존재하지 않는 URL에 접속하려고 하면 이런 페이지가 보이는 것을 알 수 있습니다.

405 Method Not Allowed : 해당 리소스에 대해서 요구한 처리는 허용되지 않는다는 뜻입니다. 만약 어떤 서버의 이미지 파일을 누구나 조회할 수는 있지만 아무나 삭제할 수는 없다고 해봅시다. GET 리퀘스트는 허용되지만, DELETE 메소드는 허용되지 않는 상황인 건데요. 그런데 만약 그 이미지에 대한 DELETE 리퀘스트를 보낸다면 이런 상태 코드를 보게될 수도 있습니다.
413 Payload Too Large : 현재 리퀘스트의 바디에 들어있는 데이터의 용량이 지나치게 커서 서버가 거부한다는 뜻입니다.
429 Too Many Requests : 일정 시간 동안 클라이언트가 지나치게 많은 리퀘스트를 보냈다는 뜻입니다. 서버는 수많은 클라이언트들의 리퀘스트를 정상적으로 처리해야 하기 때문에 특정 클라이언트에게만 특혜를 줄 수는 없습니다. 따라서 지나치게 리퀘스트를 많이 보내는 클라이언트에게는 이런 상태 코드를 담은 리스폰스를 보낼 수도 있습니다.
(5) 500번대
서버 쪽의 문제로 인해 리퀘스트를 정상적으로 처리할 수 없음을 의미하는 상태 코드들입니다.

500 Internal Server Error : 현재 알 수 없는 서버 내의 에러로 인해 리퀘스트를 처리할 수 없다는 뜻입니다.
503 Service Unavailable : 현재 서버 점검 중이거나, 트래픽 폭주 등으로 인해 서비스를 제공할 수 없다는 뜻입니다.
자, 각 번호대의 주요 상태 코드들을 알아봤는데요. 정말 다양한 상태 코드들이 있죠? 이 상태 코드들만 깊게 공부해도 웹 개발에 필요한 많은 지식들을 쌓을 수 있습니다. 혹시 또다른 상태 코드들도 궁금한 분들은 여기 이 페이지를 참조하세요.

이 상태 코드들도 '모범적인 Web API, REST API' 노트에서 배웠던 'Web API 설계' 시에 결정되어야 하는 요소들입니다. 리퀘스트에 관한 URL과 메소드 종류 뿐만 아니라 리스폰스의 상태 코드 또한 각각의 상황에 알맞은 것들이 설정되도록 설계해야 하는데요. 사실 모든 상황을 세분화해서 매번 거기에 맞는 상태 코드를 넣는 것은 불필요한 작업이 될 수도 있긴 합니다. 그래서 보통은 꼭 사용할 상태 코드들만 추린 다음에 특정 유형의 상황들은 모두 하나의 상태 코드로 나타내는 전략이 주로 활용되는데요.

하지만 그렇다고 해서 서버가 리퀘스트를 잘 처리했든, 실패했든 상태 코드로 항상 200번을 보내버린다거나 하는 것은 매우 좋지 않습니다. 가장 이상적인 것은 존재하는 상태 코드를 최대한 많이 활용하는 것입니다.

\*2-18. Content-type이란?
이때까지 우리는 리퀘스트와 리스폰스가 둘다 헤드(head)와 바디(body)라는 걸로 이루어져 있다는 걸 배웠습니다. 그리고 헤드에는 각종 부가 정보, 바디에는 실제 데이터가 들어간다는 것도 배웠죠. 이때 헤드에 다양한 헤더(header)들이 있는 것도 직접 봤는데요.

각 헤더의 의미도 이번 토픽에서 하나씩 설명하면 좋겠지만, 헤더의 종류는 너무나도 많기 때문에 지금 당장 다 알려드릴 수는 없습니다. 하지만 그 전에 Content-Type 헤더에 대해서는 미리 알아두고 가면 좋습니다.

1. Content-Type 헤더
   Content-Type 헤더는 현재 리퀘스트 또는 리스폰스의 바디에 들어 있는 데이터가 어떤 타입인지를 나타냅니다.

사실 이때까지 우리는 리퀘스트 또는 리스폰스의 바디에 HTML, JavaScript 등의 코드 또는 JSON 데이터가 들어가는 경우만 봤습니다. 하지만 실무 개발에서는 리퀘스트 또는 리스폰스의 바디에 이것 말고도 정말 다양한 종류의 데이터들을 넣게 될 텐데요. 텍스트부터 시작해서 이미지, 영상까지 정말 많은 것들이 들어갈 수 있습니다. 바로 이런 데이터들의 타입 정보가 Content-Type 헤더에 담겨있는 겁니다.

Content-Type 헤더의 값은 '주 타입(main type)/서브 타입(sub type)'의 형식으로 나타나는데요. 우리가 흔히 만나게 될 Content-Type 헤더의 값으로는 다음과 같은 것들이 있습니다.

주 타입이 text인 경우(텍스트)
일반 텍스트 : text/plain
CSS 코드 : text/css
HTML 코드 : text/html
JavaScript 코드 : text/javascript ...
주 타입이 image인 경우(이미지)
image/bmp : bmp 이미지
image/gif : gif 이미지
image/png : png 이미지 ...
주 타입이 audio인 경우(오디오)
audio/mp4 : mp4 오디오
audio/ogg : ogg 오디오 ...
주 타입이 video인 경우(비디오)
video/mp4 : mp4 비디오
video/H264 : H264 비디오 ...
우리가 이미 익숙하게 접하는 데이터 타입들이죠?

위 타입들에 속하지 않는 것들은, 보통 application이라고 하는 주 타입에 속하는데요.

주 타입이 application인 경우
application/json : JSON 데이터
application/octet-stream : 확인되지 않은 바이너리 파일 ...
우리가 배운 JSON을 나타내는 값이 바로 여기에 속하네요. application/json이라는 값이 JSON 데이터를 나타낸다는 사실을 잘 기억해둡시다.

마지막으로 application/octet-stream이라고 하는 값도 보이는데요. '확인되지 않은 바이너리 파일'이라는 게 뭘까요? 일단 '바이너리 파일'이 뭔지를 알아야 할 것 같은데요. 컴퓨터에서는 모든 파일이 0과 1의 조합으로 이루어져 있다는 사실은 이미 아시죠? 하지만 이때 그 0과 1의 조합이 우리가 읽을 수 있는 텍스트로 변환 가능한 경우도 있고, 그렇지 않은 경우도 있습니다. 그렇지 않은 경우의 예로는 이미지 파일이나 비디오 파일 등이 있습니다. 이렇게 텍스트 파일 이외의 파일들을 보통 바이너리 파일(binary file)이라고 하는데요. 이 바이너리 파일들 중에서도 특정 확장자(.png, .mp4 등)의 포맷에 해당하지 않는 데이터들을 보통 이렇게 application/octet-stream으로 나타냅니다. 참고로 브라우저는 리스폰스의 Content-Type 헤더의 값으로 application/octet-stream이 쓰여 있으면 보통, 사용자에게 '다운로드 받으시겠습니까'와 같은 alert 창을 띄웁니다.

이렇게 리퀘스트 또는 리스폰스의 바디에는 JSON 말고도 아주 다양한 타입의 데이터들이 담길 수 있는데요. Content-Type 헤더의 값으로 들어갈 수 있는 것들을 모두 보고 싶다면 관련 공식 문서를 참조하세요.

그런데 Content-Type 헤더는 왜 필요한 걸까요? Content-Type 헤더가 존재하면, 바디의 데이터를 직접 확인해서 그 타입을 추론하지 않아도 되기 때문입니다. 예를 들어, 리퀘스트의 바디에 JSON 데이터를 담아 보낼 때 헤드에서 이 Content-Type의 값을 application/json으로 알맞게 설정하고 보낸다고 합시다. 만약 이 Content-Type을 써주지 않으면 어떻게 될까요? 서버에서 바디의 데이터가 어떤 타입인지를 확인하는 절차가 추가적으로 필요할 겁니다. 불필요한 비용이 발생하게 되는 거죠. 그리고 리스폰스의 경우에도 마찬가지입니다. 웹 브라우저에서 리스폰스를 받았는데 Content-Type 헤더의 값이 없으면 이 데이터가 무슨 타입인지 별도로 확인하고, 처리해줘야 하겠죠?

따라서 리퀘스트든, 리스폰스든 바디에 어떤 데이터가 존재하는 경우라면 이 Content-Type 헤더의 값을 적절하게 설정해주는 게 좋습니다.

2. Content-Type 설정해보기
   이번에는 리퀘스트를 보낼 때 직접 Content-Type 헤더의 값을 설정해보겠습니다. 이전에 새로운 직원 정보를 추가하기 위해 썼던 코드를 재사용할 건데요.

const newMember = {
name: 'Jerry',
email: 'jerry@codeit.kr',
department: 'engineering',
};

fetch('http://learn.codeit.kr/api/members', {
method: 'POST',
body: JSON.stringify(newMember),
})
.then((response) => response.text())
.then((result) => { console.log(result); });
이제 여기에 Content-Type 헤더도 설정해보겠습니다.

const newMember = {
name: 'Jerry',
email: 'jerry@codeit.kr',
department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
method: 'POST',
headers: { // 추가된 부분
'Content-Type': 'application/json',
},
body: JSON.stringify(newMember),
})
.then((response) => response.text())
.then((result) => { console.log(result); });
지금 fetch 함수의 옵션 객체 안에 headers라는 프로퍼티를 만들어서 객체 하나를 설정하고 그 객체 안에 'Content-Type'이라는 프로퍼티를 설정했습니다. 프로퍼티의 값으로는, 리퀘스트의 바디에 담을 데이터가 JSON 데이터라는 뜻으로 application/json을 적었습니다.

이 코드를 개발자 도구에서 실행해보면
이렇게 리퀘스트의 헤더들 중에서 제가 설정한 Content-Type 헤더가 잘 보입니다.

이번 노트에서는 리퀘스트에 Content-Type 헤더를 추가하는 법을 배웠습니다. 앞으로 여러분이 점점 더 다양한 헤더들을 공부하게 된다면,

(1) fetch 함수의 옵션 객체 안에 headers 프로퍼티를 설정하고
(2) headers 객체 안에 더 많은 헤더 이름들을 추가해볼 수 있겠죠?

\*2-19. 알아두면 좋은 Content-type들(심화)

1. JSON 말고 XML도 있어요.
   개발자들이 어떤 정보를 나타내기 위해 흔히 쓰는 데이터 포맷으로는 JSON 뿐만 아니라 XML(Extensible Markup Language)이라고 하는 데이터 포맷도 있습니다. XML을 한마디로 쉽게 이야기하자면, 태그를 사용해서 데이터를 나타내는 것입니다. 예를 들어

{
"name":"Michael Kim",
"height":180,
"weight":70,
"hobbies":[
"Basketball",
"Listening to music"
]
}
이런 JSON 데이터를 XML로는 이렇게 나타낼 수 있습니다.

<?xml version="1.0" encoding="UTF-8" ?>
<person>
    <name>Michael Kim</name>
    <height>180</height>
    <weight>70</weight>
    <hobbies>
        <value>Basketball</value>
        <value>Listening to music</value>
    </hobbies>
</person>
뭔가 HTML에서나 볼 법한 태그들로 이루어져있죠? 자세히 보면 원래 JSON에서

"name": "Michael Kim"
이라고 나타낸 부분을 XML에서는

<name>Michael Kim</name>
이런 식으로 시작 태그(<name>)와 끝 태그(</name>), 그리고 그 사이의 값으로 나타낸 것을 알 수 있습니다.

사실 XML이라는 데이터 타입은 JSON이 2013년에 표준화되고 그 뒤로 활성화되기 전까지만 해도 정말 많이 사용되던 데이터 타입이었습니다. 여러분이 개발 관련 문서들을 구글링하다보면 여전히 이 XML로 표현된 데이터들을 자주 볼 수 있게 될 텐데요.

XML을 쓸 때는 보통 스키마(Schema)라는 별도의 문서를 함께 사용합니다. 이 스키마에는 각 조직, 기관 등에서 XML로 데이터를 나타낼 때, 어떤 태그들을 사용할 수 있고, 각 태그의 의미는 무엇이며, 특정 태그는 어떤 타입의 값을 가질 수 있는지 등의 정보가 담겨있는데요. 따라서 XML은 데이터에 대한 엄격한 유효성(validity) 검증에 특화된 데이터 포맷이라고 할 수 있습니다.

하지만 XML은 같은 양의 데이터를 표현하더라도 JSON에 비해 더 많은 용량을 차지하고, JSON에 비해 가독성이 떨어지며, 배우기가 어렵다는 문제 등으로 인해, 오늘날 XML의 입지는 다소 좁아진 것이 사실입니다. 특히나 자바스크립트가 중심이 되는 웹 개발 세계에서는 우리가 배운 것처럼 자바스크립트의 문법과 JSON 문법이 대체로 호환되기 때문에 더더욱 JSON을 사용하는 것이 편리합니다.

하지만 만약 여러분이 외부로 공개된 여러 Open API 같은 것들을 살펴보면 여전히 XML 타입의 데이터를 리스폰스로 주는 경우가 많다는 것을 알 수 있습니다. 그렇기 때문에 XML 타입이라는 것이 존재한다는 것을 인지하고, 이런 타입의 데이터는 어떻게 처리해야 할지 미리 고민해보는 것도 좋습니다. 참고로 XML을 나타내는 Content-Type 헤더의 값은 'application/xml'입니다. 그리고 'application/xml'뿐만 아니라 XML의 문법을 따르되 거기에 특수한 규칙을 더해 만든 데이터 타입들도 존재합니다. 보통 이런 타입들은 그 이름 끝에 +xml을 붙여서 사용하는데요. Content-Type 헤더의 값에 관한 이 공식 문서에 접속해서 +xml 이라는 키워드로 페이지 내 검색을 해보세요. XML 문법을 활용한 다양한 데이터 타입들을 볼 수 있을 겁니다.

2. form 태그에서 사용되는 타입들
   이때까지 배운 JSON, XML 이런 것들 말고도 개발자라면 알아둬야 할 데이터 타입이 또 있습니다. 그것은 바로

(1) application/x-www-form-urlencoded 타입
(2) multipart/form-data 타입

이 2가지인데요. 각각의 타입에 대해 순서대로 알아봅시다.

(1) application/x-www-form-urlencoded
뭔가 굉장히 긴 이름의 타입이죠? 이 타입은 우리가 HTML의 form 태그(<form></form>)를 사용할 때 종종 보게되는 타입입니다. form 태그는 회원가입 화면이나 게시물 업로드 화면 등을 만들 때 주로 활용되는 HTML 태그인데요. form 태그를 사용하면 자바스크립트 코드 없이 오로지 HTML만으로도 리퀘스트를 보내는 것이 가능합니다. 오늘날에는 form 태그를 사용하지 않고 자바스크립트 코드로 직접 사용자의 입력값을 취합해서 리퀘스트를 보내는 방법이 많이 사용되고 있지만 여전히 form 태그만으로 리퀘스트를 보내는 방식도 쓰이고는 있기 때문에 알아두는 게 좋습니다.

form 태그는 기본적으로 이 application/x-www-form-urlencoded 타입의 데이터를 바디에 담아서 보내는데요.

그렇다면 application/x-www-form-urlencoded 타입은 데이터를 어떤 식으로 나타내는 걸까요? 예를 들어, JSON으로는 다음과 같이 표현할 수 있는 데이터가 있다고 가정해봅시다.

{
"id": 6,
"name": "Jason",
"age": 34,
"department": "engineering"
}
이 데이터를 application/x-www-form-urlencoded 타입으로 나타내보면

id=6&name=Jason&age=34&department=engineering
이것과 같습니다. application/x-www-form-urlencoded 타입은 프로퍼티의 이름과 값을 "이름=값" 형식으로 나타내고 각각의 프로퍼티를 "&" 기호로 연결하는 방식으로 데이터를 표현하는데요. URL의 query 부분에서 사용하는 방식과 똑같죠? 자, 예시를 통해 좀더 배워봅시다.

예를 들어, 이런 식으로 CodeitShopping이라는 사이트의 회원 가입 페이지가 있다고 해봅시다.

이 웹 페이지는 다음과 같은 HTML 코드로 이루어져 있는데요.

...

<body>
  <div id="signup">
    <p id="title">CodeitShopping</p> 
    <form action="/upload" method="get" enctype="application/x-www-urlencoded">
      <div>
        <div><span class="label">email</span></div>
        <input class="input" type="text" id="email" name="email">
      </div>
      <div>
        <div><span class="label">password</span></div>
        <input class="input" type="password" id="password" name="password">
      </div>
      <div>
        <div><span class="label">nickname</span></div>
        <input class="input" type="text" id="nickname" name="nickname">
      </div>
      <div>
        <input id="submit-btn" type="submit" value="Sign Up">
      </div>
    </form>
  </div>
</body> 
 
...
(CSS, JavaScript 코드는 생략되어 있습니다.)

지금 form 태그의 method라는 속성의 값으로 get이, enctype이라는 속성의 값으로 application/x-www-form-urlencoded라고 써있는 게 보이시나요? 이렇게 속성을 적으면, 나중에 이 form 태그가 리퀘스트를 보낼 때, 리퀘스트의 메소드를 GET으로 설정하고 사용자가 입력한 데이터를, URL의 쿼리 부분에 application/x-www-urlencoded 타입으로 넣습니다. 지금 enctype 속성을 저렇게 설정을 해줘도 되고, 설정을 안 해줘도 form 태그는 기본적으로 application/x-www-urlencoded 타입을 사용합니다. 제가 위 이미지와 같이 회원 정보를 작성하고 아래의 Sign Up(가입하기) 버튼을 누르면 어떤 리퀘스트가 보내질까요? 잠깐 이 이미지를 봅시다.

이 이미지는 제가 회원 가입 버튼을 누르고 웹 브라우저의 주소창 부분을 봤을 때의 결과인데요. 제가 입력한 정보가 키=정보&키=정보&키=정보.. 이런 형식으로 나타난 것을 알 수 있습니다. form 태그는 바로 이렇게 사용자의 입력값을 URL의 query 부분에 application/x-www-form-urlencoded 타입으로 나타낸 URL로 리퀘스트를 보내는 겁니다. 별로 어렵지 않죠?

그런데 잠깐 지금 빨간색으로 표시된 부분을 보면 우리가 작성하지 않았던 이상한 퍼센트(%)기호와 숫자들이 보입니다. 이게 뭘까요? 지금 보면

입력했던 실제 글자 표시된 내용
@ %40
! %21
공백 +
이렇게 변환되어서 표시된 것을 알 수 있는데요. 왜 특정 문자들은 이런 식으로 변환된 걸까요? 바로 이것이 application/x-www-form-urlencoded 타입의 특징인데요.

사실 이건 URL encoding(URL 인코딩)이라는 작업을 수행한 결과입니다. URL 인코딩이란 URL에서 특정 특수문자들 그리고 영어와 숫자를 제외한 다른 나라의 문자들을 이런 식으로 변환하는 것을 말합니다. 왜 이런 작업이 필요할까요? URL 관련 표준에 따르면, URL을 처리할 때, 특정 조건에 해당하는 문자들은 Percent encoding이라는 것을 하도록 되어 있습니다. 이 Percent encoding이 바로 URL encoding인데요. 어떤 경우에 Percent encoding을 해야하는지 알아보겠습니다.

일단, 아래와 같은 특수 문자들은 URL에서 특별한 용도를 갖고 있는 문자들입니다. 이런 특수 문자들이 각자 자신의 원래 용도가 아닌 다른 용도로 사용되는 경우 Percent Encoding을 해줘야 합니다.

: / ? # [ ] @ ! $ & ' ... ' '(공백)
%3A %2F %3F %23 %5B %5D %40 %21 %24 %26 %27 ... %20 또는 +
그러니까 이런 기호들이 URL에서 본래의 용도로 사용되는 게 아니라, 어떤 데이터를 나타내기 위해 사용된다면 이때는 Percent encoding을 해서 나타내줘야 한다는 뜻입니다. 방금 전 봤던 @, !, 공백 이 글자들도 이 표에 속하고, 본래의 용도가 아닌 데이터를 나타내기 위한 용도로 쓰였기 때문에 Percent encoding 되었던 것입니다.

그럼 왜 이런 Percent Encoding이 필요한 걸까요? 그건 바로 URL에 대한 해석 오류를 방지하기 위해서입니다. 예를 들어, 어떤 URL의 query 부분에 이런 내용이 있다고 생각해보세요.

https://codeitBooks.com/books?title=Tom&Jerry&publishedData=20210115

책 제목이 Tom&Jerry(톰과 제리)라고 되어 있고, 제목 안에 & 가 있습니다. 그런데 이 &는 URL의 query에서 각각의 속성을 구분하는 용도로 쓰이는 기호이기도 하죠? 하지만 이 상태로 그대로 URL을 표현하면 서버가 URL의 path 뒷 부분을 해석하다가 오류를 발생시킬 수도 있습니다. 이 URL을 읽는 개발자가 오해해서 실수하기도 쉽구요. 따라서 본래 용도가 아니라 단지 데이터를 나타내기 위해서 사용된 &은 위 표에 따라 %26으로 변환해주도록 한 겁니다. 이런 식으로 말이죠.

https://codeitBooks.com/books?title=Tom%26Jerry&publishedData=20210105

왜 Percent encoding이 필요한지 아시겠죠?

자, 이번엔 Percent encoding을 해야하는 다른 경우를 보겠습니다. 방금 본 특수 문자들의 경우뿐만 아니라 URL에서 영어와 숫자를 제외한 다른 나라 문자를 나타낼 때도 Percent encoding을 해줘야합니다. 그러니까 한국어, 중국어, 아랍어 등을 나타낼 때는 Percent encoding을 해줘야 한다는 뜻입니다.
예를 들어, 우리가 URL의 맨 뒤에

이런 식으로 '코딩'이라는 한글을 적으면 어떻게 될까요? 이 URL을 그대로 복사해서 텍스트 에디터에 붙여넣기해보면

이런 식으로 한국말로 적은 '코딩'이라는 부분이 '%EC%BD%94%EB%94%A9'로 변환된 것을 알 수 있습니다. 따라서 이 리퀘스트를 받는 서버가 리퀘스트에서 찾게되는 path 정보도 바로 이렇게 변환된 결과일 것입니다.

이렇게 URL에서

(1) 'URL 안에서 미리 정해진 용도를 가진 특수 문자를 다른 용도로 사용'하거나
(2) '영어와 숫자'를 제외한 다른 나라 문자를 나타낼 때는

Percent encoding을 해주는 것이 정해진 규칙입니다. 그럼 어떤 식으로 Percent encoding을 해야하는 걸까요? 여기서부터는 조금 어려운 내용이니까 건너뛰셔도 됩니다. 일단 Percent encoding을 하려면 해당 문자를 UTF-8이라고 하는(하나의 문자를 1과 0의 조합으로 나타낼 때 사용하는 규칙) 인코딩 규칙을 적용하여 1과 0의 조합으로 인코딩하고, 한 바이트 당 그 앞에 퍼센트(%) 기호를 붙여주면 됩니다. 한글은 한 글자가 3바이트로 표현되기 때문에 방금 전 '코딩'이라는 단어는, '2글자 X 3바이트'를 해서 총 6개의 퍼센트가 붙은 결과('%EC%BD%94%EB%94%A9')로 변환된 것입니다. 일단 이 말이 무슨 뜻인지 이해가 안 되면 넘어가셔도 됩니다. 이 부분은 나중에 다른 토픽에서 '유니코드', '인코딩' 이런 개념들을 다시 배우고 살펴봅시다. 일단은 URL 표준에 따라 이렇게 URL에서 어떤 문자들을 Percent encoding해야 하는 경우가 있다는 사실만 기억하세요.

바로 이런 URL encoding의 원리를 그대로 반영한 데이터 타입이 바로 application/x-www-form-urlencoded 타입입니다. 왜 지금 이름에 urlencoded라고 하는 단어가 붙어있는지, 이해가 되시죠? 참고로 form 태그에서 method 속성을 get이 아닌 post로 바꾸면 다음과 같이 해당 타입의 데이터가 URL의 query 부분에 표시되는 것이 아니라 리퀘스트의 바디에 들어가도록 할 수도 있습니다.

자, 이제 application/x-www-form-urlencoded 타입이 어느 정도 이해되시죠?

그런데 사실 요즘은 방금 전 회원 가입 페이지처럼 form 태그만으로 리퀘스트를 보내기보다는 자바스크립트로 직접 리퀘스트를 보내는 경우가 많습니다. 게다가 우리가 배운 JSON(application/json)보다 이 application/x-www-form-urlencoded 타입이 딱히 더 좋아보이도 않는데요. 하지만 문제는 웹의 초창기부터 form 태그만으로 리퀘스트를 보내는 코드가 너무 많이 작성되었다는 것입니다. 따라서 여전히 많은 레거시(legacy) 서비스의 서버에서 이 타입을 요구하고 있는데요. (그리고 기술적인 측면에서는, 이것은 좀 어려운 내용이긴 하지만 특정 도메인에서 다른 도메인으로 리퀘스트를 보낼 때(CORS 문제) Content-Type의 값이 x-www-form-urlencoded인 GET 리퀘스트는, 다른 Content-Type 값들에 비해 주고받아야하는 리퀘스트와 리스폰스의 수가 더 적다는 약간의 장점이 있기는 합니다. 이해가 안 된다면 일단 넘어갑시다.)
개발자는 어느 환경에서 개발하게 될 지 모르기 때문에 이 application/x-www-form-urlencoded 타입에 대해서도 잘 알아둬야 나중에 당황하지 않을 수 있습니다.

그리고 form 태그를 사용하지 않고 자바스크립트 코드로 직접 application/x-www-form-urlencdoed 타입의 데이터를 리퀘스트의 바디에 넣는 것도 가능한데요. 예를 들어 다음과 같습니다.

const urlencoded = new URLSearchParams();
urlencoded.append('email', 'tommy@codeit.kr');
urlencoded.append('password', 'codeit123!');
urlencoded.append('nickname', 'Nice Guy!');

fetch('https://learn.codeit.kr/api/members', {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: urlencoded,
})
.then((response) => response.text())
.then((result) => {
console.log(result);
});
이 코드를 사용하면 방금 전과 동일하게 리퀘스트를 보낼 수 있는데요. URLSearchParams라는 객체를 사용하면 자동으로 값에 URL encoding을 적용해주기 때문에, application/x-www-form-urlencoded 타입의 데이터를 fetch 함수로도 손쉽게 보낼 수 있습니다. 참고로 알아두세요.

(2) multipart/form-data
이 컨텐츠 타입은 실무적으로 굉장히 중요한 타입입니다. 이때까지 우리가 살펴본 Content-Type 값들은, 하나의(Single) 데이터의 타입을 나타내는 값들이었습니다. text/html, vidoe/mp4, application/json 등 모두 데이터 하나의 타입을 나타냈었죠? 그런데 이 multipart/form-data는 좀 특별합니다. multipart(여러 개의 파트)라는 단어에서도 유추할 수 있듯이 이 값은 여러 종류의 데이터를 하나로 합친 데이터를 의미하는 타입입니다.

그럼 언제 이런 값이 필요할까요? 잠깐 우리가 게시판에 게시글을 올릴 때를 생각해봅시다. 우리는 글의 제목과 내용을 적고, 이미지 파일이나 영상 파일을 첨부하기도 합니다. 이때 우리가 '게시글 업로드' 버튼을 누르면 파일들의 내용도 리퀘스트에 함께 담겨서 가야할텐데 이때 Content-type의 값은 무엇이어야 할까요? 바로 이럴 때 사용되는 것이 multipart/form-data입니다. 이번에도 예를 통해 배워봅시다.

방금 위에서 봤던 CodeitShopping의 회원가입 페이지가 이렇게 바뀌었다고 해봅시다. 이제 프로필 이미지도 추가로 받는 것으로 바뀌었는데요.

이제 이 페이지에서는 email, password, nickname 같은 텍스트 정보뿐만 아니라 프로필 이미지 파일도 함께 보내줘야합니다. 어떻게 해야 할까요?

이 multipart/form-data 타입의 데이터도 위에서 살펴본 application/x-www-form-urlencoded 타입 때처럼

(1) form 태그만으로도 그리고
(2) 자바스크립트 코드만으로도

리퀘스트의 바디에 담아 전송할 수 있습니다. 순서대로 해보겠습니다.

이 화면은 현재

...

<body>
  <div id="signup">
    <p id="title">CodeitShopping</p> 
    <form action="/upload" method="post" enctype="multipart/form-data">
      <div>
        <input id="image" type="file" name="file" accept="image/*">
        <div id="profile">
          <div id="plus">+</div>
        </div>
       </div>
      <div>
        <div><span class="label">email</span></div>
        <input class="input" type="text" id="email" name="email">
      </div>
      <div>
        <div><span class="label">password</span></div>
        <input class="input" type="password" id="password" name="password">
      </div>
      <div>
        <div><span class="label">nickname</span></div>
        <input class="input" type="text" id="nickname" name="nickname">
      </div>
      <div>
        <input id="submit-btn" type="submit" value="Sign Up">
      </div>
    </form>
  </div>
</body>
... 
이런 HTML 코드로 이루어져 있는데요. (CSS, JavaScript 코드는 생략되어 있습니다.)
이번엔 form 태그의 enctype 속성으로 application/x-www-form-urlencoded가 아니라 multipart/form-data가 써있는 것이 보이시죠?

이번엔 자바스크립트 코드로 하는 방법도 봅시다.

...
const formData = new FormData();
formData.append('email', email.value);
formData.append('password', password.value);
formData.append('nickname', nickname.value);
formData.append('profile', image.files[0], "me.png");

fetch('https://learn.codeit.kr/api/members', {
method: 'POST',
body: formData,
})
.then((response) => response.text())
.then((result) => { console.log(result); });
이 코드에서 보이는 것처럼, 자바스크립트 코드에서 multipart/form-data 타입의 데이터를 보내려면 FormData라는 객체를 사용해야합니다. 이 FormData를 사용하면 리퀘스트의 Content-Type 헤더의 값을 multipart/form-data로 직접 설정하지 않아도 자동으로 설정해줍니다. 일단은 이렇구나 정도만 이해하고 넘어가주세요.

자, 이제 핵심 내용이 등장합니다. 그럼 multipart/form-data는 실제로 어떻게 생겼는지 개발자 도구에서 보겠습니다.
위의 방법 중 하나를 선택해서 리퀘스트를 보내면, 아래와 같은 리퀘스트가 보내집니다.

일단 리퀘스트의 헤드부터 봅시다. 지금 Content-Type 헤더의 값에 multipart/form-data라고 쓰여있죠? 그런데 그 옆에 쓰여있는 boundary라는 건 뭘까요? boundary는 '경계선'이라는 뜻인데요. 이게 뭔지는 리퀘스트의 바디 부분을 보면 알 수 있습니다. 화면 하단의 Form Data라고 쓰여있는 부분에서 view source를 클릭하면

이렇게 바디에 담긴 multipart/form-data 타입의 데이터를 볼 수 있습니다. 자, 이 내용을 좀 더 보기 편하게 처리해서 보여드리겠습니다.

지금 보면 총 4개의 데이터(email, password, nickname, profile)가 들어가있고 각각의 데이터는

------WebKitFormBoundaryHu7uI1OMKko1vxwV
이 문자열을 기준으로 나뉘어 있다는 것을 알 수 있는데요. 어, 그런데 이 문자열 어디서 보지 않았나요? 방금 전 Content-Type 헤더의 값에서 multipart/form-data 뒤에 적혀있던 boundary의 값이었습니다.

content-type: multipart/form-data; boundary=---------WebKitFormBoundaryHu7uI1OMKko1vxwV
왜 이런 boundary라는 부가 정보가 붙어있는 걸까요? multipart/form-data 타입의 데이터는 그 안에 여러 종류의 데이터들이 들어있다고 했습니다. 따라서 서버가 이것을 받았을 때 각 데이터를 구분할 수 있도록 이런 boundary 값이 필요한데요. 지금 위에서 boundary를 기준으로 각각의 데이터가 나뉘어있다는 것을 알 수 있습니다.

자, 이제 boundary로 구분된 각 영역의 데이터도 살펴봅시다. 지금 1, 2, 3번 데이터를 살펴보면

Content-Disposition: form-data; name=데이터의 이름
// blank line
값
이런 형식으로 저장되어 있는 것을 볼 수 있습니다.

그리고 가장 마지막에, 프로필 이미지에 해당하는 4번 데이터는

Content-Disposition: form-data; name="profile"; filename="me.png"
Content-Type: image/png
// blank line
값
이런 식으로 filename에 실제 이미지 파일의 원래 이름이 있고, 또 그것만의 Content-Type 헤더의 값으로 image/png가 설정되어 있는 것을 볼 수 있습니다. (값의 영역에는 원래 해당 이미지 파일의 바이너리 데이터가 존재하지만, 개발자 도구가 이를 보여주지 않는 것으로 추정됩니다)

정리하면, multipart/form-data 타입은 여러 데이터를 하나로 묶어서 리퀘스트의 바디에 담아보내려고 할 때 사용되는 아주 중요한 타입입니다. 실제 웹 서비스를 떠올려보면, 우리가 회원가입을 하든, 게시글을 업로드하든 다양한 데이터를 한번에 묶어서 보내는 경우가 많죠? 실제로 개발을 할 때도 자주 사용하게 되는 타입이니까 꼭 기억해두세요.

자, 이때까지 Content-Type 헤더의 값 중 하나인 application/x-www-form-urlencoded 타입과 multipart/form-data 타입에 대해 배웠는데요. 혹시 이 내용들 중에 당장 이해가 되지 않는 부분이 있어도 괜찮습니다.

\*2-20. 그 밖에 알아야 할 내용들

1. Ajax
   초창기의 웹은 특정 웹 페이지에서 다른 웹 페이지로 갈 수 있는 링크(공식 명칭은 hyperlink입니다)를 클릭하면 새로운 웹 페이지가 로드되는 방식이었습니다. 오늘날에도 당연히 쓰이고 있는 방식인데요.

하지만 화면의 일부분만 바뀌면 되는 경우에도 매번 새 페이지가 로드되는 방식은 효율적이지도 않고 사용자에게도 그다지 좋지 않은 경험을 안겨주었습니다. 그래서 2000년대 초부터는 웹의 이런 단점을 극복하기 위해서 Ajax라는 기술이 도입되었습니다.
Ajax는 웹 브라우저가 현재 페이지를 그대로 유지한 채로 서버에 리퀘스트를 보내고 리스폰스를 받아서, 새로운 페이지를 로드하지 않고도 변화를 줄 수 있게 해주는 기술입니다.

Ajax는 Asynchronous JavaScript And XML의 줄임말인데요. 이는 자바스크립트를 사용해서 비동기적으로(=사용자가 보고 있는 현재 화면에 영향을 미치지 않고 별도로 백그라운드에서 작업을 처리한다는 뜻) 리퀘스트를 보내고 리스폰스를 받는데 기반이 되는 기술들의 집합을 의미합니다. 여기서 마지막에 XML이 쓰인 것은 Ajax라는 용어가 생겨난 당시에 XML이 가장 많은 인기를 누리던 데이터 타입이었기 때문입니다. 오늘날에는 XML 말고 JSON도 꽤 많이 쓰이고 있긴 하지만요.

자, 어쨌든 지금 중요한 것은 Ajax의 원리를 이해하는 것입니다. Ajax의 원리는 여러분이 흔히 쓰는 구글 맵(Google Map) 같은 웹 서비스를 생각해보면 이해하기 쉽습니다. 구글 맵 웹 페이지를 예로 들어볼게요.

제가 지금 구글 맵에서 서울특별시 중구 을지로 쪽을 보다가 '명동 성당'의 정보가 보고 싶어졌다고 해봅시다. 그럼 명동 성당 아이콘을 클릭하면 되겠죠? 이렇게 명동 성당을 클릭했을 때, 초창기의 웹이었다면 아예 새로운 페이지를 로드해야 했을 겁니다. 하지만 오늘날 우리가 쓰는 구글 맵이 그렇지는 않죠? 실제로 명동 성당 아이콘을 클릭해보면

현재 웹 페이지는 그대로 유지되고, 단지 그 밑에 명동 성당에 관한 간단한 정보창이 떠오를 뿐입니다. 이것이 가능한 이유는 웹 브라우저가, 사용자가 보고 있는 현재 페이지를 방해하지 않고 별도로 서버로 리퀘스트를 보내고, 리스폰스를 받아왔기 때문입니다.

만약 이런 Ajax 기술이 없었다고 생각해보세요. 우리는 웹 서비스를 사용할 때마다 별로 크게 바뀌지도 않는 화면을 매번 로드하는 불편함을 느꼈을 겁니다. 하지만 Ajax 기술 덕분에 구글 맵처럼 부드러운 UX(User Experience, 사용자 경험)를 제공하는 수많은 웹 서비스들을 사용할 수 있게 된 겁니다.

그럼 자바스크립트로는 어떻게 이 Ajax 기술을 사용해서 리퀘스트를 보내고 리스폰스를 받을 수 있을까요? 앞으로는 Ajax 기술을 기반으로 한 통신을 그냥 짧게 줄여서 'Ajax 통신'이라고 할게요.

자바스크립트에서는 XMLHttpRequest라고 하는 객체를 통해 Ajax 통신을 할 수 있습니다. XMLHttpRequest를 사용하는 예시 코드는 다음과 같은데요.

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://learn.codeit.kr/api/members');
xhr.onload = function () {
console.log(xhr.response);
};
xhr.onerror = function () {
alert('Error!');
};
xhr.send();
지금 가장 첫 번째 줄의 코드에 XMLHttpRequest라고 하는 생성자 함수로 객체를 생성한 것 보이시죠? 이런 식의 코드를 작성하면 Ajax 통신을 할 수 있습니다. 궁금한 분들은 이 코드를 개발자 도구에 붙여넣고 직접 실행해보세요.

그런데 예전엔 XMLHttpRequest를 이렇게 직접 사용할 일이 많았지만 요즘에는 굳이 그렇게 하지 않아도 됩니다.(2020년 1월 기준)
그 이유에는 크게 두 가지가 있는데요.

첫 번째 이유는 XMLHttpRequest 객체 이후에 등장한 함수, 바로 이때까지 우리가 배운 fetch 함수를 사용해서 Ajax 통신을 할 수 있기 때문입니다. 이때까지 배운 fetch 함수가 Ajax 통신을 하는 함수였다니 놀랍죠? fetch 함수는 XMLHttpRequest 객체를 사용할 때에 비해 좀 더 짧고 간단한 코드로 Ajax 통신을 할 수 있게 해주는 함수입니다. 그래서 많은 개발자들의 환영을 받았죠.

두 번째 이유는 XMLHttpRequest을 기반으로 더 쓰기 편하게 만들어진 axios라는 패키지가 존재하기 때문입니다. (자바스크립트에서는 라이브러리보다는 '패키지'라는 단어를 더 일상적으로 사용하기 때문에 '패키지'라고 표현하겠습니다.)

이런 이유들 때문에 굳이 XMLHttpRequest 객체를 직접 가져다 쓸 필요성이 줄어든 것입니다.

개발 실무에서는 fetch 함수 또는 axios 패키지를 사용하는데요. 보통 axios 패키지에 좀더 다양한 기능들이 있어서 주로 axios를 쓰는 편이지만, 외부의 패키지를 설치하고 싶지 않은 경우에는 fetch 함수를 사용하기도 합니다. 그리고 일단 fetch 함수의 원리에 대해서 알아야 axios도 잘 사용할 수 있기 때문에 이번 토픽에서는 fetch 함수를 중심으로 내용을 진행하고 있는 겁니다. fetch 함수의 어떤 원리를 알아야하는지에 대해서는 챕터 3부터 알아봅시다.

자, 다시 원래의 이야기로 내용을 마무리하겠습니다. 앞으로 웹 개발을 할 때는 Ajax 통신인 것과 Ajax 통신이 아닌 것을 구분할 수 있어야 합니다. 일단 Ajax 통신이 아닌 것은 이런 태그를 사용자가 클릭하도록 해서

<a href="https://learn.codeit.kr/api/main">메인 화면으로 가기</a>
웹에서의 전통적인 방식처럼 새 페이지를 로드하게 하는 방식이고, Ajax 통신인 것은

// (위 예시를 단순화한 코드입니다)
function getLocationInfo(latitude, longitude) {
fetch('https://map.google.com/location/info?lat=latitude&lng=longitude')
.then((response) => response.text())
.then((result) => { /_ 사용자 화면에 해당 위치 관련 정보 띄워주기 _/ });
}
이런 식으로 사용자가 느낄 수 없게, 리퀘스트를 보내고 리스폰스를 받아 현재 페이지에 원하는 변화를 주는 방식이죠.

사용자 경험을 고려해서

(1) 언제 아예 새로운 페이지를 로드하고
(2) 언제 Ajax 통신을 해서 현재 페이지 내에서 부드러운 변화를 줄 건지를

잘 결정하는 것은 중요합니다.

양쪽 모두 공부해둬야 필요한 순간에 코드로 잘 구현해낼 수 있겠죠? 일단 이때까지 배운 fetch 함수가 사실은 Ajax 통신을 하는 함수였다는 사실만큼은 꼭 기억합시다!

2. GET, POST, PUT, DELETE 이외의 메소드들
   이때까지 우리는 리퀘스트에 설정할 수 있는 GET, POST, PUT, DELETE 메소드에 대해 배웠습니다. 그런데 사실 메소드에는 이것 말고 다른 것들도 있습니다. 그중에서도 알아두면 좋은 2가지 메소드를 소개합니다.

(1) PATCH
PATCH 메소드는 기존의 데이터를 수정할 때 사용하는 메소드입니다. 그럼 우리가 배운 PUT 메소드와는 어떤 차이가 있을까요?
PUT은 기존 데이터를 아예 새로운 데이터로 덮어씀으로써 수정하려고 할 때 쓰는 메소드이고, PATCH는 새 데이터로 기존 데이터의 일부를 수정하려고 할 때 쓰는 메소드입니다.

그러니까 예를 들어 서버에

{
"id": 3,
"name": "Michael",
"age": 25
}
이런 식으로 표현되는 데이터가 있을 때, 리퀘스트에 PATCH 메소드를 설정하고

{
"age": 30
}
이라는 데이터를 바디에 담아서 보내면,

{
"id": 3,
"name": "Michael",
"age": 30
}
서버의 기존 데이터는 이렇게 age 속성만 갱신되지만, 같은 리퀘스트더라도 PUT 메소드를 설정해서 보내면

{
"age": 30
}
이렇게 서버의 데이터에는 age 속성만 남게 됩니다. 어떤 차이가 있는지 이해되시나요?
이전에 배운 PUT 메소드는 서버에 존재하는 기존 데이터를 새로운 데이터로 아예 덮어쓰기하는 방식으로 수정합니다. 따라서 PUT 메소드의 경우에는 원하는 새 데이터의 온전한 모습 전체를 바디에 담아서 보내줘야 합니다. 아래의 데이터처럼 말이죠.

{
"id": 3,
"name": "Michael",
"age": 30
}
하지만 PATCH의 경우에는 보통, 리퀘스트의 바디에 있는 내용을 기존 데이터의 각 속성과 대조 및 병합(merge-patch)하면서 데이터를 수정하기 때문에 때문에, 바디에 수정할 프로퍼티의 데이터만 넣어줘도 되는 겁니다.

데이터를 수정하는 메소드 중에서 PUT은 덮어쓰기, PATCH는 일부 수정를 의미한다는 사실을 기억해두세요.

(2) HEAD
메소드에는 HEAD 메소드라는 것도 있습니다. HEAD 메소드는 GET 메소드와 동일합니다. 대신 GET 리퀘스트를 보냈을 때 받았을 리스폰스에서 바디 부분은 제외하고, 딱 헤드 부분만 받는다는 점이 다른데요. 왜 이런 메소드가 필요할까요?
예를 들어, 웹 브라우저가 서버로부터 용량이 엄청나게 큰 영상 파일을 받고자 하는 상황이라고 해봅시다. 만약 파일의 용량이 너무 큰 경우에는 파일을 받지 않으려고 하는데요. 이때 파일의 용량만 조사하기 위해서 HEAD 메소드가 담긴 리퀘스트를 보내볼 수 있습니다. 만약 https://movie.net/matrix (영화 '매트릭스') 라는 URL이 있다고 할 때 해당 URL로 HEAD 메소드가 설정된 리퀘스트를 보내면 그 리스폰스는 바디는 없고 헤드만 있을 겁니다. 대신 이때 Content-length와 같이 컨텐츠 용량을 나타내는 헤더가 있어서 파일의 용량 정보는 알게 될 수도 있는데요. 그럼 이 용량을 사용자에게 보여주고 그래도 영화 파일을 시청할 건지 물어보는 코드를 작성할 수 있겠죠? 바로 이렇게 실제 데이터가 아니라 데이터에 관한 정보만 얻으려고 하는 상황 등에 HEAD 메소드가 활용됩니다.

방금 본 것처럼 우리가 배운 GET, POST, PUT, DELETE 외에도 리퀘스트에 설정할 수 있는 메소드 종류에는 여러 가지가 있습니다. 각 메소드의 의미를 잘 이해하고 기억해두면 Web API를 설계하는데 큰 도움이 됩니다. 혹시 또 다른 메소드들에 대해서도 알고 싶다면 이 링크를 참조하세요.

3. 웹 통신 말고 다른 통신도 있어요.
   우리는 이때까지 웹에서 이루어지는 통신에 대해서 배웠습니다. 그런데 이 시점에서 한 가지 짚고 넘어가야 하는 사실이 있습니다. 사실 하나의 컴퓨터와 다른 컴퓨터가 통신하는 공간에는 웹만 있는 것은 아니라는 사실입니다. 이게 무슨 말일까요? 이전에 살펴본 웹의 특징에는 'HTTP, HTTPS 같은 프로토콜을 사용하여 통신한다'는 것도 있었죠?

하지만 컴퓨터끼리 통신하는 프로토콜에는 이것만 있는 것이 아닙니다. HTTP, HTTPS 이외에도, FTP, SSH, TCP, UDP, IP, Ethernet 등 정말 다양한 종류의 프로토콜들이 있는데요. 그리고 여기서 중요한 것은 이런 프로토콜들은 각각 네트워크 통신의 특정 계층에 속한다는 점입니다.

사실 우리가 배운 HTTP(HyperText Transmission Protocol)는

이 이미지에서 보이는 것처럼 보통, 그 밑에 TCP(Transmission Control Protocol), 그리고 그 밑에 IP(Internet Protocol), 그리고 그 밑에 Ethernet이라는 프로토콜을 기반으로 동작하고 있습니다. 그러니까 사실 HTTP나 HTTPS 프로토콜을 기반으로 한 통신은 그 하위 프로토콜을 기반으로 이루어지는 겁니다. 이때 위로 갈수록 고수준 프로토콜, 아래로 갈수록 저수준 프로토콜이라고 하는데요. HTTP는 매우 고수준에 해당하는 프로토콜임을 알 수 있습니다. '웹 개발자'라고 하면 당장은 HTTP 프로토콜 상에서 이루어지는 일만 공부한다고 해도 큰 어려움이 없을 수도 있습니다. 하지만 특히 서버 쪽을 담당하는 '백엔드 개발자'의 경우에는 서비스의 사용자 수가 늘어나서 리퀘스트의 수가 늘어날수록 HTTP 아래에 있는 프로토콜에 대해서도 어느 정도 알고 있어야 각종 성능 문제 등을 해결할 수 있습니다. 그래서 혹시 '백엔드 개발자'를 꿈꾸는 분들이라면 당장은 공부하지 않더라도 다른 프로토콜들에 대해서도 일단은 미리 관심을 가져두는 게 좋습니다.

그리고 '웹 개발자' 뿐만 아니라

예를 들어, 이렇게 HTTP 없이 TCP라는 프로토콜만으로 통신하는 코드를 짜는 개발자들도 많이 존재합니다. 이제 여기부터는 웹 개발 세계 밑에 감춰진 또 다른 개발 세계가 존재하는데요. MMORPG 게임 서버 개발이나, IOT 기기 개발 등과 같이 성능 최적화 등이 필요한 경우에는 이런 저수준 프로토콜로 통신하는 프로그램을 개발하기도 합니다. 일반 사용자에게는 웹이 컴퓨터 네트워크의 전부인 것 같지만 실제로는 웹 밑에 가려진 또 다른 거대한 세계가 있다는 사실은 기억하고 가주세요.

\*3-1. fetch 함수와 비동기 실행
fetch의 비동기 실행

\*3-2. 동기 실행과 비동기 실행
이전 영상의 코드를 다시 보겠습니다.

console.log('Start!');

fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => { console.log(result); });

console.log('End');
지금 이 코드에는 다음과 같은 2개의 콜백이 있습니다.

(1) (response) ⇒ response.text()
(2) (result) ⇒ { console.log(result); }

fetch 함수가 리퀘스트를 보내고, 서버의 리스폰스를 받게 되면 그때서야 이 콜백들이 순서대로 실행되는데요.

이 사실을 바탕으로, 전체 코드의 실행 순서를 다시 정리하자면

console.log('Start');
fetch 함수(리퀘스트 보내기 및 콜백 등록)
console.log('End');
리스폰스가 오면 2. 에서 then 메소드로 등록해뒀던 콜백 실행
이렇게 됩니다. 이렇게 특정 작업을 시작(리퀘스트 보내기)하고 완벽하게 다 처리(리스폰스를 받아서 처리)하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것을 '비동기 실행'이라고 합니다. 이에 반해 한번 시작한 작업은 다 처리하고 나서야, 다음 코드로 넘어가는, 우리에게 익숙한 방식의 실행은 '동기 실행'이라고 하는데요. 만약 이 코드에서 fetch 함수가 비동기 실행되지 않고, 동기 실행되는 함수였다고 가정한다면 실행 흐름이 어떻게 됐을까요? 이렇게 됐을 겁니다.

console.log('Start');
fetch 함수(리퀘스트 보내기)
리스폰스가 올 때까지 코드 실행이 잠시 '정지'되고, 리스폰스가 오면 필요한 처리 수행
console.log('End');
이런 순서로 코드가 실행되었을 겁니다. 동기 실행은 한번 시작한 작업을 완료하기 전까지 코드의 실행 흐름이 절대 그 다음 코드로 넘어가지 않습니다. 일단 시작한 작업을 완벽하게 처리하고 난 다음에야 그 다음 코드로 실행 흐름이 넘어가는데요. 따라서 동기 실행의 경우 코드가 보이는 순서대로, 실행됩니다.

이와 다르게 비동기 실행은 한번 작업을 시작해두고, 그 작업이 완료되기 전이더라도 콜백만 등록해두고, 코드의 실행 흐름이 바로 그 다음 코드로 넘어갑니다. 그리고 추후에 특정 조건이 만족되면 콜백이 실행됨으로써 해당 작업을 완료하는 방식이죠. 따라서 비동기 실행에서는 코드가 꼭 등장하는 순서대로 실행되는 것이 아닙니다. 그래서 코드를 해석할 때 주의해야 하는데요.

그렇다면 '비동기 실행'이라는 건 왜 존재하는 걸까요? 그건 바로 보통 '비동기 실행'이 '동기 실행'에 비해, 동일한 작업을 더 빠른 시간 내에 처리할 수 있기 때문입니다. 방금 전 fetch 함수가 '동기 실행'된다고 가정했을 때를 생각해봅시다. fetch 함수가 실행되고 리스폰스가 올 때까지 기다린다는 것은 무슨 의미일까요? 바로 리스폰스가 올 때까지는 아무런 작업도 할 수 없다는 뜻입니다. 그만큼 시간을 낭비하게 되는 셈이죠.

하지만 만약 비동기 실행이라면 일단 리퀘스트 보내기, 콜백 등록까지만 해두고, 바로 다음 작업(console.log('End');)을 시작함으로써 시간을 절약할 수 있습니다. 이 설명을 도식화하면 다음과 같습니다.

이미지 상단은 fetch 함수가 동기 실행된다고 가정했을 때의 경우,
이미지 하단은 fetch 함수가 비동기 실행되는 실제의 모습을

의미합니다. 지금 동기 실행에서는 모든 작업이 순차적으로 수행되고 있는 게 한눈에 보이죠? 이에 비해, 비동기 실행에서는 리스폰스를 기다리는 시간 동안 그 이후의 작업을 미리 처리하고 있습니다. 그래서 비동기 실행이 최종 작업 종료 시간이 더 짧다는 것을 알 수 있습니다.(물론 실제로는 비동기 실행의 경우에는 콜백을 등록하는 시간적 비용이 존재하지만 일단은 이해를 위해서 이런 부분은 생략하고 생각합시다.)

참고로, 현재 보라색 박스로 나타낸 fetch 함수 바로 다음 코드의 실행이 지금보다 더 오래 걸리는 작업이라고 가정한다면, 비동기 실행의 상대적인 작업 효율성은 더 올라갑니다. 보라색 영역이 둘 다 더 길어진다고 생각해보면 이해하실 수 있을 겁니다..

자바스크립트로 웹 통신을 하는 코드를 작성하려면 이런 비동기 실행의 원리와 그 장점에 대해 잘 이해하고 있어야 합니다.

\*3-3. 알아야하는 비동기 실행 함수들
이전 노트에서는 fetch 함수가 비동기 실행된다는 게 무슨 의미인지, 그리고 비동기 실행이 동기 실행에 비해서 가지는 장점이 무엇인지 배워봤습니다. 사실 자바스크립트에는 fetch 함수 말고도, 비동기 실행되는 함수들이 존재합니다. 그 예시들을 하나씩 살펴보겠습니다.

1. setTimeout 함수
   setTimeout 함수는, 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수입니다.

console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');
예를 들어 이런 코드가 있을 때, 지금 가운데에 있는 setTimeout 함수는 첫 번째 파라미터에 있는

() ⇒ { console.log('b'); },

이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룹니다. 그래서 이 코드를 실행하면

이렇게 a와 c가 먼저 출력되고, 약 2초가 지난 후에 b가 출력됩니다. 실제로 확인하고 싶은 분들은 직접 코드를 복사해서 개발자 도구에서 확인해보세요.

fetch 함수에서는 콜백이 실행되는 조건이, '리스폰스가 도착했을 때'였다면, setTimeout에서 콜백이 실행되는 조건은, '설정한 밀리세컨즈만큼의 시간이 경과했을 때'입니다. 어쨌든 둘 다 콜백의 실행을 나중으로 미룬다는 점에서는 비슷합니다. 이 setTimeout 함수는 아주 자주 활용되는 비동기 실행 함수이고 이번 토픽에서도 앞으로 자주 사용할 거니까 꼭 기억하세요.

2. setInterval 함수
   setInterval 함수는 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수입니다. Interval는 '간격'이라는 뜻인데요. 바로 위에서 봤던 예시 코드에서 setTimeout 부분만 setInterval로 바꿔서 실행해보겠습니다.

console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');
이렇게 쓰면 이제 b를 출력하는 콜백이 2초 간격으로 계속 실행됩니다. 실제로 확인해보면

a와 c가 출력되고, 약 2초 뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복 출력되는 것을 볼 수 있습니다. (현재 b 왼쪽에 쓰여 있는 5는 b가 다섯 번 출력되었음을 개발자 도구가 간단하게 나타낸 것입니다)

3. addEventListener 메소드
   addEventListener 메소드는 DOM 객체의 메소드인데요, 혹시 관련된 내용을 공부하고 싶으신 분들은 '인터랙티브 자바스크립트' 토픽의 아래의 레슨들을 참고하시면 됩니다.

'이벤트와 버튼 클릭' 레슨
'이벤트 핸들러 등록하기' 레슨
만약 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을 때, 실행하고 싶은 함수가 있다면

(1) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나,
(2) 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 됩니다.

이런 식으로 말이죠.

(1) onclick 속성

...

btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
console.log('Hello Codeit!');
};

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.onclick = (e) => {
console.log('Hello Codeit!');
};

...
(2) addEventListener 메소드

...

btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
console.log('Hello Codeit!');
});

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.addEventListener('click', (e) => {
console.log('Hello Codeit!');
});

...
이렇게 클릭과 같은 특정 이벤트가 발생했을 때 실행할 콜백을 등록하는 addEventListener 메소드도 비동기 실행과 관련이 있습니다. 파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(클릭 이벤트 발생)이 만족될 때(마다) 실행되기 때문입니다.

자, 이때까지 자바스크립트의 대표적인 비동기 실행 함수들을 살펴봤는데요. 그런데 이때까지 배운 fetch 함수와 이번 노트에서 본 함수들을 보면 차이점이 있습니다. 일단 이번 노트에서 배운 함수들을 보면

setTimeout(콜백, 시간)
setInterval(콜백, 시간)
addEventListener(이벤트 이름, 콜백)
이런 식으로, 함수의 아규먼트로 바로 콜백을 넣습니다. 그런데 fetch 함수는 이 함수들과는 전혀 다르게 생겼습니다. 지금 보면,

fetch('https://www.google.com')
.then((response) => response.text()) // fetch 함수가 리턴하는 객체의 then 메소드를 사용해서 콜백을 등록
.then((result) => { console.log(result); });
fetch 함수는 콜백을 파라미터로 바로 전달받는 게 아니라, fetch 함수가 리턴하는 어떤 객체의 then 메소드를 사용해서 콜백을 등록하는데요.

위에서 본 함수들처럼, fetch 함수도 이런 식으로 코드를 써야할 것만 같은데.

fetch('https://www.google.com', (response) => response.text())
왜 fetch 함수만 사용하는 형식이 다른 걸까요? 그건 바로 fetch 함수는, 좀 더 새로운 방식으로 비동기 실행을 지원하는 자바스크립트 문법과 연관이 있기 때문입니다. 사실 fetch 함수는 Promise 객체라는 것을 리턴하고, 이 Promise 객체는 비동기 실행을 지원하는 또 다른 종류의 문법에 해당하는데요. 이게 무슨 말인지 다음 영상에서 살펴봅시다.

\*3-4. fetch 함수는 Promise 객체를 리턴합니다
promise: 작업에 관한 '상태 정보'

-promise 작업의 3가지 상태
pending: 진행 중
fulfilled: 성공 (작업 성공 정보를 가짐)
rejected: 실패 (작업 실패 정보를 가짐)

\*3-5. fetch 함수를 사용한 코드, 다시 해석하기
.then: promise 객체의 메소드. promise 객체가 pending상태에서 fulfilled 상태가 될 때 실행할 콜백을 등록하는 메소드
-promise 객체의 작업 성공 결과는 첫번째 콜백의 파라미터로 넘어온다. response

\*3-6. Promise Chaining이란?
Promise Chaining: promise 객체에 then 메소드를 연속적으로 붙이는 것.
Chaining: 이어붙이기, 연결하기
then: 새로운 promise 객체를 리턴한다.

-콜백에서

1. promise 객체를 리턴하는 경우 -콜백이 리턴한 promise 객체가 fulfilled 상태가 되면 then 메소드가 리턴한 promise 객체도 fulfilled 상태가 되고 동일한 작업 성공 결과를 갖게 된다. -콜백이 리턴한 promise 객체가 rejected 상태가 되면 then 메소드가 리턴한 promise 객체도 rejected 상태가 되어 동일한 작업 실패 정보를 갖게 된다.

2. promise 객체가 아닌 값을 리턴하는 경우
   단순 숫자, 문자열, 일반객체 등을 리턴하게 되면 then 메소드가 리턴했던 promise 객체는 fulfilled 상태가 되고 콜백의 리턴 값을 작업 성공 결과로 갖게된다.

\*3-7. text, json 메소드도 Promise 객체를 리턴해요
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => {
const users = JSON.parse(result);
// ...
});

console.log('End');
이전 챕터에서는 위 코드에서 보이는 것처럼 response 객체의 text 메소드로 리스폰스의 내용을 추출(response.text();)하고 이것을 Deserialize하거나(JSON.parse(result);)

console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {
// ...
});

console.log('End');
response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(response.json())할 수 있다는 사실을 배웠습니다.

그런데 그 때 배우지 않았던 중요한 사실 하나가 있습니다. 그것은 바로 이 text 메소드와 json 메소드가 사실은 Promise 객체를 리턴하는 메소드라는 사실입니다. 이게 무슨 말인지 하나씩 설명해드릴게요.

1. text 메소드
   fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 문장이 조금 기니까 반복해서 읽어보세요. 이때 그 작업 성공 결과는 string 타입인데요. 이때 그 값이 만약 JSON 데이터라면 이전에 배운 것처럼 JSON 객체의 parse 메소드로 Deserialize를 해줘야합니다.(JSON.parse(result);)

2. json 메소드
   fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 만약 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됩니다.

자, 이때까지 우리가 계속 봐온 response 객체의 text 메소드와 json 메소드가 사실 Promise 객체를 리턴하는 메소드였다는 사실, 놀랍죠?

바로 이 내용을 이전 영상에서 배웠던 내용인 'then 메소드가 리턴했던 Promise 객체(A)는 그 콜백에서 리턴한 Promise 객체(B)와 동일한 상태와 결과를 갖게 된다'는 규칙과 연관지어서 생각해봅시다. 이 말은 곧, 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작된다는 말과도 같은데요.

이때문에 response 객체의 text 메소드 또는 json 메소드 이후에 등장하는 then 메소드부터는 string 타입의 값이나 자바스크립트 객체를 갖고 바로 원하는 작업을 할 수 있는 겁니다. text, json 메소드가 Promise 객체를 리턴하는 메소드라는 사실, 잘 기억하세요!

\*3-8. Promise Chaining이 필요한 경우
Promise Chaining: 비동기 작업을 순차적으로 수행해야할 때 전체 코드를 좀 더 깔끔하게 나타내기 위해서 사용한다.

\*3-10. rejected 상태가 되면 실행할 콜백
.then((response) => response.text(), (error) => { console.log(error); })
첫번째 콜백은 fulfilled 상태일 때 실행, 두번째 콜백은 rejected 상태가 되면 실행

\*3-11. then 메소드 완벽하게 이해하기
Promise 객체를 배울 때는 then 메소드에 관해서만 확실히 알면 딱히 어려운 내용이 없습니다. 이번 노트에서는 Promise의 then 메소드에 관한 규칙을 제대로 깊이있게 배워봅시다.

잠깐 이 코드를 보세요.

const successCallback = function () { };
const errorCallback = function () { };

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
.then(successCallback, errorCallback); // Promise-B
이때까지 배운 내용을 바탕으로 이 코드를 해석해봅시다. 일단, 이 코드에서

(1) fetch 메소드가 리턴하는 Promise 객체를 Promise-A 객체라고 하고,
(2) then 메소드가 리턴하는 Promise 객체를 Promise-B 객체라고 해봅시다.

그리고 fetch 함수의 작업이 성공하는 경우와 실패하는 경우로 나누어서 생각해보겠습니다.

fetch 함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우 : then 메소드 안의 "첫 번째" 콜백인 successCallback이 실행됩니다.
fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우 : then 메소드 안의 "두 번째" 콜백인 errorCallback이 실행됩니다.
자, 여기서 중요한 점은 Promise-B는, 실행된 successCallback 또는 errorCallback에서 무엇을 리턴하느냐에 따라

그 상태(fulfilled or rejected)와
결과(작업 성공 결과 or 작업 실패 정보)가
결정된다는 점입니다.

이번 노트에서는 then 메소드가 리턴한 Promise 객체가, 콜백이 리턴하는 값에 따라 어떻게 달라지는지 경우를 나누어서 다뤄볼 겁니다. 이전 영상에서 배운 내용도 있고, 새롭게 배우는 내용도 있으니까 집중해서 잘 읽어보세요.

1. 실행된 콜백이 어떤 값을 리턴하는 경우
   successCallback이 실행되든, errorCallback이 실행되든, 실행된 콜백에서 어떤 값을 리턴하는 경우입니다. 이때 그 값의 종류에 따라

Promise 객체인 경우와
Promise 객체 이외의 경우,
이 2가지 경우로 다시 나눌 수 있습니다.

(1) Promise 객체를 리턴하는 경우
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((result) => { console.log(result) });
위 코드에서 (response) ⇒ response.json() 이 콜백은 Promise 객체를 리턴하는 코드입니다. response 객체의 json 메소드가 Promise 객체를 리턴한다는 사실은 이전 노트에서 배웠죠? 이렇게 콜백에서 Promise 객체를 리턴하는 경우에는 그 콜백을 등록한 then 메소드가 리턴했던 Promise 객체가 콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라 갖게 됩니다. 즉, 위 코드의 첫 번째 then 메소드가 리턴했던 Promise 객체는, response 객체의 json 메소드가 리턴한 Promise 객체가 추후에 갖게 되는 상태와 결과를 그대로 따라서 갖게 된다는 뜻입니다.

좀 더 편하게 기억하기 위해서는 그냥 콜백에서 리턴하는 Promise 객체를 then 메소드가 그대로 리턴한다고 생각하셔도 됩니다. 그럼 이제 그 다음부터는 콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나간다고 보면 되죠.

(2) Promise 객체 이외의 값을 리턴하는 경우
콜백이 꼭 Promise 객체만을 리턴하는 것은 아니겠죠? 그냥 단순한 숫자, 문자열, 일반 객체 등을 리턴할 수도 있는데요. 이런 경우에 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고 작업 성공 결과로 그 값을 갖게 됩니다.

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json(), (error) => 'Try again!')
.then((result) => { console.log(result) });
예를 들어, 지금 인터넷이 안 되는 상황에서 이 코드를 실행했다고 해봅시다. 그럼 fetch 함수의 작업이 실패해서 두 번째 콜백인 (error) ⇒ 'Try again! 이 실행되겠죠? 두 번째 콜백은 'Try again!'이라는 문자열을 리턴하고 있는데요. 이렇게 하면 해당 콜백을 등록한 then 메소드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 성공 결과로 'Try again' 문자열을 갖게 됩니다.

자, 이때까지는 이전 영상들에서 모두 배운 내용들입니다. 아래부터는 조금 색다른 규칙들이 등장합니다. 집중해서 읽어봅시다.

2. 실행된 콜백이 아무 값도 리턴하지 않는 경우
   // Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json(), (error) => { alert('Try again!'); })
.then((result) => { console.log(result) });
방금 전과 같은 상황에서 콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝난다고 해봅시다. 그럼 결과적으로 이 콜백은 아무런 값도 리턴하지 않은 것과 같은데요. 자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주됩니다. 따라서 방금 전 1. (2) 규칙에 따라 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined를 갖게 됩니다.

3. 실행된 콜백 내부에서 에러가 발생했을 때
   콜백이 실행되다가 에러가 발생하는 경우가 있습니다. 예를 들어

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
...
add(1, 2); // ReferenceError 발생
...
});
이렇게 정의하지도 않은 함수를 콜백에서 사용해서 에러가 발생하거나

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
...
throw new Error('failed');
...
});
특정 경우에 인위적으로 throw 문을 써서 에러를 발생시키는 경우도 있을 겁니다.

이렇게 콜백이 실행되다가 에러가 발생한다면, then 메소드가 리턴했던 Promise 객체는 어떻게 될까요? 이 경우에는 Promise 객체가 rejected 상태가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 됩니다. 잠깐 아래의 코드를 개발자 도구에서 실행해보겠습니다.

const promise = fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { throw new Error('test'); });
promise 를 입력하여 then 메소드가 리턴한 Promise 객체의 내부를 살펴보면 이렇게 생겼는데요.

지금 [[PromiseState]]는 Promise 객체의 상태를, [[PromiseResult]]는 Promise 객체의 결과(작업 성공 결과 또는 작업 실패 정보)를 나타내는 내부 슬롯입니다.(내부 슬롯이란 자바스크립트 실행 엔진에서 내부적으로 관리하는 속성이라고 생각하시면 됩니다. 지금 당장 알아야할 내용은 아니니 Promise 객체에 집중합시다)
자세히 보면 현재 Promise 객체가 rejected 상태이고, 발생한 Error 객체를 그 작업 실패 정보로 갖고 있다는 것을 알 수 있습니다. 이렇게 콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 rejected 상태가 되고, 그 작업 실패 정보로 해당 Error 객체를 갖게 된다는 점, 잘 기억하세요!

4. 아무런 콜백도 실행되지 않을 때
   // Internet Disconnected

fetch('https://www.google.com') // Promise-1
.then((response) => response.text()) // Promise-2
.then((result) => { console.log(result) }, (error) => { alert(error) });
then 메소드의 아무런 콜백도 실행되지 않는 경우가 있습니다. 지금 인터넷을 끊고 나서 위 코드를 실행했다고 합시다. 그럼 fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되기 때문에, 첫 번째 then 메소드의 두 번재 콜백이 실행되어야 합니다. 그런데 지금 두 번째 콜백이 없죠? 이런 경우에는 아무런 콜백도 실행되지 않는데요. 이런 경우에 then 메소드가 리턴한 Promise-2 객체는 어떻게 될까요? 이런 경우에 then 메소드가 리턴했던 Promise-2 객체는, 이전 Promise 객체와 동일한 상태와 결과를 갖게 됩니다. 그러니까 지금 Promise-2 객체는 Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게 됩니다.

그럼 rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행됩니다. 이렇게 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어진다는 사실, 잘 기억하세요.

자, 이때까지 Promise 객체의 then 메소드가 리턴한 Promise 객체의 상태가, then 메소드 안의 콜백이 리턴하는 값에 따라 무슨 상태와 결과를 갖게 되는지 배웠는데요. 사실 위의 내용을 이해하지 못해도, Promise 객체를 당장 사용하는 데는 문제가 없을 수도 있습니다. 하지만 나중에 Promise 객체를 사용하는 코드에서 문제가 생기거나 고난이도의 코드를 작성해야 할 때는 이런 기본적인 규칙을 모르면 내가 무엇을 잘못했는지조차 알 수 없게 됩니다. 따라서 이번에 배울 때 제대로 배우고 넘어갑시다.

\*3-14. catch 메소드
catch: Promise 객체가 rejected 상태가 되면 실행할 콜백을 등록하는 메소드

\*3-15. catch 메소드 이해하기
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.catch((error) => { console.log(error); })
.then((result) => { console.log(result); });
이전 영상에서는 다음과 같은 catch 메소드를 봤습니다. 그런데 어떻게 fetch 함수에서 발생한 에러가 catch 메소드 안의 콜백에까지 전달될 수 있는 걸까요? 사실 이 내용은 이전의 'then 메소드 완벽하게 이해하기' 노트를 잘 읽었다면 바로 이해할 수 있는 내용인데요. 지금 이 코드를 이렇게 수정해볼게요.

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
.then((response) => response.text()) // Promise-B
.then(undefined, (error) => { console.log(error); }) // Promise-C
.then((result) => { console.log(result); }); // Promise-D
catch 메소드는 사실 then 메소드의 첫 번째 인자로 undefined을 넣은 것과 같다고 했죠? 그래서 catch 메소드를 then 메소드로 변환해봤습니다. 이 코드에서 fetch 함수와 각각의 then 메소드가 리턴하는 Promise 객체를 순서대로 Promise-A, B, C, D라고 합시다. 그리고 각각의 Promise의 상태가 어떻게 변하는지 살펴봅시다.

일단 fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 되면, 첫 번째 then 메소드의 두 번째 콜백이 실행되어야 합니다. 하지만 지금 첫 번째 then 메소드에는 두 번째 콜백이 없기 때문에 아무 콜백도 실행되지 않는데요. 이런 경우에는 어떻게 된다고 했죠? Promise-B 객체가 Promise-A와 똑같은 rejected 상태가 되고, 동일한 작업 실패 정보를 갖게 됩니다! 혹시 기억이 안 나면 'then 메소드 완벽하게 이해하기' 노트에서 4. 아무런 콜백도 실행되지 않을 때 부분을 보고 와주세요.

그럼 이제 rejected 상태가 된 Promise-B에 붙은 then 메소드에는 두 번째 콜백이 있기 때문에 이 두 번째 콜백이 실행됩니다. 즉, catch 메소드의 콜백이 실행되는 거죠. 어떻게 fetch 함수의 에러가 catch 메소드의 콜백에까지 전달될 수 있는지 이제 아시겠죠? then 메소드의 작동 원리만 잘 기억하고 있다면 딱히 어려운 내용은 아닙니다.

자, 그럼 보너스 문제를 하나 드릴게요. 이 코드를 실행하면 최종적으로 무엇이 출력될까요?

// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
.then((response) => response.text()) // Promise-B
.then(undefined, (error) => { console.log(error); }) // Promise-C
.then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D
방금 전과 동일한 코드이고, 대신 마지막 console.log에 Quiz:라는 단어가 붙어있습니다. 이 단어 옆의 result로 무엇이 출력되는지가 문제인데요. 코드를 실행해보면

undefined가 출력되네요. 왜 그런 걸까요?

catch 메소드는 사실 then 메소드라고 했으니까 이것을 기억하면 이해할 수 있습니다. 지금 catch 메소드 안의 콜백이 실행되었을 때 무슨 값을 리턴했나요? 아무 값도 리턴하지 않았는데요. 이렇게 자바스크립트에서는 아무 값도 리턴하지 않은 경우에는 undefined를 리턴한 것으로 간주한다고 했었죠? 따라서 'then 메소드 완벽하게 이해하기' 노트에서 배운 것처럼 catch 메소드가 리턴한 Promise 객체는 fulfilled 상태가 되면서, undefined를 작업 성공 결과로 가지게 되는 겁니다. 그래서 그 뒤의 then 메소드의 콜백의 파라미터로 undefined가 넘어가서 undefined가 출력된 겁니다.

\*3-16. catch 메소드는 마지막에 씁니다
catch 메소드는 마지막에 쓰기.

\*3-18. catch 메소드를 여러 개 쓰는 경우
우리는 이제 catch 메소드를 Promise Chain 가장 마지막에 붙임으로써, 중간에 에러가 발생해서 어느 Promise 객체가 rejected 상태가 되더라도 항상 대처할 수 있도록 해야 한다는 걸 배웠습니다. 하지만 catch 메소드를 마지막뿐만 아니라 Promise Chain 중간중간에 쓰는 경우도 존재합니다. 만약 중간에 에러가 발생해도 catch 메소드가 그 대안을 뒤로 넘겨줄 수 있으면 catch 메소드를 중간에 써도 되는데요.

아래 코드를 잠깐 봅시다.

fetch('https://friendbook.com/my/newsfeeds')
.then((response) => response.json()) // -- A
.then((result) => { // -- B
const feeds = result;
// 피드 데이터 가공...
return processedFeeds;
})
.catch((error) => { // -- C
// 미리 저장해둔 일반 뉴스를 보여주기  
 const storedGeneralNews = getStoredGeneralNews();
return storedGeneralNews;
})
.then((result) => { /_ 화면에 표시 _/ }) // -- D
.catch((error) => { /_ 에러 로깅 _/ }); // -- E
이 코드는 어떤 SNS 웹 사이트에서 나에게 최적화된 뉴스피드(newsfeed)를 보여주는 코드라고 가정해봅시다. 만약 서버로부터 뉴스피드가 잘 조회되면 현재 코드에서 A, B, D 줄에 있는 콜백들이 잘 실행되고, 사용자에게 뉴스피드가 잘 표시되겠죠? 하지만 만약 사용자의 컴퓨터가 인터넷에 연결되어 있지 않은 상태라서 fetch 함수의 작업이 실패한다면 어떻게 될까요? 그럼 이제 이 Promise Chain의 작업은 실패했다고 생각하고, 이전에 배운 것처럼 그냥 마지막에만 catch 메소드를 두고 끝내면 되는 걸까요? 꼭 그렇지는 않습니다. 만약 작업을 살릴 수 있는 방법이 있다면 살리는 게 좋겠죠?

지금 C줄에 있는 콜백을 보세요. fetch 함수의 작업이 실패하면 C 줄의 콜백이 실행됩니다. 사실, 이 SNS 서비스의 웹 페이지에서는 사용자가 매번 뉴스피드를 볼 때마다, 나중에 오프라인 상태가 될 때를 대비해서 모든 사람이 공통으로 볼 수 있는, 텍스트로만 이루어진 최근 일반 뉴스 데이터를 갱신해서 웹 브라우저에 저장한다고 해봅시다. C줄의 콜백은 바로 이렇게 저장해둔 일반 뉴스 데이터를 그대로 가져오는 기능을 합니다. 이렇게 되면 인터넷이 안 되는 상황에서도 나만을 위한 최적화된 뉴스피드는 못 보지만 일반적인 세상 뉴스는 사용자가 볼 수 있게 되겠죠?

이렇게 Promise Chain 중에서 비록 에러가 발생했다고 해도 만약 실패한 작업 대신 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황이라면 catch 메소드를 중간에 사용하기도 합니다. 그러니까 Promise Chain 중에서 단 하나의 작업이라도 실패하면 전체 작업이 실패했다고 봐도 되는 경우에는 그냥 Promise Chain 마지막에만 catch 메소드를 써주면 되겠지만, 어떤 작업들은 에러가 발생하더라도 다른 방식으로 복구해서 살려낼 방법이 있다면 catch 메소드 안의 콜백에서 그런 복구 작업을 해주면 되는 겁니다. 지금 위 코드에서는 미리 저장해둔 일반 뉴스 데이터를 구해오는 getStoredGeneralNews 함수를 실행하는 것처럼요.

catch 메소드를 Promise Chain의 마지막에 늘 써줘야 하는 것은 맞지만, 작업을 살릴 방법이 있다면 Promise Chain 중간에 catch 메소드를 써도 된다는 사실, 잘 기억해두세요.

\*3-19. finally 메소드
.finally(() => { console.log(); });
항상 무조건 실행해야 하는 코드가 있을 때 사용한다.

\*3-22. Promise 객체는 왜 등장했을까?
이때까지 우리는 Promise Chaining, then/catch/finally 메소드 등 Promise 객체에 관한 많은 것들을 배웠습니다. 그런데 여기서 궁금한 점이 하나 있습니다. Promise 객체는 왜 등장한 걸까요?

사실 Promise 객체가 등장하기 전에도 비동기적인 처리를 할 수 있는 방법은 있었습니다.
이전 노트에서 배운 setTimeout 함수나, addEventListener 메소드처럼요.

setTimeout(callback, milliseconds);
addEventListener(eventname, callback);
이것들은 모두 직접 파라미터에 콜백을 전달하는 형식으로 정의되어 있는데요. 만약 fetch 함수를 이런 식으로 만들었다면

fetch('https;//first.com', callback)
fetch 함수도 이런 식으로 사용했었겠죠? 그런데 왜 이런 방법이 선택되지 않고, 굳이 Promise 객체라는 문법이 도입된 것일까요?
그 이유는 바로 함수에 콜백을 직접 넣는 형식은 콜백 헬(callback hell)이라고 하는 문제를 일으킬 수도 있기 때문입니다.

잠깐 이 코드를 봅시다. 만약 fetch 함수가 지금과 같이 Promise 객체를 리턴하는 게 아니라 setTimeout 함수처럼 콜백을 직접 집어넣는 형식의 함수였다면 우리는 여러 비동기 작업을 순차적으로 수행해야할 때

fetch('https://first.com', (response) => {
// Do Something
fetch('https://second.com', (response) => {
// Do Something
fetch('https;//third.com', (response) => {
// Do Something
fetch('https;//fourth.com', (response) => {
// Do Something
});
});
});
});
이런 식의 코드를 작성해야 했을 겁니다. 지금 fetch 함수 안의 콜백에 fetch 함수가 있고 그 함수의 콜백 안에 fetch 함수가 있고 또.. 계속 이런 식으로 들어가있죠? 그런데 이 코드를 보면 어떤 느낌이 드시나요? 뭔가 읽기 어렵고 복잡해 보이죠? 한마디로 가독성이 떨어집니다. 그나마 지금은 실제 코드가 들어가야 할 자리에 "// Do Something" 이라는 주석이 들어가 있어서 괜찮지만, 실제로 필요한 코드들까지 들어가게 되면 이 코드의 가독성은 현저하게 떨어지게 되는데요. 이런 현상을 콜백 지옥 또는 콜백 헬(callback hell)이라고 합니다. 또는 지옥의 피라미드(Pyramid of Doom)라고도 합니다.

하지만 우리가 배웠던 대로 fetch 함수는 Promise 객체를 리턴하기 때문에

fetch('https://first.com')
.then((response) => {
// Do Something
return fetch('https://second.com');
})
.then((response) => {
// Do Something
return fetch('https://third.com');
})
.then((response) => {
// Do Something
return fetch('https://third.com');
});
이런 식으로 Promise Chaining을 해서 좀 더 깔끔한 코드로 여러 비동기 작업을 순차적으로 처리할 수 있는데요.
이렇게 Promise 객체를 사용하면 callback hell 문제를 해결할 수 있습니다.

이 뿐만 아니라 기존에 콜백을 직접 넣는 방식에 비해 Promise 객체의 문법은 비동기 작업에 관한 좀 더 세밀한 개념들이 반영되어 있습니다. 이전의 방식에서는 콜백에 필요한 인자를 넣어주고 실행하면 되는 단순한 방식이었다면, Promise 객체 문법에는 pending, fulfilled, rejected 상태, 작업 성공 결과 및 작업 실패 정보(이유), then, catch, finally 메소드 등과 같은 비동기 작업에 관한 보다 정교한 설계가 문법 자체에 반영되어 있다는 것을 알 수 있습니다.

바로 이렇게 Promise 객체라는 개념은,

(1) callback hell 문제를 해결하고, 이에 더해서
(2) 비동기 작업 처리에 관한 좀 더 세밀한 처리를 자바스크립트 문법 단에서 해결하기 위해 등장했고,

그 유명한 자바스크립트의 2015년도 표준인 ES6(=ES2015)에 추가되었습니다.

\*3-24. 직접 만들어보는 Promise 객체
const p = new Promise((resolve, reject) => {
// setTimeout(() => { resolve('success'); }, 2000);
// setTimeout(() => { reject(new Error('fail')); }, 2000);
});
p.then((result) => { console.log(result); });
p.catch((error) => { console.log(error); });

->executor 함수

resolve 파라미터: 생성될 Promise 객체를 fulfilled 상태로 만들 수 있는 함수가 연결됨.
reject 파라미터: 생성될 Promise 객체를 rejected 상태로 만들 수 있는 함수가 연결됨.

\*3-25. Promisify
이전 영상에서는 직접 Promise 객체를 만드는 방법을 배웠습니다. 그럼 언제 이런 식으로 Promise 객체를 직접 만들게 되는 걸까요? 다양한 경우들이 있지만, 전통적인 형식의 비동기 실행 함수를 사용하는 코드를, Promise 기반의 코드로 변환하기 위해 Promise 객체를 직접 만드는 경우가 많습니다. 각각의 예시를 통해 이게 무슨 말인지 이해해봅시다.

1. setTimeout 함수 예시
   예를 들어 이런 wait이라는 함수가 있다고 합시다.

function wait(text, milliseconds) {
setTimeout(() => text, milliseconds);
}
wait 함수는 특정 밀리세컨즈만큼 시간이 지난 후에 text 파라미터로 전달받은 값을 리턴하는 함수입니다. 지금 보이는 setTimeout 함수는 이전에 '알아야하는 비동기 실행 함수들' 노트에서 배웠었죠? 이 wait 함수를 Promise Chaining 코드에서 사용해볼게요.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => { console.log(result); });
바로 이 Promise Chaining 코드에 wait 함수를 추가해볼 건데요. 이렇게 써보겠습니다.

function wait(text, milliseconds) {
setTimeout(() => text, milliseconds);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
.then((result) => { console.log(result); });
기존 코드에 두 번째 then 메소드를 추가하고, 그 안에서 wait 함수를 호출했습니다. 이렇게 쓰면 2초 후에 리스폰스의 내용 뒤에 by Codeit이라는 문구를 붙여서 출력될 것 같은데요. 정말 그렇게 되는지 확인해봅시다.

코드를 실행해보면,

리스폰스의 내용과 by Codeit이 출력되지 않았습니다. 그 대신 undefined가 출력되었는데요.

왜 그런 걸까요?
그 이유는 바로 wait 함수에 있습니다.

function wait(text, milliseconds) {
setTimeout(() => text, milliseconds);
}
이 wait 함수는 내부에서 setTimeout 함수를 호출합니다. 그리고 setTimeout 함수의 첫 번째 파라미터로 들어간 콜백이 2초 후에 text를 리턴하죠. 그런데 여기서 혼동하면 안 되는 것은 wait 함수가

...
.then((result) => { return wait(`${result} by Codeit`, 2000); })
...
이 두 번째 then 메소드 안의 콜백에서 실행될 때,

wait 함수는 setTimeout 함수를 실행할 뿐 아무것도 리턴하지 않는다는 사실입니다.
setTimeout 함수 안의 콜백이 2초 후에 리턴하는 text는, wait 함수의 리턴값이 아닙니다.

이 사실에 유의해야 하는데요. wait 함수는 단지 setTimeout 함수를 실행하고 아무것도 리턴하지 않는 함수일 뿐입니다. 그리고 자바스크립트에서는 이전에 배운대로 함수에서 아무것도 리턴하지 않으면 undefined를 리턴하는 것으로 간주하기 때문에 wait 함수의 리턴값은 undefined입니다.

따라서 세 번째 then 메소드의 콜백으로 undefined가 넘어가고, 그래서 위 이미지에서 보이는 것처럼 undefined가 출력된 겁니다.

setTimeout은 비동기 실행되는 함수인데요. Promise Chaining 안에서 이렇게 비동기 실행되는 함수를 바로 사용하면, 나중에 실행되는 부분의 리턴값(여기서는 text)를 Promise Chain에서 사용할 수 없게 됩니다.

이 문제를 해결하려면 이전 영상에서 배웠던 Promise 객체를 직접 생성하는 방법을 사용하면 됩니다. wait 함수를 이렇게 수정해볼게요.

// function wait(text, milliseconds) {
// setTimeout(() => text, milliseconds);
// }

function wait(text, milliseconds) {
const p = new Promise((resolve, reject) => {
setTimeout(() => { resolve(text); }, 2000);
});
return p;
}
지금 wait 함수 안에서 Promise 객체를 직접 생성했고, executor 함수 안에서 setTimeout 함수를 호출했습니다. 그리고 setTimeout 함수 안의 콜백에서 resolve 함수를 호출하는데 이 때 그 아규먼트로 text를 넣었습니다. 그렇다면 Promise 객체 p는 2초 후에 fulfilled 상태가 될 것이고, 그 작업 성공 결과는 파라미터 text의 값이 될 될 것입니다. wait 함수는 이제 Promise 객체 p를 리턴합니다.

자, 이 상태에서 코드를 다시 실행해보면

function wait(text, milliseconds) {
const p = new Promise((resolve, reject) => {
setTimeout(() => { resolve(text); }, 2000);
});
return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => wait(`${result} by Codeit`, 2000)) // 2초 후에 리스폰스의 내용 뒤에 'by Codeit' 추가하고 리턴
.then((result) => { console.log(result); });

이번에는 약 2초 후에 리스폰스의 내용이 잘 출력되고,

리스폰스의 내용 맨 마지막에는 by Codeit이라는 문구가 잘 붙어서 출력되는 것을 알 수 있습니다.

방금처럼 기존의 비동기 실행 함수(여기서는 setTimeout)의 콜백이 리턴하는 값을 Promise Chain에서 사용하고 싶다면, 해당 함수를 감싸서 Promise 객체를 직접 생성하는 코드를 작성해야 합니다. 그리고 그 Promise 객체를 리턴해야 방금처럼 Promise Chain에서 해당 리턴값을 받아서 사용할 수 있습니다.

이렇게 전통적인 형식의 비동기 실행 함수를 Promise 객체로 감싸서 그 Promise 객체를 리턴하는 형식으로 만드는 작업을 Promisify(프로미스화하다)라고 하는데요. 앞으로도 이 Promisify라는 용어를 사용하겠습니다. 계속 내용을 읽어봅시다.

2. 콜백 헬(callback hell)과 Promise
   이번에는 Promisify의 또 다른 예시를 보겠습니다. 그런데 이번에는 브라우저가 아니라 조금 다른 환경에서의 코드를 볼 건데요. 바로 Node.js라고 하는 환경입니다. 오늘날 자바스크립트가 실행되는 환경에는 웹 브라우저뿐만 아니라 Node.js라고 하는 것도 있습니다. 이 Node.js는 오늘날 자바스크립트를 서버에서도 실행할 수 있게 해주는 또 다른 '자바스크립트 실행 환경'인데요. 이 Node.js에서는 브라우저에서와는 또 다른 비동기 함수들이 제공됩니다. (Node.js가 뭔지 더 궁금하신 분들은 이 영상을 참고하세요.)

Node.js에는 다음과 같이 특정 파일의 내용을 읽기 위해 사용되는 readFile이라는 비동기 실행 메소드가 있습니다.

fs.readFile('file1.txt', 'utf8', (error, data) => {
if (err) {
console.log(err);
} else {
console.log(data);
}
});
여기서 fs는 readFile 메소드를 가진 객체로, 파일에 관한 기능들을 갖고 있습니다. 일단 여기서 당장 중요한 내용은 아니니까 readFile 메소드에만 집중합시다. readFile 메소드는 첫 번째 파라미터로 파일의 이름, 두 번째 파라미터로 파일 해석 기준(인코딩 기준), 세 번째 파라미터로 콜백을 받는데요. readFile 함수는 파일을 읽다가 에러가 발생하면 콜백의 첫 번째 파라미터(error)에, 해당 에러 객체를 전달하고 콜백을 실행합니다. 만약 파일을 정상적으로 다 읽었으면 콜백의 두 번째 파라미터(data)에, 읽어들인 파일 내용을 전달하고 콜백을 실행하는데요.

이 readFile 메소드도, 콜백을 파라미터에 바로 넣는 비동기 실행 함수라는 점에서 setTimeout 함수, addEventListener 메소드와 비슷합니다. 그런데 이런 형식의 함수(또는 메소드)들은 한 가지 단점이 있다고 했었죠?(참고) 그건 바로 콜백 헬(callback hell) 문제입니다. 예를 들어, 위 코드에서 이제 file1.txt 파일의 내용을 출력하고 나서 그 다음에 file2.txt라는 파일의 내용을 또 출력해야한다고 해봅시다. 그럼 코드가 이렇게 되겠죠?

fs.readFile('file1.txt', 'utf8', (error1, data1) => {
if (error1) {
console.log(error1);
} else {
console.log(data1);
fs.readFile('file2.txt', 'utf8', (error2, data2) => {
if (error2) {
console.log(error2);
} else {
console.log(data2);
}
});
}
});
이렇게 코드를 쓰면 file1.txt의 내용이 출력되고, 그 다음에 file2.txt의 내용이 출력될 겁니다. 코드가 좀 복잡해졌지만 아직은 읽을만한 것 같습니다. 그런데 이제 그 다음으로 file3.txt의 내용도 출력해야 한다고 해봅시다.

그렇다면

fs.readFile('file1.txt', 'utf8', (error1, data1) => {
if (error1) {
console.log(error1);
} else {
console.log(data1);
fs.readFile('file2.txt', 'utf8', (error2, data2) => {
if (error2) {
console.log(error2);
} else {
console.log(data2);
fs.readFile('file3.txt', 'utf8', (error3, data3) => {
if (error3) {
console.log(error3);
} else {
console.log(data3);
}
});
}
});
}
});
코드가 이렇게 됩니다. 이제 코드를 읽기 너무 어려워지지 않았나요?

콜백을 바로 파라미터에 집어넣는 전통적인 형식의 비동기 실행 함수들은 이런 문제가 있습니다. 바로 순차적으로 비동기 실행 함수들을 실행하려고 하면 콜백 안에 또 콜백이 있고, 그 안에 또 콜백이 있는 콜백 헬(콜백 지옥, callback hell) 현상을 초래하게 된다는 겁니다.

실제로 실무에서 개발을 하다 보면 이런 콜백 헬이 아주 큰 문제가 됩니다. 그런데 이런 함수들은 Promise 객체를 리턴하는 것도 아니고 애초에 이런 형식으로 정의되어 있기 때문에 문제를 해결하기가 어려워 보이는데요. 이 문제에 대한 대표적인 해결책이 바로 우리가 배운 Promisify입니다.

지금 이 readFile 메소드를 Promisify해보겠습니다.

function readFile_promisified(filename) {
const p = new Promise((resolve, reject) => {
fs.readFile(filename, 'utf8', (error, data) => {
if (error) {
reject(error); // 에러 발생 시 -> rejected
} else {
resolve(data); // 파일 내용 읽기 완료 -> fulfilled
}
});
});
return p;
}
이런 식으로 readFile_promisified라는 이름의 함수를 정의했는데요. 지금 함수 안에서는 Promise 객체를 직접 생성하고 있습니다.
그리고 Promise 객체가 생성될 때 실행되는 executor 함수 안에서는 fs 객체의 readFile 메소를 호출했습니다.

여기서 중요한 것은 작업을 수행하다가 에러가 나면 readFile 함수의 콜백에서

... (error, data) => {
if (error) {
reject(error); // 에러 발생 시 -> rejected
} else {
resolve(data); // 파일 내용 읽기 완료 -> fulfilled
}
}
reject 함수를 호출하고, 파일의 내용을 정상적으로 다 읽었을 때는 resolve 함수를 호출한다는 사실입니다. 그리고 reject 함수의 파라미터에는 error 객체를, resolve 함수의 파라미터에는 파일의 내용인 data를 전달했는데요. 이 각각은, 생성된 Promise 객체의 작업 실패 정보 또는 작업 성공 결과가 되겠죠?

이제 readFile 메소드를 Promisify해서 만든 readFile_promisified 함수를 사용해서 위의 콜백 헬 코드에서 작성했던 내용을 똑같이 작성해봅시다.

readFile_promisified('file1.txt')
.then((data) => { console.log(data); return readFile_promisified('file2.txt'); })
.then((data) => { console.log(data); return readFile_promisified('file3.txt'); })
.then((data) => { console.log(data); })
.catch((error) => { console.log(error); });
짠! 어떤가요? 코드가 훨씬 깔끔해졌죠? readFile_promisified 함수는 Promise 객체를 리턴하기 때문에 이렇게 자유롭게 Promise Chain 안에서 사용할 수 있습니다.

이렇게 원하는 경우에는 전통적인 형식의 비동기 실행 함수를 Promisify해서 콜백 헬을 방지하고, 가독성 높은 코드를 작성할 수 있습니다.

3. Promisify를 하면 안 되는 함수들도 있습니다.
   이제 기존의 전통적인 형식의 비동기 실행 함수도 원하는 경우에는 Promisify해서 콜백 헬을 방지할 수 있다는 것을 알게 되었습니다. 하지만 전통적인 형식의 비동기 실행 함수라고 해서 모두 Promisify해서 사용해도 되는 것은 아닙니다.

기존의 비동기 실행 함수들 중에서도 그 콜백을 한번만 실행하는 것들(setTimeout, readFile 등)만 Promisify해서 사용해도 되는데요.

이것들과 달리 만약 콜백을 여러 번 실행하는 함수들(setInterval, addEventListener 등)인 경우에는 이렇게 Promisify하면 안 됩니다. 왜냐하면 Promise 객체는 한번 pending 상태에서 fulfilled 또는 rejected 상태가 되고나면 그 뒤로는 그 상태와 결과가 바뀌지 않기 때문입니다. 이게 무슨 말인지 다음 코드를 보고 이해해봅시다.

const box = document.getElementById('test');
let count = 0;

function addEventListener_promisified(obj, eventName) { // 이런 Promisify는 하지 마세요
const p = new Promise((resolve, reject) => {
obj.addEventListener(eventName, () => { // addEventListener 메소드
count += 1;
resolve(count);
});
});
return p;
}

addEventListener_promisified(box, 'click').then((eventCount) => { console.log(eventCount); });
이 코드에서 보이는 addEventListener_promisified 함수는 DOM 객체의 addEventListener 메소드를 Promisify한 함수인데요.

지금 Promise 객체가 생성될 때 실행되는 executor 함수 안에서는, DOM 객체에 어떤 이벤트가 발생할 때, 실행할 콜백을 등록하고 있습니다.
특정 이벤트가 발생할 때마다 count라고 하는 변수의 값을 1씩 늘려서 resolve 함수의 파라미터로 전달해서 실행하도록 하는 내용이 들어있는데요.

마지막 코드를 보면,

addEventListener_promisified(box, 'click')
.then((eventCount) => { console.log(eventCount); });
이렇게 addEventListener_promisified 함수의 아규먼트로 DOM 객체 box와 문자열 'click'을 넣어서 box 객체가 클릭 이벤트에 반응하도록 했습니다.
(HTML 코드는 생략된 상태입니다.)

하지만 이 코드를 실행하고 box를 클릭해보면
처음에 1이 딱 출력되고 나서 그 다음 count 값들은 출력되지 않습니다.

왜냐하면 pending 상태에 있던 Promise 객체(여기서는 p 객체)가 한번 fulfilled 상태 또는 rejected 상태가 되고 나면
Promise 객체의 상태 및 결과가 고정되어 그 뒤로는 바뀌지 않기 때문입니다.

따라서 지금 위 코드에 보이는 resolve(count)라고 하는 코드가 box 버튼을 클릭할 때마다 여러 번 실행된다고 해도 p 객체가 갖고 있는 상태와 결과는 변하지 않습니다. 그래서 then 메소드 안의 콜백도 처음 클릭했을 때 딱 한번 실행되고 끝인 겁니다.

이렇게 콜백이 여러 번 실행되어야하는 비동기 실행 함수인 경우에는 Promisify를 하면 안 됩니다. Promisify를 하고 싶은 경우라도, 콜백이 딱 한 번 실행되는 함수인 경우에만 해야한다는 사실, 잘 기억하세요!

\*3-26. 이미 상태가 결정된 Promise 객체
이때까지 우리는 pending 상태에 있다가 fulfilled 상태 또는 rejected 상태가 되는 Promise 객체를 직접 만드는 법을 배웠습니다. 그런데 아예 처음부터 바로 fulfilled 상태이거나 rejected 상태인 Promise 객체를 만드는 것도 가능한데요. 어떻게 할 수 있는지 살펴봅시다.

1. 이미 상태가 결정된 Promise 객체 만들기
   (1) fulfilled 상태의 Promise 객체 만들기
   const p = Promise.resolve('success');
   Promise의 resolve라는 메소드를 사용하면 바로 fulfilled 상태의 Promise 객체를 만들 수 있습니다. 위와 같이 쓰면 fulfilled 상태이면서, 작업 성공 결과로 문자열 'success'를 가진 Promise 객체를 만들 수 있습니다.

(2) rejected 상태의 Promise 객체 만들기
const p = Promise.reject(new Error('fail'));
Promise의 reject라는 메소드를 사용하면 바로 rejected 상태의 Promise 객체를 만들 수 있습니다. 위와 같이 쓰면 rejected 상태이면서, 작업 실패 정보로, fail이라는 메시지를 가진 Error 객체를 가진 Promise 객체를 만들 수 있습니다.

Promise 객체를 직접 생성하는 방법에는 이전에 배웠던 것처럼

const p = new Promise((resolve, reject) => {

});
new 생성자와 executor 함수를 사용하는 것 말고도 resolve 메소드나, reject 메소드를 사용하는 방법도 있다는 사실을 기억하셔야 합니다.
resolve 메소드나 reject 메소드로 생성한 Promise 객체도 이때까지 우리가 배운 것과 동일하게 작동합니다.

const p = Promise.resolve('success');
p.then((result) => { console.log(result); }, (error) => { console.log(error); });
이 코드에서는 첫 번째 콜백이 실행되어서 작업 성공 결과인 문자열 success가 출력되고

const p = Promise.reject(new Error('fail'));
p.then((result) => { console.log(result); }, (error) => { console.log(error); });
이 코드에서는 두 번째 콜백이 실행되어서 작업 실패 정보인 Error 객체의 내용이 출력되겠죠?

어떤 비동기 작업을 처리할 필요가 있다면, new 생성자와 executor 함수를 사용해서 Promise 객체를 만들어야 하지만, 그렇지 않고 바로 상태가 이미 결정된 Promise 객체를 만들고 싶을 때는 이 resolve 또는 reject 메소드를 사용합니다.

구체적으로 예를 들자면, 함수 안에서 리턴하는 값이 여러 개인 경우 모든 리턴값을 Promise 객체로 통일하고 싶을 때, 종종 resolve 또는 reject 메소드를 쓰는데요. 예를 들어,

function doSomething(a, b) {
//~~
if (problem) {
throw new Error('Failed due to..'));
} else {
return fetch('https://~');
}
}
이렇게 문제(problem이 falsy인 경우)가 없는 경우에만 fetch 함수를 호출해서 Promise 객체를 리턴하는 함수가 있다고 해봅시다. 만약 문제가 발생하는 경우에는 바로 Error 객체를 throw해 버리고 있죠? 만약 문제가 존재하는 경우에도 Promise 객체를 리턴하고 싶다면 reject 메소드를 써서 이렇게 작성할 수 있습니다.

function doSomething(a, b) {
// ~~
if (problem) {
return Promise.reject(new Error('Failed due to..'));
} else {
return fetch('https://~');
}
}
지금 문제가 있는 경우에도 에러를 바로 throw하는 게 아니라, 생성한 에러를 Promise 객체의 작업 실패 정보로 설정해서, 그 Promise 객체를 리턴하는 것으로 바꿔줬죠? 만약 어떤 함수가 어떤 상황이든 항상 Promise 객체를 리턴하는 것으로 통일하고 싶은 경우에는 resolve나 reject 메소드를 유용하게 사용할 수 있습니다.

2. Promise 객체의 작업 성공 결과 또는 작업 실패 정보
   간혹 Promise 객체를 공부하는 분들 중에, Promise 객체가 pending 상태일 때 미리 then 메소드가 붙어있어야만 나중에 이 Promise 객체가 fulfilled 상태 또는 rejected 상태가 되었을 때 그 결과(작업 성공 결과 또는 작업 실패 정보)를 콜백의 파라미터로 받을 수 있고, 이미 fulfilled 상태 또는 rejected 상태가 된 Promise 객체의 경우에는 then 메소드를 붙여도 그 결과를 콜백에서 받지 못한다고 오해하는 분들이 있습니다.

하지만 방금 resolve, reject 메소드에서도 봤듯이 이미 fulfilled 또는 rejected 상태가 결정된 Promise 객체라도 then 메소드를 붙이면, 콜백에서 해당 작업 성공 결과 또는 작업 실패 정보를 받아올 수 있습니다. 시점과는 전혀 상관이 없는 개념인 겁니다.

Promise 객체의 상태가 fulfilled 또는 rejected 상태이기만 하면, 어느 시점이든, 몇 번이든 then 메소드를 붙여서 해당 결과를 가져올 수 있습니다. 예를 들어,

const p = new Promise((resolve, reject) => {
setTimeout(() => { resolve('success'); }, 2000); // 2초 후에 fulfilled 상태가 됨
});

p.then((result) => { console.log(result); }); // Promise 객체가 pending 상태일 때 콜백 등록
setTimeout(() => { p.then((result) => { console.log(result); }); }, 5000); // Promise 객체가 fulfilled 상태가 되고 나서 콜백 등록
이 코드를 실행하면 Promise가 pending 상태일 때 등록한 콜백이든, fulfilled 상태가 된 후에 등록한 콜백이든 잘 실행되는 것을 알 수 있습니다.
이렇게 어느 시점이든, 몇 번의 then 메소드를 붙이든 상관없이, pending 상태만 아니라면 항상 then 메소드로 Promise 객체의 결과를 추출할 수 있습니다.

Promise 객체는 항상 결과를 줄 수 있는 공급자(Provider)이고 그것의 then 메소드는 그 결과를 소비하는 콜백인 소비자(Consumer)를 설정하는 메소드라는 사실을 잘 기억하셔야 합니다. 시점과는 전혀 연관이 없으니까 오해하지 마세요!

\*3-28. 여러 Promise 객체를 다루는 방법(심화)
이때까지 우리는 하나의 Promise 객체를 다루기 위해 알아야 하는 지식들을 배웠습니다.
하지만 실무 개발에서는 여러 개의 Promise 객체를 동시에 다뤄야 하는 경우도 있는데요.
이번 노트에서는 여러 개의 Promise 객체를 다뤄야 할 때 사용되는 Promise의 메소드들을 배워보겠습니다.

1. all 메소드
   설명을 하기에 앞서 바로 코드를 보겠습니다.

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
.all([p1, p2, p3])
.then((results) => {
console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
});
지금 이 코드에는 서로 다른 3개의 URL로 리퀘스트를 보내는 fetch 함수들이 보입니다. URL을 자세히 보니 이전에 사용했던 직원 정보에 관한 학습용 URL이네요. 지금 1번, 2번, 3번 직원의 정보를 각각 요청하고 있죠?

그 다음 부분을 보면, Promise의 all이라는 메소드를 호출하고 있고, all 메소드의 아규먼트로는 배열 하나가 들어있습니다. 그 배열의 요소들은, 각 직원 정보를 요청하고 받아서 Deserialize까지 수행한 작업 성공 결과를 담고 있는 Promise 객체들인 p1, p2, p3 객체입니다.

이 all 메소드는 무슨 기능을 하는 걸까요? all 메소드도 then 메소드처럼 새로운 Promise 객체를 리턴하는데요.
all 메소드는 이렇게 아규먼트로 들어온 배열 안에 있는 모든 Promise 객체가 pending 상태에서 fulfilled 상태가 될 때까지 기다립니다.
그리고 모든 Promise 객체들이 fulfilled 상태가 되면, all 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고,
각 Promise 객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 갖게 됩니다.

이 코드를 직접 실행해보면,

이렇게 all 메소드가 리턴한 Promise 객체는,

(1) 각 개별 Promise 객체의 작업 성공 결과로 이루어진 배열을
(2) 자신의 작업 성공 결과로 갖는다는 것을 알 수 있습니다.

배열의 각 요소로 각 직원 정보 객체가 잘 보이죠? 이렇게 all 메소드는 여러 Promise 객체의 작업 성공 결과를 기다렸다가 모두 한 번에 취합하기 위해서 사용합니다.

그런데 만약 p1~3 객체들 중 하나라도, rejected 상태가 되면 어떻게 될까요?

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
.all([p1, p2, p3])
.then((results) => {
console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
});
마지막 fetch 함수에 존재하지 않는 URL 주소를 적고 코드를 다시 실행해보겠습니다. 코드를 실행해보면

마지막 fetch 함수에서 문제가 발생해서 p3가 rejected 상태가 되면,
all 메소드가 리턴한 Promise 객체는 p3 객체처럼 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 됩니다.
이렇게 all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용합니다.
그리고 이렇게 Promise 객체가 하나라도 rejected 상태가 되는 경우에 대비하려면
이전에 배웠던 것처럼

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
.all([p1, p2, p3])
.then((results) => {
console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
})
.catch((error) => {
console.log(error);
});
그냥 이렇게 catch 메소드를 붙여주면 됩니다. 어차피 all 메소드도 Promise 객체를 리턴하니까 특별히 새로울 건 없겠죠?

2. race 메소드
   race 메소드도 all 메소드와 마찬가지로 여러 Promise 객체들이 있는 배열을 아규먼트로 받습니다. 그리고 race 메소드도 all 메소드처럼 Promise 객체를 리턴하는데요. 하지만 그 적용 원리가 다릅니다.
   race 메소드가 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서
   가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게 됩니다.

예를 들어 이런 코드가 있다고 할 때,

const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve('Success'), 1000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
.race([p1, p2, p3])
.then((result) => {
console.log(result); // hello 출력
})
.catch((value) => {
console.log(value);
});
지금 race 메소드 안의 배열에 들어있는 Promise 객체들 중에서 무엇이 가장 빨리 fulfileld 또는 rejected 상태가 될까요?
답은 1초 후에 fulfilled 상태가 되는 p1 객체입니다.
p1 객체는 1초 후에 fulfilled 상태가 되고, 그 작업 성공 결과로 문자열 Success를 가지게 되는데요.
p2는 2초 후에, p3는 4초 후에 rejected 상태가 됩니다.

race 메소드가 리턴한 Promise 객체는 이 중에서 가장 빨리 상태 정보가 결정된 p1 객체와 동일한 상태와 결과를 가집니다.
말그대로 race 메소드는 여러 Promise 객체들을 레이스(race, 경쟁)시켜서 가장 빨리 상태가 결정된 Promise 객체를 선택하는 메소드입니다.
이 코드를 실행하면

p1 객체의 작업 성공 결과였던 문자열 Success가 잘 출력됩니다.

만약 setTimeout에 넣었던 밀리세컨즈를 이렇게 바꾼다면

const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve('Success'), 6000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
.race([p1, p2, p3])
.then((result) => {
console.log(result); // hello 출력
})
.catch((value) => {
console.log(value);
});
이번에는 p2가 p1보다 더 빨리 상태가 결정됩니다. 그럼 결국 race 메소드가 리턴한 Promise 객체는 p2처럼 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 됩니다. 이 코드를 실행해보면

Error 객체의 정보가 잘 출력되는 것을 알 수 있습니다.

자, all 메소드와 race 메소드 잘 이해되시나요? 실무에서는 이렇게 여러 Promise 객체들을 한꺼번에 다뤄야할 때도 있습니다. 그럴 때 각 용도에 적합한 메소드를 사용하면 되는데요.  
all 메소드나 race 메소드 말고 allSettled, any라는 메소드도 있습니다.
이것들도 all, race 메소드처럼 Promise 객체 배열을 아규먼트로 받고 Promise 객체를 리턴하는데요.

이것들도 간단하게 설명하겠습니다.

각 메소드가 리턴한 Promise 객체가 A라고 할 때,

allSettled 메소드 : 배열 내의 모든 Promise 객체가 fulfilled 또는 rejected 상태가 되기까지 기다리고, pending 상태의 Promise 객체가 하나도 없게 되면, A의 상태값은 fulfilled 상태가 되고 그 작업 성공 결과로, 하나의 배열을 갖게 됩니다.
이 배열에는 아규먼트로 받았던 배열 내의 각 promise 객체의

(1) 최종 상태를 status 프로퍼티,
(2) 그 작업 성공 결과는 value 프로퍼티,
(3) 그 작업 실패 정보는 reason 프로퍼티

에 담은 객체들이 요소로 존재합니다.
이런 식으로 말이죠.

[
{status: "fulfilled", value: 1},
{status: "fulfilled", value: 2},
{status: "fulfilled", value: 3},
{status: "rejected", reason: Error: an error}
]
참고로 fulfilled 상태와 rejected 상태를 묶어서 settled 상태라고 하는데요. allSettled 메소드는 말 그대로 배열 속 Promise 객체들이 settled 상태가 되기만 하면 되는 겁니다. 이에 반해 위에서 배운 all 메소드는 모든 Promise 객체들이 fulfilled 상태가 되기를 기다리는 거구요.

any 메소드 : 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 A에도 똑같이 반영됩니다. 만약 모든 Promise 객체가 rejected 상태가 되어버리면 AggregateError라고 하는 에러를 작업 실패 정보로 갖고 rejected 상태가 됩니다. any라는 단어의 뜻처럼 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 되는 겁니다.

자, 각 메소드의 이름과 그 성질을 매칭해서 기억해보세요. 나중에 혹시 정확한 성질이 기억나지 않더라도 다시 찾아보면 되니까 지금 잘 이해해두는 것이 중요합니다. 참고로 어떤 메소드든 결국 하나의 Promise 객체를 리턴하기 때문에 그 리턴 결과를 Promise Chain에서 자유롭게 사용할 수 있다는 점을 기억해두세요.

\*3-29. axios
우리는 이때까지 fetch 함수를 사용해서 Promise 공부를 했습니다. 여기서 잠깐 챕터 1에서 배웠던 '그밖에 알아야 할 내용들' 노트의 내용 중 1. Ajax 부분을 다시 읽고 와봅시다.

여기서 저는 fetch 함수가 Ajax 통신을 하는 함수라고 했는데요. 그런데 오늘날 개발 실무에서는 이 fetch 함수 말고도 Ajax 통신을 할 수 있는 방법이 존재한다고 했죠? 그것은 바로 axios 라고 하는 외부 패키지를 사용하는 것입니다. 잠깐 간단하게 axios 패키지를 사용한 코드를 보겠습니다.

axios
.get('https://jsonplaceholder.typicode.com/users')
.then((response) => {
console.log(response);
})
.catch((error) => {
console.log(error);
});
이 코드는 axios 패키지에서 제공하는 axios 객체를 사용해서 GET 리퀘스트를 보내고 그 리스폰스를 받는 코드인데요.
자세히 보면 지금 코드에서 axios.get이라고 쓰여 있는 부분만 fetch로 바꾸면 fetch 함수와 사용법이 비슷하지 않나요?

네, 그렇습니다. 사실 axios 객체에서 리퀘스트를 보내는 많은 메소드들이 fetch 함수처럼 Promise 객체를 리턴합니다.
그래서 fetch 함수의 사용법과 비슷한 점이 많은데요.

다만, axios 객체에는 fetch 함수에는 없는 다음과 같은 몇 가지 기능 및 장점들이 있습니다.

모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
serialization, deserialization을 자동으로 수행
특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
업로드 시 진행 상태 정보를 얻을 수 있음
리퀘스트 취소 기능 지원
이 밖에도 다양한 장점들이 있지만 이 노트는 axios의 사용법 자체를 설명하는 노트는 아니기 때문에 생략하겠습니다.
혹시 axios를 배워보고 싶은 분들은 관련 GitHub 페이지를 참조하세요.
페이지를 자세히 읽어보면 fetch 함수와 유사한 작동 원리, 개발 실무에 특화된 추가 기능 등을 볼 수 있을 겁니다.

axios가 이렇게 fetch에 비해 다양한 기능을 지원하는 것은 맞지만 단점도 있습니다. 바로 별도의 다운로드가 필요한 패키지라는 점이죠.
fetch 함수는 웹 브라우저에서 바로 지원되는 함수이기 때문에 별도로 패키지를 다운로드받지 않아도 되지만,
axios는 별도로 패키지를 다운로드해줘야 합니다.

그래서 axios에서 제공하는 추가 기능이 필요한 경우에는 axios를 쓰고,
그런 기능이 필요하지 않고 별도의 패키지 다운로드를 원하지 않는 경우에는 fetch 함수를 사용합니다.

실무에서는 fetch 이외에 axios도 많이 쓴다는 점,
그리고 axios 또한 리퀘스트를 보내는 주요 메소드들이 Promise 객체를 리턴한다는 점을 기억하세요.

이번 챕터에서 Promise 객체를 잘 공부했다면, axios 사용법도 쉽게 익힐 수 있을 겁니다.

#4-4. async/await을 활용한 세련된 비동기 코드
\*4-1. async/await이란?

\*4-2. async/await 구문의 실행 원리

\*4-3. 동기 실행 코드처럼 생긴 비동기 실행 코드
이전 영상에서는 async 함수 안의 코드들이 어떤 식으로 실행되는지 배웠습니다.
이때 함수 안에 존재하는 await이 코드 실행 흐름에 변화를 주는 중요한 역할을 했는데요.
코드를 다시 살펴봅시다.

/_ fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => { console.log(result); }); _/

async function fetchAndPrint() {
console.log(2);
const response = await fetch('https://jsonplaceholder.typicode.com/users');
console.log(7);
const result = await response.text();
console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

사실 fetchAndPrint 함수를 언뜻 보면, 비동기 실행 함수처럼 생기지 않았습니다. 오히려 코드가 등장하는 순서대로 실행될 것처럼 생겼죠. 즉, 동기 실행되는 코드처럼 생겼는데요. 그런데 이건 의도된 것입니다.

왜냐하면 async/await 구문 자체가 기존의 Promise 객체를 사용하는 코드(Promise Chaining)를

(1) 개발자가 더 편하게 작성할 수 있도록 하고
(2) 코드의 가독성을 높이기 위해서

도입된 일종의 Syntactic sugar(기존 문법을 더 편하게 사용할 수 있도록 하는 문법적 장치)에 해당하기 때문입니다.

사실 우리에게는 이때까지 배웠던 것처럼

전통적인 형식의 비동기 실행 함수에 콜백을 바로 전달하거나,
Promise 객체 뒤에 .then 메소드를 붙이는 것보다는
그냥 코드를 차례대로 써나가는 것이 더 익숙한 방식입니다.
그리고 바로 async/await 구문이 Promise 객체를 우리에게 이미 익숙한 동기 실행 코드 방식으로 다룰 수 있게 해주는 문법인 겁니다.

하지만 동기 실행 코드처럼 보인다고 해서 정말로 동기 실행되는 것은 아닙니다. 만약 위의 코드를 그냥 보이는 대로만 해석한다면, 그 결과가 아래처럼 출력될 것으로 생각하기 쉽습니다.

1
2
7
[리스폰스의 내용]
3
4
5
6
하지만 코드에서 async/await이 보인다면 사실 비동기 실행되는 코드가 있다는 걸 반드시 기억해야 하는데요.
사실 위 코드의 실제 출력 결과는

1
2
3
4
5
6
7
[리스폰스의 내용]
이것이었죠? 만약 async/await 구문의 실행 원리가 아직도 이해되지 않는 분은 이 코드의 원래 모습을 떠올려보세요.

사실 위 코드의 원래 모습은 아래와 같다고 할 수 있습니다.

/_ fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => { console.log(result); }); _/

function fetchAndPrint() {
console.log(2);
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
console.log(7);
return response.text();
})
.then((result) => { console.log(result); });
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

지금 함수 이름 앞에 있던 async 키워드를 삭제했고, await이 있던 코드들은 Promise Chaining을 하는 코드로 바꿨습니다. 이 코드를 실행해보면 역시 이전 영상과 같은 결과가 출력되는데요.

원래 모습이었을 코드를 보니까, 이제 왜 async/await가 있는 코드가 제가 말한 것처럼 실행되는지 이해되시죠?

이번 노트에서 배운 것처럼 async/await 구문을 사용하면,

(1) Promise 객체를 사용할 때, then 메소드 등을 사용하지 않고도
(2) 마치 동기 실행 코드처럼 코드를 훨씬 더 간단하고 편하게 작성할 수 있습니다. 코드를 읽기에도 훨씬 편하구요.

하지만 이런 편안함을 얻은 대신 한 가지 주의해야 할 점이 있습니다. 바로 이 async/await 구문 중에 비동기 실행되는 부분이 있다는 사실에 유의하며 코드를 작성 및 해석해야한다는 것입니다. 아무리 async/await 구문이 동기 실행 코드처럼 생겼다고 해도 그 속에는 Promise 객체가 존재함을 절대 잊지 마세요.

자, async/await 구문의 실행 원리를 다시 한번 정리할게요.

async 함수 안의 코드가 실행되다가 await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행합니다. 물론 함수 바깥에 더 이상 실행할 코드가 없을 수도 있습니다.
어느 경우든 그 이후로는, await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다립니다. 그리고 기다리던 Promise 객체가 fulfilled 상태가 되면 await이 Promise 객체의 작업 성공 결과를 리턴하는 겁니다.

그런데 이때까지 Promise 객체가 fulfilled 상태가 되기만을 기다렸는데, await 뒤의 Promise 객체가 rejected 상태가 될 수도 있겠죠? 이런 경우는 어떻게 대비해야 하는지 다음 영상에서 배워봅시다.

\*4-6. catch문과 finally문
async function 함수() {
try {
실행할 코드
} catch {
오류가 났을 때 실행할 코드
}
finally {
항상 실행할 코드
}
};

\*4-9. async 함수는 Promise 객체를 리턴합니다
async 함수는 항상 Promise 객체를 리턴한다.

\*4-10. async 함수가 리턴하는 Promise 객체
async 함수는 그 안에서 리턴하는 값에 따라 그에 맞는 Promise 객체를 리턴합니다.
그런데 이때 적용되는 규칙은 우리가 이전에 'then 메소드 완벽하게 이해하기' 노트에서 봤던 규칙들과 유사합니다.

async 함수 안에서 리턴하는 값의 종류에 따라 결국 어떤 Promise 객체를 리턴하게 되는지 아래와 같이 경우를 나누어서 살펴봅시다.

1. 어떤 값을 리턴하는 경우
   (1) Promise 객체를 리턴하는 경우
   async 함수 안에서 Promise 객체를 리턴하는 경우에는 해당 Promise 객체와 동일한 상태와 작업 성공 결과(또는 작업 실패 정보)를 가진 Promise 객체를 리턴합니다.(그냥 해당 Promise 객체를 리턴한다고 봐도 괜찮습니다.)

async function fetchAndPrint() {
return new Promise((resolve, reject)=> {
setTimeout(() => { resolve('abc'); }, 4000);
});
}

fetchAndPrint();

이렇게 pending 상태의 Promise 객체를 리턴하기도 하고(리턴된 Promise 객체는 약 4초 후에 fulfilled 상태가 되겠죠?

async function fetchAndPrint() {
return Promise.resolve('Success');
}

fetchAndPrint();

이미 fulfilled 상태인 Promise 객체나

async function fetchAndPrint() {
return Promise.reject(new Error('Fail'));
}

fetchAndPrint();

이미 rejected 상태인 Promise 객체를 리턴하는 경우 전부 다 해당합니다. (위 이미지에서는 rejected 상태의 Promise 객체를 따로 처리해주지 않았기 때문에 에러가 발생한 겁니다)

(2) Promise 객체 이외의 값을 리턴하는 경우
async 함수 내부에서 Promise 객체 이외에 숫자나 문자열, 일반 객체 등을 리턴하는 경우에는, fulfilled 상태이면서, 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴합니다.

async function fetchAndPrint() {
return 3;
}

fetchAndPrint();

이런 코드나

async function fetchAndPrint() {
return 'Hello';
}

fetchAndPrint();

이런 코드,

async function fetchAndPrint() {
const member = {
name: 'Jerry',
email: 'jerry@codeitmall.kr',
department: 'sales',
};

return member;
}

fetchAndPrint();

이런 코드들 모두 여기에 해당합니다.

2. 아무 값도 리턴하지 않는 경우
   async function fetchAndPrint() {
   console.log('Hello Programming!');
   }

fetchAndPrint();
이렇게 함수에서 아무런 값도 리턴하지 않으면 자바스크립트에서 어떻게 간주한다고 했죠? undefined를 리턴한 것으로 간주한다고 했는데요. 따라서

이 경우에는 fulfilled 상태이면서, undefined를 작업 성공 결과로 가진 Promise 객체가 리턴됩니다.

3. async 함수 내부에서 에러가 발생했을 때
   async function fetchAndPrint() {
   throw new Error('Fail');
   }

fetchAndPrint();

async 함수 안에서 에러가 발생하면, rejected 상태이면서, 해당 에러 객체를 작업 실패 정보로 가진 Promise 객체가 리턴됩니다.

\*4-11. async 함수 안의 async 함수
async 함수 안에서 async 함수를 이용하려면 앞에 await를 붙이면 된다.
이 함수를 사용하려면 .then을 붙여서 활용하면 된다.

\*4-12. async를 붙이는 위치
자바스크립트에서 함수를 표현하는 방법에는 여러 가지가 있는데요.

Function Declaration(함수 선언식),
Function Expression(함수 표현식),
Arrow Function(화살표 함수)
등이 있습니다. 그리고

Function Expression의 경우에는

2-1. 함수에 이름이 붙어있는 Named Function Expression과
2-2. 함수에 이름이 없는 Anonymous Function Expression으로 나눌 수 있고,

Arrow Function의 경우 함수 내부의 내용에 따라 더 축약(shorten)해서 나타낼 수도 있는데요.

각각의 경우에 async 키워드를 어떻게 붙이는지 살펴봅시다.

// 1) Function Declaration
async function example1(a, b) {
return a + b;
}

// 2-1) Function Expression(Named)
const example2_1= async function add(a, b) {
return a + b;
};

// 2-2) Function Expression(Anonymous)
const example2_2 = async function(a, b) {
return a + b;
};

// 3-1) Arrow Function
const example3_1 = async (a, b) => {
return a + b;
};

// 3-2) Arrow Function(shortened)
const example3_2 = async (a, b) => a + b;
각 함수 표현 방식에서 async는 이런 식으로 붙이면 되는데요. 각각의 경우에 async를 어디에 붙였는지 기억해두세요.
참고로, 자바스크립트에는 함수를 정의하면서 동시에 실행하는 즉시실행함수(Immediately-invoked function expression, IIFE)라는 개념도 있는데요.

(function print(sentence) {
console.log(sentence);
return sentence;
}('I love JavaScript!'));

(function (a, b) {
return a + b;
}(1, 2));

((a, b) => {
return a + b;
})(1, 2);

((a, b) => a + b)(1, 2);
이런 식으로 함수를 바로 정의와 동시에 실행하는 것을 의미합니다. 보통 초기화 코드 등에서 함수를 단 한 번만 실행하기 위한 목적으로 이 즉시실행함수를 사용하는데요. 이런 경우에도 async를 이렇게 붙일 수 있습니다.

(async function print(sentence) {
console.log(sentence);
return sentence;
}('I love JavaScript!'));

(async function (a, b) {
return a + b;
}(1, 2));

(async (a, b) => {
return a + b;
})(1, 2);

(async (a, b) => a + b)(1, 2);

\*4-14. async 함수를 작성할 때 주의해야할 성능 문제(심화)
이때까지 async 함수에 관해서 많은 내용을 배웠는데요. 그런데 async 함수의 내부 코드를 작성할 때는 특히 주의해야 하는 경우가 있습니다. 잠깐 아래의 코드를 볼까요?

async function getResponses(urls) {
for(const url of urls){
const response = await fetch(url);
console.log(await response.text());
}
}
이 getResponses 함수는 urls라는 파라미터로, 여러 개의 URL들이 있는 배열을 받아서, 순서대로 각 URL에 리퀘스트를 보내고, 그 리스폰스의 내용을 출력하는 함수입니다. 그런데 이 코드는 하나의 문제점이 있습니다. 그건 바로 이전 URL에 리퀘스트를 보내고 리스폰스를 받아서 출력하고 나서야, 다음 URL에 대한 리퀘스트를 보낼 수 있다는 점입니다. 즉, 순차적인 작업 처리를 한다는 점인데요. 왜냐하면 이전 URL에 대해서 await 문이 붙은 Promise 객체가 fulfilled 상태가 될 때까지는 그 다음 URL에 대한 작업들이 시작될 수 없기 때문입니다.

만약 순차적인 처리를 해야 하는 경우라면 이 코드를 사용하는 게 맞겠지만, 만약 모든 리스폰스의 내용이 잘 출력되기만 하면 되고, 그 순서는 상관없는 경우라면 어떨까요? 이 코드는 성능 관점에서 아쉬운 점이 있는 코드입니다.

만약 리스폰스의 내용의 순서가 중요하지 않은 경우라면 현재 코드를 이렇게 바꿔볼 수 있는데요.

async function fetchUrls(urls){
for(const url of urls){
(async () => { // 추가된 부분!
const response = await fetch(url);
console.log(await response.text());
})(); // 추가된 부분!
}
}
지금 각 url에 리퀘스트를 보내고 리스폰스를 받는 코드를, 별도의 즉시실행되는 async 함수로 감싸줬는데요. 즉시실행함수는 정의와 동시에 실행되는 함수라고 'async를 붙이는 위치' 노트에서 배웠죠?

이렇게 코드를 고치면 일단 각 URL에 대해서 fetch 함수를 실행해서 리퀘스트를 보내는 것을 순서대로 바로 실행해버립니다. 이전 코드처럼 이전 URL에 대한 리스폰스가 오기까지를 기다렸다가 다음 URL에 리퀘스트를 보내는 게 아니라요. 이렇게 코드를 쓰면 일단 모든 URL에 대한 리퀘스트를 쭉 보내버리고, 먼저 리스폰스가 오는 순서대로 그 내용이 출력되죠.

리스폰스의 순서를 보장하지 않아도 되는 경우에는 이 코드가 훨씬 성능이 좋겠죠?

async 함수 안에서는 무언가를 반복 처리하는 코드를 쓸 때 유의해야 합니다. 왜냐하면 의도치 않게 순차 처리를 수행하는 비효율적인 코드를 짜는 실수를 하게 되기 쉽기 때문이죠. 만약 순차적인 처리가 필요한 경우가 아니라면 방금 본 것처럼 각 작업을 다시 async 함수로 묶어주면 된다는 사실, 기억해두세요!

\*4-15. 비동기 실행 관련 문법 총정리
이때까지 비동기 실행에 관해 배운 내용들을 정리해봅시다. 일단 비동기 실행의 의미에 대해서 정리해봅시다. 사실 비동기 실행의 정의는 아래와 같이 다양한 방식으로 표현될 수 있습니다.

특정 작업이 시작되고, 그 작업이 모두 완료되기 전에 바로 다음 코드가 실행되는 방식의 실행, 나머지 작업은 나중에 콜백을 통해 수행되는 방식의 실행
특정 처리를 나중으로 미루는 방식의 실행
콜백을 등록해두고, 추후에 특정 조건이 만족되면 그 콜백으로 나머지 작업을 수행하는 방식의 실행
이렇게 다양한 표현으로 그 정의를 써볼 수 있는데요. 특정 처리를 담당하는 존재(콜백)의 실행을 나중으로 미룬다는 점만 잘 기억하시면 딱히 어려울 게 없습니다.

이제 이때까지 배웠던, 비동기 실행 관련 문법 3가지인

(1) 파라미터로 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수
(2) Promise
(3) async/await

에 대해 정리하겠습니다.

1. 파라미터로 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수
   setTimeout, setInterval 함수, DOM 객체의 addEventListener 메소드 등이 여기에 해당했습니다.

setTimeout(() => {
console.log('asynchronously executed');
}, 2000);

button.addEventListener('click', (event) => { console.log('You Clicked'); });
이런 방식으로 함수의 파라미터로 콜백을 바로 집어넣는 코드들을 봤었죠?

이렇게 함수의 파라미터로 콜백을 바로 전달하는 방식은 여전히 많은 경우에 쓰이고 있지만,
여러 비동기 작업의 순차적인(sequential) 처리가 필요한 경우에 이런 함수들로 코드를 작성하면,

fs.readFile('file1.txt', 'utf8', (error1, data1) => {
if (error1) {
console.log(error1);
} else {
console.log(data1);
fs.readFile('file2.txt', 'utf8', (error2, data2) => {
if (error2) {
console.log(error2);
} else {
console.log(data2);
fs.readFile('file3.txt', 'utf8', (error3, data3) => {
if (error3) {
console.log(error3);
} else {
console.log(data3);
}
});
}
});
}
});
위와 같이 코드의 가독성이 급격하게 떨어지는 콜백 헬(callback hell) 문제가 발생할 가능성이 높다고 했습니다.

2. Promise
   fetch('https://www.google.com')
   .then((response) => response.text())
   .then((result) => { console.log(result); })
   .catch((error) => { console.log(error); })
   .finally(() => { console.log('exit'); });
   Promise 객체를 사용하면 콜백 헬 문제를 방지하면서, 여러 비동기 작업을 순차적으로 처리할 수 있다고 배웠습니다.

그리고 기존의 1.과 같은 전통적인 비동기 실행 함수들 중에서도 그 콜백이 단 한 번만 실행되는 함수들은

function readFile_promisified(filename) {
const p = new Promise((resolve, reject) => {
fs.readFile(filename, 'utf8', (error, data) => {
if (error) {
reject(error); // 에러 발생 시 -> rejected
} else {
resolve(data); // 파일 내용 읽기 완료 -> fulfilled
}
});
});
return p;
}
이런 식으로 Promisify해서 콜백 헬의 가능성을 없애고, Promise Chain 안에서 그 콜백의 리턴값을 사용할 수 있다는 것도 배웠었죠?

그리고 rejected 상태의 Promise 객체에 대비하기 위한 catch 메소드, 어느 상황이든 항상 마지막에 실행해야 할 코드가 있을 때 사용하는 finally 메소드도 배웠습니다.

3. async / await 구문
   async function fetchAndPrint() {
   try {
   const response = await fetch('https://www.google.www');
   const result = await response.text();
   console.log(result);
   } catch(error) {
   console.log(error);
   } finally {
   console.log('exit');
   }
   }

fetchAndPrint();
async/await 구문은 Promise 객체를 다루는 코드(Promise Chaining 코드 등)를 사람들이 좀더 익숙하게 느끼는 동기 실행 스타일의 코드로 작성할 수 있게 해주는 Syntactic sugar라고 했습니다. 하지만 동기 실행 코드처럼 보인다고 실제로 코드가 보이는 순서대로 실행되는 것은 아니라고 했죠?

async 함수 안의 내용이 순차적으로 실행되다가도, await 문을 만나면 await 바로 뒤에 붙은 코드를 실행해두고, 일단은 함수 바깥으로 코드 흐름이 바뀐다고 했던 거, 반드시 기억하셔야 합니다.

이런 점만 주의하면 사실 Promise 기반의 코드들은 가능한 경우에 모두 async/await 구문으로 전환해서 작성하는 게 더 좋습니다.

참고로 async/await(ES2017, 2017년 도입)은 Promise(ES6, 2015년 도입)에 비해 보다 더 최근에 자바스크립트 표준에 도입된 문법인데요. 이렇게 같은 기능을 더 편하게 구현할 수 있도록 자바스크립트 문법은 늘 발전하고 있습니다.

자, 이때까지 자바스크립트로 비동기 실행 코드를 작성할 수 있는 방법 3가지를 살펴봤는데요.

2021년 1월을 기준으로 아직 위의 3가지 비동기 실행 관련 문법들은 서로 상호보완적인 것들이라고 할 수 있습니다. 왜냐하면 아직 아래와 같이 하나가 다른 하나를 완벽히 대체하지 못하는 측면이 있기 때문입니다.

콜백을 함수의 파라미터로 바로 전달하는 전통적인 방식의 비동기 실행 함수들 중에서도 setInterval, addEventListener처럼 그 콜백이 단 한번이 아니라 여러 번 실행되어야 하는 것들은 Promisify해서 사용하면 안 됩니다. Promise 객체는 한번 fulfilled 또는 rejected 상태가 되고나면 그 상태와 결과가 다시는 바뀌지 않기 때문입니다.
async/await 구문의 경우, await은 async 함수 안에서만 사용할 수 있고, 코드의 top-level(어떤 함수 블록 안에 포함된 것이 아닌 코드의 최상위 영역)에서는 사용될 수는 없습니다. 그래서 코드의 top-level에서 async 함수가 리턴한 Promise 객체의 작업 성공 결과를 가져오려면 await을 사용할 수는 없고, 여전히 then 메소드를 사용해야합니다.
그러니까 이 3가지 모두 잘 알아둬야겠죠? 그리고 실제 개발을 할 때는 여러분이 사용하려는 문법이 어느 웹 브라우저에서 지원을 하고 안 하는지를 체크해야 하는데요. 자바스크립트의 각 문법별 브라우저 지원 현황을 이런 사이트 등을 통해 조사하고 개발을 시작하는 게 좋습니다. 다행히 이때까지 우리가 배운 3가지 종류의 문법은 대다수의 웹 브라우저에서 지원합니다.

사실 비동기 실행에 관해서 중요한 것은 어느 문법의 코드를 작성하든 그 개념을 제대로 이해하고 코드를 작성해야 한다는 점입니다.
콜백 헬 문제를 해결하기 위해 Promise 객체가 등장했고, Promise를 좀 더 편하게 다루기 위해서 async/await 구문이 등장했지만,
여러분이 각 문법을 제대로 이해하지 못하고 코드를 작성한다면, 그것은 또다서 Promise hell, async/await hell이 될 뿐입니다.

하지만 각각의 문법을 제대로 이해하고 코드를 작성한다면 여러분의 개발 실력과 생산성은 한층 업그레이드될 것이구요.

\*4-16. 두 가지 종류의 콜백(심화)
이때까지 우리는 '비동기 실행'에 대해서 많은 것을 배웠습니다. 그런데 한 가지 짚고 넘어가야할 사실이 하나 있습니다. 이번 토픽에서는 나중에 실행될 작업을 처리하는 함수를 '콜백(callback)'이라고 했는데요. 그런데 이것은 콜백의 한 가지 종류일 뿐 원래 콜백이라는 단어는 더 넓은 의미를 갖고 있습니다.

자바스크립트에서 콜백은 어떤 함수의 파라미터로 전달되는 모든 함수를 의미하는 개념입니다. 그러니까 어떤 함수의 파라미터로 전달되기만 한다면 해당 함수는 그 함수의 콜백이 되는 것입니다. 이런 콜백은

1. 동기 실행되는 콜백과
2. 비동기 실행되는 콜백

으로 나뉘는데요. 이번 토픽에서는 비동기 실행에 대해 자세히 설명하기 위해서 2번 관점에서만 콜백을 설명했습니다. 이때까지 우리가 본 콜백들은 모두 2번에 해당하는 콜백들이었죠.

그렇다면 1번에 해당하는 콜백에는 어떤 것들이 있을까요? 예를 들어, 자바스크립트 배열의 메소드 중에서 filter라는 메소드를 생각해보겠습니다. 이 메소드는 배열의 여러 요소들 중에서 특정 조건을 만족하는 요소들만을 추려서 그 요소들로만 이루어진 새로운 배열을 리턴하는 메소드인데요.

아래 코드를 봅시다.

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.filter(function isOdd(num) {
return (num % 2 === 1);
});

console.log(newArr); // [1, 3, 5]
이 코드는 arr라는 배열에서 홀수만을 추출해서 해당 홀수들만으로 이루어진 새로운 배열을 리턴합니다. filter 함수의 파라미터 부분을 보면 isOdd(홀수인가요?)라는 함수가 들어있다는 것을 알 수 있는데요. filter 함수는 arr 배열에서 각 요소를 하나씩 순회하면서 매 요소마다 isOdd 함수를 실행하고, 해당 함수가 true를 리턴하는 요소들만을 추출합니다. 여기서는 해당 숫자를 2로 나누었을 때 나머지가 1인(=홀수인) 것들만 추출한다는 뜻이겠죠?

이 코드는 Arrow Function 형식으로 이렇게 간략하게 나타낼 수도 있습니다.

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.filter((num) => num % 2);

console.log(newArr); // [1, 3, 5]
자, 형식이 어찌되었든 이렇게 함수 안에 들어간 함수는 모두 콜백입니다.
현재 filter 메소드 안의 콜백은 앞서 말했듯이 '동기 실행되는 콜백'인데요.
즉, 이 콜백은 우리가 이번 토픽에서 배웠던 '비동기 실행되는 콜백'과는 달리, 아주 정직하게 순서대로 실행됩니다.

filter 함수는 파라미터로 받은 콜백을, 매 요소를 순회하면서, 매 요소를 대상으로 실행합니다. 어떤 처리를 나중에 특정 조건이 만족되었을 때 남은 작업을 처리하기 위해서 사용하는 것이 아니라요.
만약 isOdd 콜백이 비동기 실행되는 콜백이었다면 그 뒤의 console.log(newArr);가 먼저 실행되었겠죠?

이렇게 콜백에는 동기 실행되는 콜백도 있다는 점에 유의해야합니다.

정리해보겠습니다. 사실 콜백이란 함수의 파라미터로 전달되는 함수를 의미하는 넓은 의미의 개념이고, 이때 그것이

동기 실행되는지
비동기 실행되는지
에 따라 두 종류로 나뉘는 겁니다. 이번 토픽에서는 비동기 실행에 집중된 개념 설명을 위해 2번의 경우가 마치 콜백의 전부인 것처럼 설명했지만, 사실은 동기 실행되는 콜백도 있다는 점을 기억해주세요.

그렇다면 2. 비동기 실행되는 콜백은 어떤 원리로 비동기 실행되는 걸까요? 이제 자바스크립트에서 비동기 실행되는 코드가 있다고 할 때, 각 줄의 코드가 어떤 순서로 실행되는지는 알게 되었습니다. 그렇다면 동기 실행, 비동기 실행 이런 것들은 자바스크립트 실행 환경에서 실제로 어떻게 구현되고 있는 걸까요? 이런 내용은 기회가 된다면 다른 토픽에서 다뤄보도록 합시다.

#5. CLI 환경 기본기
#5-1. 유닉스 커맨드 시작하기
\*5-1-1. 유닉스 커맨드란?
Command Line 개발자가 되려면 꼭 필요한 스킬!
기본 커맨드 - 유닉스 커맨드

-유닉스(unix)
1970년대 초반에 개발된 운영 체제
소프트웨어를 개발하고 실행할 수 있는 편리한 플랫폼
쉽게 수정해서 다른 컴퓨터에 적용할 수 있었음
유닉스를 기반으로 하는 다양한 운영체제 탄생

-유닉스 운영 체제
사용하는 커맨드가 비슷함 -> 유닉스 커맨드

-유닉스 커맨드
사실 1000개가 넘음! 1.커맨드라인 사용법 2.파일과 폴더 다루기 3.프로그램 설치

\*5-1-2. 유닉스 운영 체제
본격적으로 시작하기 전에 유닉스(Unix)와 리눅스(Linux)에 대해 조금 더 자세히 설명드릴게요.

유닉스의 시작과 변형
유닉스는 1970년대 초반, 미국 벨 연구소 직원 켄 톰슨과 데니스 리치의 주도로 개발되었습니다. 개발자들이 소프트웨어를 개발하고 실행할 수 있는, 편리한 플랫폼을 제공하기 위해 개발됐는데요. 사람이 이해하기 쉬운 고급 프로그래밍 언어, C로 대부분 작성되었기 때문에, 수정해서 다른 컴퓨터에 적용하기도 편했습니다. 그렇다보니 당시 큰 인기를 끌었고, 유닉스를 변형할 수 있는 언어인 C언어도 덩달아 인기를 얻었습니다.

유닉스를 수정해서 다른 컴퓨터에 적용하는 사례가 많아지다보니, 다양한 버전의 유닉스가 만들어졌고요. 이게 너무 많아지다보니 어느 정도 변형에 제한을 두기 위해 POSIX라는 유닉스의 표준이 만들어지기도 했습니다. 그만큼 많은 사람들이 유닉스를 활용했다는 증거겠죠?

무료와 공유의 문화, 리눅스의 등장
하지만 유닉스가 만들어진 벨 연구소가 당시 AT&T라는 회사에 소속되어 있다보니, 유닉스를 사용하거나 변형할 때, AT&T에 라이센스 비용을 지불해야 했습니다.

이걸 반대하는 사람들도 있었는데요. 소프트웨어를 더 쉽고 자유롭게 공유해야 프로그래밍이 더 발전할 수 있다고 생각하는 공유의 문화가 이 당시에도 있었습니다. 그래서 '자유 소프트웨어 재단 (Free Software Foundation)’이라는 곳에서, 유닉스의 코드를 하나도 사용하지 않고, 유닉스와 유사한 운영 체제를 직접 만들기 시작했습니다. 누구나 쉽게 사용하거나 변형할 수 있는, 무료 버전을 만들어서 배포하고자 한 거죠.

이렇게 시작된 운영 체제의 이름이 GNU인데요, GNU는 "GNU's Not Unix!” 즉, “GNU는 Unix가 아니다”라는 의미의 약자입니다. GNU의 약자에 GNU가 또 들어있는 것이 재미있죠. 프로그래머식의 조크 같은 겁니다.

아무튼 GNU라는 운영 체제는 이렇게 시작되었는데, 그중에 커널이라고 하는, 운영 체제의 핵심 부분이 잘 완성되지 않고 있었습니다. 그때 마침, 핀란드에서 헬싱키 대학교를 다니던 리누스 토발즈라는 학생이 커널 하나를 완성했습니다. 리누스 토발즈는 유닉스의 교육용 버전인 미닉스라는 운영 체제에서 아이디어를 얻어서 새로운 커널을 만들었고, 리눅스(Linux)라는 이름으로 공개했습니다.

GNU 프로젝트에서는 이 커널을 가져다 쓰기로 했고, 그 결과 드디어 GNU 운영 체제가 완성이 되었습니다. GNU에 리눅스 커널을 합쳐서 만들었기 때문에, 이 운영 체제의 이름을 GNU/Linux라고 부릅니다.

참고로 우리가 흔히 말하는 리눅스는 온전한 운영 체제가 아니라, 운영 체제의 핵심 부분인 커널에만 해당합니다. 그래서 운영 체제를 얘기할 때는 그냥 리눅스(Linux)가 아니라, 반드시 GNU/Linux라고 얘기해야 한다는 사람들도 있습니다. 하지만 사실 그냥 리눅스라고 얘기하는 사람들도 많죠.

이렇게 완성된 GNU/Linux는 폭발적인 반응을 얻게 됩니다. 유닉스도 인기가 많았는데, 그걸 자유롭게 사용할 수 있도록 다시 만들어서 무료로 배포를 하니, 파급 효과가 더욱 컸겠죠. Ubuntu, Red hat, CentOS, Debian 이런 운영 체제들이 다 GNU/Linux를 변형해서 만들어진 겁니다. 이런 것들을 '리눅스 배포판’이라고 부릅니다.

그러니까, 유닉스라는 좋은 운영 체제가 만들어지고, 이걸 자유롭게 변형하고 배포할 수 있는 리눅스까지 만들어지면서 프로그래밍 업계 전체에 큰 영향을 미쳤다고 볼 수 있겠네요.

macOS는?
리눅스는 유닉스를 기반으로 만들어진 운영 체제라고 했었죠? 그런데 사실 유닉스를 기반으로 만들어졌던 운영 체제에는 리눅스뿐만 아니라 다른 것도 있었습니다. 바로 BSD(Berkerly Software Distribution)라고 하는 운영 체제입니다. BSD는 리눅스보다도 더 이전에 탄생한 운영 체제인데요. 유닉스가 여러 곳에서 사용되고 있던 1978년, 미국 UC 버클리(Berkerly, BSD의 첫 글자) 대학의 대학원생이었던 빌 조이(Bill joy)와 척 핼리(Chuck Haley)는 기존의 유닉스를 개량하여 BSD라는 운영체제를 개발했습니다. 이 BSD는 계속 버전이 올라가면서 널리 쓰이기 시작했고 버전이 올라가서 4.3BSD까지도 개발이 되었습니다.

그리고 NeXT라는 컴퓨터 회사에서 이 4.3BSD를 기반으로 NeXTStep이라는 운영 체제를 개발했는데요. NeXT는 사실 스티브 잡스가 그 당시 Apple 내에서 여러 갈등을 겪고 쫓겨난 후에 세운 회사입니다. Apple에서 쫓겨난 잡스가 자신만의 통찰력을 가지고 새로운 시도 혹은 재기를 하기 위해 만든 회사였죠. NeXT에서 만든 운영 체제, NeXTStep은 그 안에 구현된 진보적인 기술들로 인해 많은 주목을 받았는데요. 이 즈음에 잡스가 빠진 Apple은 기존에 가지고 있던 운영 체제의 한계를 극복할 차세대 운영 체제를 만들기 위해 노력하던 중이었습니다. 이를 위해 여러 내부 프로젝트를 시작했지만 매번 실패했고, 결국 외부에서 개발된 좋은 운영 체제를 가져와야겠다는 결심을 하게 됩니다. 이때 NeXTStep이 그 후보 중 하나였는데요. Apple은 결국 당시 존재하던 운영 체제 중에서 NeXTStep을 가져오자는 결정을 내립니다. 그리고 이를 위해 NeXT를 인수하였고 동시에 스티브 잡스는 다시 Apple로 돌아오게 되었습니다.

그 뒤로 Apple에서는 이 NeXTStep을 Apple의 기기에 이식하기 위한 프로젝트를 시작했고, NeXTStep은 오늘날 Apple에 존재하는 다양한 운영 체제인 iOS, macOS, watchOS 등의 기초가 되었습니다. 결국 정리하자면 오늘날의 macOS는 Unix - BSD - NeXTStep - macOS 순의 역사를 거쳐 탄생한 것입니다. 물론, 그 사이에 기술적으로 더 설명해야 할 부분도 있고 다른 운영 체제 이름들도 들어가야 하지만 큰 흐름은 이렇습니다. 왜 macOS도 역사적으로 그 뿌리가 결국 유닉스인지 이제 알겠죠?

이 모든 운영 체제의 공통점
중요한 건, 리눅스와 리눅스의 변형 OS, macOS 모두 유닉스의 표준을 사실상 거의 다 만족한다는 건데요. 앞서 유닉스에는 POSIX라는 표준이 있다고 했죠? 이 표준에 부합해서 공식적으로 인증을 받으면 Unix-certified, 즉 공식 유닉스가 되고요, 만약 이 표준을 인증받지 않았지만, 사용하기에 기능적으로 거의 차이가 없는 정도라면 Unix-like, 유사 유닉스라고 부릅니다.

그리고 재밌는 건, 위에서 macOS 보이시나요? macOS는 인증 절차를 거친 공식 유닉스입니다.

그러니까 이 모든 운영 체제들이 전부 다 비슷비슷하고, 특히 커맨드로 운영 체제를 사용하는 관점에서는 거의 동일하다는 거죠. 개발자 중에서도 운영 체제의 내부와 직결된 부분을 개발하는 사람들이 아니라면, 사실상 큰 차이가 없다고 볼 수 있습니다. 이게 바로 유닉스와 관련된 수많은 운영 체제들에서 유닉스 커맨드를 공통으로 사용할 수 있는 이유입니다.

\*5-1-3. 윈도우에서 유닉스 커맨드를 배우려면?
윈도우에서 유닉스 커맨드를 배우려면?
윈도우에서 유닉스 커맨드를 배우려면 컴퓨터에 우분투(Ubuntu) 같은 유닉스 계열 운영 체제를 설치하면 되는데요. 설치하는 데에는 두 가지 방법이 있습니다. 1) WSL을 사용하는 것과 2) 가상 머신을 사용하는 겁니다.

1. WSL (Windows Subsystem for Linux / Linux용 Windows 하위 시스템)
   WSL은 리눅스 커맨드와 커맨드라인 앱을 윈도우에서 실행할 수 있게하는 가벼운 툴입니다. WSL은 CLI 환경만 지원하는데요. 커맨드를 통해 설치된 리눅스 시스템을 사용할 수 있습니다.

리눅스 배포판 중 하나인 우분투를 설치한 모습입니다.

WSL은 CLI 환경밖에 지원하지 않지만, 유닉스 커맨드를 실행해 보는 데는 아무 문제 없습니다.

2. 가상 머신 (Virtual Machine)
   '가상 머신'이라는 걸 쓸 수도 있는데요. 가상 머신은 여러분이 사용하는 컴퓨터 안에 있는 '또 다른 가상의 컴퓨터'라고 생각하시면 됩니다. 여러분이 윈도우를 쓰고 있더라도 그 안에서 가상 머신을 만들고 그 가상 머신에 우분투 같은 운영 체제를 설치하는 거죠.

가상 머신을 사용하면 실제로 우분투가 설치된 컴퓨터를 사용하는 것과 비슷합니다.

하지만 가상 머신은 WSL에 비해 많은 메모리와 용량을 차지합니다.

어떤 것을 사용하면 될까?
이렇게 해서 컴퓨터에 유닉스 시스템을 설치하는 방법 두 가지를 알아봤는데요. 일반적으로는 첫 번째 방법(WSL)을 권장 드립니다. 커맨드를 배우는 데에는 충분하고, 설치 과정도 훨씬 간단하기 때문인데요. WSL은 윈도우 10 1607 이상 버전만 지원합니다. ([시작 버튼(Start button) > 설정(Settings) > '정보' 검색 > 정보(About) > Windows 사양]에서 확인하세요).

WSL 설치하기

가상 머신에 리눅스 설치하기

윈도우 전용 커맨드라인 툴, PowerShell
윈도우에도 윈도우 전용 커맨드를 실행할 수 있는 커맨드라인 툴이 있습니다. 그중 하나가 PowerShell이라는 툴인데요. PowerShell로는 다양한 작업을 할 수 있고, 기본적인 유닉스 커맨드도 그대로 실행할 수 있습니다. 이번 토픽의 마지막 챕터에서 PowerShell 사용법과 PowerShell에서 사용할 수 있는 유닉스 커맨드를 정리해 놨는데요. 윈도우 유저라면 나중에 꼭 읽어보시는 걸 추천드립니다. 맥 또는 리눅스 유저분들도 읽어보셔도 좋고요!

\*참고로 이번 토픽을 배울 때 PowerShell을 사용하시라는 것은 아닙니다. 이번 토픽을 따라오실 때는 꼭 위에서 설명드린 것처럼 유닉스 운영 체제를 설치한 다음 유닉스 환경에서 커맨드를 익혀보시고, 이번 토픽을 다 들으신 다음 PowerShell에 대해 알아보세요.

\*5-1-6. 터미널 사용해 보기
터미널: 커맨드를 입력하는 검은 창

\*5-1-7. 터미널? shell? bash? -터미널
터미널은 인풋을 받고, 아웃풋을 출력해 주는 프로그램을 뜻합니다. 우리가 보통 생각하는 커맨드를 입력하는 '검은 화면'을 터미널이라고 할 수 있는 거죠.

이전 영상에서 터미널에 date 커맨드를 입력하니까 현재 시간이 출력됐고, cal 커맨드를 입력하니까 이번 달 달력이 출력됐었죠?

-shell, bash 그리고 zsh
shell은 커맨드를 해석해 주는 프로그램입니다.

이전 영상에서는 date나 cal같은 간단한 커맨드를 써봤는데요. 컴퓨터는 사실 date나 cal같은 단어를 이해하지 못합니다. 그래서 이런 커맨드들을 컴퓨터가 이해할 수 있는 형태로 바꿔줘야 하는데, 그게 바로 shell이 하는 역할이죠. shell이 date같은 커맨드를 컴퓨터가 이해할 수 있는 형태로 바꿔서 전달해 주면, 컴퓨터가 실제로 커맨드를 '실행'하고 결과를 되돌려 주는 겁니다.

shell은 여러 종류가 있고, 종류에 따라 커맨드를 해석하는 방식이나 제공하는 인터페이스가 조금은 다를 수 있지만 대부분의 경우 아주 비슷하거나 똑같이 작동하기 때문에 이번 토픽에서는 큰 상관없습니다.

shell 종류 중 하나가 바로 bash(Bourne again shell)인데요. 가장 보편적이고, 많은 유닉스 운영 체제에서 기본 shell로 사용됩니다. 많은 분들이 사용하고 계실 Ubuntu의 기본 shell이기도 하고요. macOS는 10.15 Catalina 이전 버전에는 bash를 기본으로 썼었는데, 10.15 버전 이후부터는 zsh(Z shell)을 기본으로 쓰기 시작했습니다.

아무튼, shell과 터미널은 엄밀히 말하면 서로 다르지만, 커맨드를 입력하는 '검은 화면'을 그냥 shell이라고 부르는 경우도 많으니까 참고해 두시면 좋을 것 같습니다.

\*5-1-8. 커맨드의 기본 형태
아규먼트 또는 인자:어느 대상에 대해 커맨드를 실행할지를 정해주는 것
옵션: 커맨드가 실행되는 방식을 바꿀 수 있다. ex) -특정알파벳 -j, -y
ex) -yj
커맨드 옵션 아규먼트 ex) cal -j 2020

\*5-1-9. 커맨드 매뉴얼: man
커맨드 매뉴얼 검색하기: man (검색해볼 커맨드의 아규먼트)
내려가기: f
올라가기: b
매뉴얼 페이지 나가기: q

\*5-1-10. 터미널 사용 꿀팁 1.위쪽 방향키: 이전에 실행했던 커맨드가 입력된다. 2.커서 이동: 이전에 실행했던 커맨드를 수정하고 싶을 때
-Ctrl + A : 줄 가장 앞부분
-Ctrl + E: 줄 가장 뒷부분
-Alt + <-: 이전 단어로 커서 이동
-Alt + ->:다음 단어로 커서 이동
3.Ctrl + C: 입력이 취소되거나 작업이 종료됨
4.clear 커맨드: 터미널 내용을 지우기 (이전에 실행했던 커맨드 히스토리는 남아있음)
5.Tap: 지금 작성하고 있는 커맨드나 아규먼트가 자동완성 된다.

\*5-1-11. 유닉스 커맨드 시작하기 퀴즈
커맨드를 입력해서 컴퓨터를 사용하는 환경을 command-line interface 환경, 줄여서는 CLI 환경이라고 한다.

\*5-2-1. 유닉스 폴더 구조와 파일 경로
파일과 디렉토리를 다루는 커맨드 -유닉스 디렉토리 구조
바깥에 있는 디렉토리: 상위(또는 부모) 디렉토리
안에 있는 디렉토리: 하위(또는 자식) 디렉토리

중요한 디렉토리: 사용자의 홈 디렉토리

파일경로 만들기: 디렉토리 안으로 들어갈 때는 /를 써준다.
현재 사용자의 홈 디렉토리:~

\*5-2-2. 디렉토리와 파일 둘러보기: pwd, cd, ls
현재 위치해있는 디렉토리: Working Directory

1. pwd: 현재 디렉토리를 확인할 수 있음.
2. cd: 다른 디렉토리로 이동할 수 있음
3. ls: 디렉토리의 내용물을 리스트로 보여줌.

\*5-2-3. 절대 경로와 상대 경로
절대 경로: 루트 디렉토리를 기준으로 어떤 파일이나 디렉토리의 고유한 경로를 표시하는 것.
상대 경로: 현재 자신이 위치해 있는 디렉토리 기준으로 경로는 나타내는 것. 현재 디렉토리를 .으로 표시, 상위 디렉토리를 ..으로 표시 -경로를 아규먼트로 받는 모든 커맨드에 절대 경로, 상대 경로 둘다 사용가능!

\*5-2-4. 주의: 파일이나 디렉토리 이름에 공백이 있을 경우
지금까지 경로와 pwd, cd, ls 커맨드에 대해 알아봤는데요. 만약 파일/디렉토리 이름에 공백이 있으면 어떻게 해야 할까요?

예를 들어 홈 디렉토리 안에 hello world라는 디렉토리가 있다고 합시다. 홈 디렉토리에서 아래 커맨드를 실행하면 오류가 나는데요.

cd hello world
ls hello world
hello world가 두 개의 아규먼트로 인식되기 때문입니다. 이름에 공백이 들어갈 때는 특수 기호를 사용해야 합니다.

1. '' 사용

작은따옴표('')를 사용합니다.

cd 'hello world' 2. "" 사용

큰따옴표("")를 사용합니다.

cd "hello world" 3. \ 사용

역슬래시(\)를 사용합니다. (한국어 키보드에서는 ₩ 키를 사용하시면 됩니다.)

cd hello\ world
꼭 cd 커맨드뿐만이 아니라 파일 경로를 아규먼트로 받는 모든 커맨드에 적용합니다.

자 그런데, 사실 파일이나 디렉토리 이름에는 애초에 공백을 안 사용하는게 더 바람직합니다. 위에서 볼 수 있듯이 공백이 들어가게 되면 커맨드를 입력할 때 쉽게 실수를 할 수 있고, 커맨드가 제대로 작동하도록 따로 신경을 써 줘야 합니다. 그래서 이름에 여러 단어를 사용하고 싶을 때는 공백 대신 \_같은 기호를 사용하는게 좋습니다. (hello world → hello_world)

\*5-2-5. ls의 중요한 옵션들

1. a 옵션: 모든 파일과 디렉토리를 보여줌
2. l 옵션: 파일과 디렉토리에 관한 자세한 정보를 보여줌.

\*5-2-6. 루트(Root) 디렉토리 안에는 어떤 것들이 있을까?
루트 디렉토리(/) 아래에는 수많은 디렉토리들이 있는데요. 이번 레슨에서는 그중에서 알아두면 좋은 디렉토리 몇 개를 살펴볼 겁니다. 노트를 읽어보시면서 각 디렉토리 안에 어떤 것들이 있는지 살펴보셔도 재미있을 겁니다.

ls [-al] [PATH]
/bin
bin은 'binaries'의 약자인데요. binary는 간단히 말해서 컴퓨터가 실행할 수 있는 프로그램을 뜻합니다. 여기서 중요한 사실을 하나 알려드릴게요. 우리가 커맨드를 입력하면 마법같이 어떤 동작이 일어나는데요. 커맨드도 결국 어떤 프로그램입니다. 커맨드를 입력하면 커맨드에 해당하는 프로그램이 실행되는 거죠. 그리고 그 프로그램들의 일부는 바로 이 /bin 디렉토리 안에 있습니다.

ls -l /bin

/bin 디렉토리의 내용을 살펴보면, ls 같은 파일들이 보이죠? ls 커맨드를 입력하면 /bin 안에 있는 ls 프로그램이 실행되는 겁니다.

/sbin
sbin은 bin과 비슷한데, 관리자 전용 프로그램들이 있습니다.

/etc
etc에는 컴퓨터 설정 파일들이 있는데요. 각종 프로그램의 설정 파일, 관리자 권한 설정 파일 같은 것들이 있습니다.

/home 또는 /Users
/home(리눅스) 또는 /Users(맥 OS) 디렉토리에는 사용자들의 홈 디렉토리가 있습니다. 사용자의 홈 디렉토리는 사용자의 모든 파일을 저장해 놓는 곳입니다.

사실 맥 OS에도 /home 디렉토리가 있기는 한데요. 이 디렉토리는 사용되지 않습니다. 안을 확인해 보셔도 아무 파일도 없을 거에요.

/usr
usr은 사용자(user)에게 필요한 파일들을 저장하고 있습니다. /usr 안에도 각종 binary(프로그램 파일)를 저장하고 있는 bin 디렉토리가 있는데요. /bin에는 컴퓨터가 시작하거나 자신을 수리하기 위해서 꼭 필요한 커맨드들이 있고, /usr/bin에는 컴퓨터가 필요하기보다는 사용자가 필요한 커맨드들이 있습니다.

그리고 /usr 안에는 local이라는 디렉토리도 있는데요. 여기에는 사용자가 직접 설치한 프로그램과 관련된 파일들이 있습니다.

\*5-2-8. 디렉토리와 파일 만들기: mkdir, touch
디렉토리 만들기: mkdir 새로 만들 디렉토리 경로
파일 만들기: touch 생성할 파일 이름

\*5-2-9. CLI 텍스트 에디터 vim
vim의 4가지 사용모드

1. 일반 모드 esc
2. 입력 모드 i
3. 비주얼 모드 v, V
4. 명령 모드 :

\*5-2-10. vim으로 파일 작성하기

1. 텍스트 입력

2.텍스트 복사, 잘라내기, 붙여넣기 -텍스트 복사, 잘라내기: 비주얼 모드를 사용한다. \*텍스트 복사하기 1.복사를 시작하고 싶은 부분으로 커서를 이동한다. 2.비주얼 모드로 바꾼다. -줄 단위 복사: 대문자 V -글자 단위: 소문자 v 3.복사하고 싶은 부분을 다 선택한 뒤 y키를 누르면 복사가 된다. 4.커서를 원하는 부분에 두고 p를 누르면 커서 아랫줄에 붙여넣기가 된다. (여러번 붙여넣기도 가능)

\*텍스트 잘라내기 1.잘라내고 싶은 부분으로 커서를 이동한다. 2.비주얼 모드로 바꾼다. 3.잘라낼 부분을 선택한 뒤 d키를 누르면 삭제된다.

-텍스트 복사, 잘라내기, 붙여넣기: y, d, p

-한줄만 복사하거나 잘라내고 싶을 때는 그냥 원하는 커서 위치에서 yy, dd를 누르면 된다.

*파일 저장하기, vim 종료하기
커맨드 모드(:)로 들어가기
*파일 저장하기
:w 파일이름

\*vim 종료하기
:q

\*저장과 동시에 종료하기
:wq

\*변경사항을 저장하기 않고 종료하기
:q!

\*5-2-11. vim 사용법 정리
vim 실행하기
vim 커맨드를 사용하면 됩니다.

vim
파일 경로를 아규먼트로 주면 해당하는 파일을 열거나, 존재하지 않으면 새로 만들어 줍니다.

vim path/to/file
vim의 4 가지 사용 모드
vim에는 4가지 사용 모드가 있습니다:

일반 모드
입력 모드
비주얼 모드
명령 모드
각 모드에서는 아래와 같은 작업을 할 수 있습니다.

그리고 아래와 같은 단축키를 이용해서 모드를 전환할 수 있습니다.

단축키 정리
텍스트 입력: 입력 모드(i) → 텍스트 입력

텍스트 한 줄 복사: 일반 모드 → 복사하고 싶은 줄에 커서 위치 → yy

텍스트 한 줄 잘라내기: 일반 모드 → 잘라내고 싶은 줄에 커서 위치 → dd

특정 영역 복사: 비주얼 모드(V는 줄 단위, v는 글자 단위) → 복사하고 싶은 영역 커서로 설정 → y

특정 영역 잘라내기: 비주얼 모드(V는 줄 단위, v는 글자 단위) → 잘라내고 싶은 영역 커서로 설정 → d

텍스트 붙여넣기: 일반 모드 → 붙여넣고 싶은 위치에 커서 위치 → p

파일 저장: 명령 모드(:) → w + enter

파일 저장 + vim 종료: 명령 모드(:) → wq + enter

vim 종료 (내용 저장되지 않음): 명령 모드(:) → q! + enter

\*5-2-12. 파일 내용 살펴보기: cat, less, head, tail

1. cat (concatenate 이어붙이다)
   파일을 조회할 때 자주 사용하는 커맨드. 아규먼트로 조회할 파일을 넘겨주면 된다.
   여러가지 파일을 조회할 수도 있다.

2. less
   파일 내용을 페이지 단위로 나눠서 보여준다. q를 눌러서 종료할 수 있다.

3. head, tail
   파일의 시작부분이나 끝 부분을 확인할 때 사용한다.
   head: 파일의 처음 10줄을 보여준다.
   tail: 파일의 마지막 10줄을 보여준다.
   -n : head, tail 커맨드의 줄 갯수를 바꿀 수 있다. ex) -n 5

\*5-2-14. 디렉토리와 파일 옮기기, 이름 변경하기: mv
mv 작업할 대상의 경로, 이동할 목적지 또는 변경할 이름 -두번째 아규먼트가 이미 존재하는 이름이라면 그 파일 안으로 이동되고, 그렇지 않으면 변경된다.

\*5-2-15. mv 커맨드 사용시 주의할 점 -두번째 아규먼트가 이미 존재하는 파일이라면 파일을 덮어써 버린다.
-mv 커맨드를 안전하게 사용하려면 i 옵션을 같이 사용하면 된다.

\*5-2-16. 디렉토리와 파일 복사 붙여넣기: cp
cp 복사할 대상의 경로, 복사할 위치
두번째 아규먼트가 이미 존재하는 디렉토리라면 그 안으로 복사되고, 아니면 파일 또는 디렉토리가 생성된다.
r 옵션: 디렉토리를 복사할 때는 꼭 r 옵션을 써야 한다.

\*5-2-17. 디렉토리와 파일 삭제하기: rm
rm 삭제할 파일 또는 디렉토리 경로. 경로 여러개를 줄 수 있음.
r 옵션: 디렉토리를 삭제할 때는 꼭 r 옵션을 써야 한다.
-f 옵션: 이 파일을 지울 것인지 확인하지 않고 그냥 지운다.
디렉토리를 지울 때는 -rf 옵션을 같이 쓰는 경우가 많다.

\*5-2-19. 파일과 디렉토리 커맨드 정리
pwd (print working directory)
사용법:

pwd
예:

pwd
현재 디렉토리 (working directory)의 경로를 출력합니다.

cd (change directory)
사용법:

cd [PATH]
예:

cd dir1
PATH 경로에 해당하는 디렉토리로 이동합니다.

아무 아규먼트 없이 cd를 하면 사용자의 홈 디렉토리로 이동합니다.

-을 사용하면 이전 경로로 돌아갑니다.

cd path/to/foo (foo 디렉토리로 이동)
cd path/to/bar (bar 디렉토리로 이동)
cd - (다시 foo 디렉토리로 이동)
ls (list)
사용법:

ls [-al] [PATH]
예:

ls -al dir1
PATH에 해당하는 디렉토리 / 파일 정보를 보여줍니다. PATH 아규먼트를 안 주면 현재 디렉토리 정보를 보여줍니다.

a 옵션: 숨겨진 파일을 포함한 모든 파일을 보여줍니다.

l 옵션: long format을 사용해서 더 자세한 정보를 보여줍니다.

a, l 외에도 많은 옵션이 있습니다. man ls를 통해 확인해 보세요!

mkdir (make directory)
사용법:

mkdir PATH1 PATH2 ...
예:

mkdir dir2
디렉토리를 생성합니다. 여러 경로를 한꺼번에 줘서 여러 디렉토리를 한꺼번에 만들 수도 있습니다.

touch (touch file)
사용법:

touch PATH1 PATH2 ...
예:

touch file1.txt
경로에 해당하는 파일을 생성합니다. (원래는 파일의 마지막 접근 시간 / 수정 시간을 업데이트하는데 쓰이지만 파일이 존재하지 않으면 새로 생성하기 때문에 파일 생성 용도로도 쓰입니다.)

vim
사용법:

vim [PATH]
예:

vim file1.txt
vim 텍스트 에디터를 실행합니다. 이 레슨을 참고하세요.

cat (concatenate)
사용법:

cat PATH1 PATH2 ...
예:

cat file1.txt
경로에 해당하는 파일들의 내용을 출력합니다. 파일이 여러 개인 경우 내용을 모두 붙여서 출력합니다.

less
사용법:

less PATH
예:

less file1.txt
PATH에 해당하는 파일을 페이지 단위로 나눠서 보여줍니다.

단축키:

줄 이동: 위쪽 / 아래쪽 방향키
다음 페이지: space 아니면 f
이전 페이지: b
마지막 페이지: G
처음 페이지: g
head
사용법:

head [-n count] PATH
예:

head -n 5 file1.txt
PATH에 해당하는 파일의 처음 10줄을 출력합니다.

n 옵션: 출력되는 줄 개수를 바꿉니다.

tail
사용법:

tail [-n count] PATH
예:

tail -n 5 file1.txt
PATH에 해당하는 파일의 마지막 10줄을 출력합니다.

n 옵션: 출력되는 줄 개수를 바꿉니다.

mv (move)
사용법:

mv [-i] SOURCE_PATH DEST_PATH
예:

mv -i file1.txt file2.txt
mv -i file1.txt dir1
디렉토리/파일을 이동하거나 이름을 변경합니다. 두 번쨰 아규먼트(DEST_PATH) 가 이미 존재하는 디렉토리의 경로일 경우 SOURCE_PATH에 해당하는 디렉토리/파일을 그 안으로 이동하고, 그렇지 않으면 DEST_PATH로 이름 변경합니다.

i 옵션: 이동/이름 변경을 할 때 똑같은 이름의 디렉토리/파일이 있으면 덮어씌워집니다. 확인을 하면서 mv를 하려면 i 옵션을 사용하면 됩니다.

cp (copy)
사용법:

cp [-ri] SOURCE_PATH DEST_PATH
예:

cp -i file1.txt file2.txt
cp -ri dir1 dir2
디렉토리/파일을 복사합니다. 두 번째 아규먼트(DEST_PATH) 가 이미 존재하는 디렉토리의 경로일 경우 SOURCE_PATH에 해당하는 디렉토리/파일을 그 안으로 복사하고, 그렇지 않으면 DEST_PATH라는 이름으로 복사합니다.

r 옵션: 디렉토리를 복사할 때는 꼭 r 옵션을 써야 합니다.

i 옵션: 복사할 때 똑같은 이름의 파일이 있으면 덮어씌워집니다. 확인을 하면서 cp를 하려면 i 옵션을 사용하면 됩니다.

rm (remove)
사용법:

rm [-rif] PATH1 PATH2 ...
예:

rm file1.txt file2.txt
rm -rf dir1
경로에 해당하는 파일/디렉토리들을 지워줍니다.

r 옵션: 디렉토리를 삭제할 때는 꼭 r 옵션을 써야 합니다.

i 옵션: 복사할 때 각 파일을 정말 지울 것인지 물어봅니다.

f 옵션: 지울 것인지 절대 확인하지 않고 바로 지웁니다.

\*5-3-1. 외부 프로그램을 설치하는 방법
여러분은 새로운 게임 프로그램을 사용하고 싶으면 어떻게 하나요? 그 게임의 사이트로 가서 설치 파일을 다운로드받고, 설치 파일을 실행해서 게임을 설치하시죠? 그런데 그건 GUI 환경에서 하는 방법입니다. 우리는 지금 CLI 환경에서 커맨드로 컴퓨터를 사용하는 방법을 배우고 있는데요. CLI 환경에서도 커맨드를 쓰면 외부에 있는 프로그램을 설치하는 게 가능합니다. 그런데 외부 프로그램 설치의 경우는 이때까지 배웠던 내용과는 달리 환경에 따라 사용해야 하는 커맨드가 달라집니다.

우분투에서는 apt라는 커맨드
맥 OS에서는 homebrew라는 커맨드
를 각각 써야 하는데요.

예를 들어, A 운영 체제와 B 운영 체제가 둘 다 유닉스 계열의 운영 체제라고 하더라도, 어떤 상황에서는 서로 다른 커맨드를 써야 하는 경우가 있는데, 그중 하나가 이렇게 외부 프로그램을 설치하는 경우입니다. 2가지 환경 모두에 대한 영상을 준비했으니 환경에 맞는 영상을 참고하셔서 외부 프로그램을 설치해 보세요.

\*5-3-2. Ubuntu에서 외부 프로그램 설치하기: apt

\*5-3-3. macOS에서 외부 프로그램 설치하기: homebrew

\*5-3-4. sudo가 뭘까?
각종 튜토리얼이나 온리인 자료를 참고하다 보면 sudo라는 커맨드를 마주칠 수도 있습니다. ('Ubuntu에서 외부 프로그램을 설치하기' 영상을 보신 분들은 이미 마주쳐봤죠?)

sudo는 뭘 하는 커맨드일까요?

유닉스 운영 체제에서 특정 작업을 하려면 관리자 권한이 필요할 때가 있습니다. 특히 설치 관련 작업을 할 때 필요한 경우가 많은데요. 우리가 보통 컴퓨터에서 사용하는 계정은 일반 계정이기 때문에 관리자 권한이 없습니다. 그래서 관리자 권한이 필요한 커맨드를 실행하려고 하면 권한 오류(permission denied)가 나는 거죠. 하지만, 잠시 관리자 권한을 획득할 수는 있습니다. 바로 sudo 커맨드를 통해서죠.

sudo command

sudo 뒤에 command를 쓰면, 관리자 권한을 가지고 command가 실행됩니다. 그러면 권한 문제없이 command를 실행할 수 있는 거죠. sudo를 처음 실행하면 현재 계정의 비밀번호를 물어보는데, 한 번 입력하면 10분~15분 정도는 다시 입력하지 않아도 됩니다.

예)
sudo ls /path/to/file
sudo cat /path/to/file
sudo apt install mc # Ubuntu 예시

사실 sudo 커맨드를 자세히 이해하려면 유닉스의 사용자 권한(permissions)을 잘 이해하고 있어야 하는데요. 일단 지금은, 설치 튜토리얼 같은 걸 따라 하다 보면 sudo라는 커맨드를 마주칠 수 있고, sudo 커맨드는 일시적으로 일반 유저에게 관리자 권한을 부여하는 커맨드라는 것 정도만 기억해 두시면 좋을 것 같습니다!

\*5-5-1. WSL로 윈도우에 있는 파일 접근하기
WSL을 사용하면 듀얼 부팅이나 가상 머신을 사용하는 것보다 더 가볍게 리눅스 환경을 이용할 수 있었습니다. 사실 WSL을 사용하는 데에는 또 다른 장점이 있는데요. 바로 윈도우에 있는 파일에 쉽게 접근할 수 있다는 겁니다. 듀얼 부팅이나 가상 머신을 사용하면 별도의 리눅스 환경이 생성되기 때문에 리눅스를 사용할 때는 윈도우에 있는 파일에 접근하기 어려운데요. WSL은 윈도우 안에 존재하는 '하위 시스템'이기 때문에 윈도우 파일에 쉽게 접근할 수 있습니다. 어떻게 접근하는지 바로 알아볼게요.

윈도우 파일은 /mnt/c 경로에 있습니다. /mnt/c 가 윈도우의 C: 드라이브입니다.

(ls를 했을 때 접근 권한이 없는 파일들이 있을 수도 있습니다.)

사용자의 홈 디렉토리는 C: 드라이브의 Users 디렉토리 안에 있는데요. Users 뒤에 윈도우 사용자 이름을 붙이면 됩니다. 그러니까 사용자 이름이 username이라면 username 사용자의 홈 디렉토리는 /mnt/c/Users/username이 되는 거죠.

이미 /mnt/c에 있었으니까 상대 경로를 사용해서 Users/codeit 안으로 들어갔습니다.

홈 디렉토리에서 원하는 위치로 이동하면 되겠죠?

윈도우에 있는 파일과 디렉토리가 WSL에서도 똑같이 나오는 걸 확인하실 수 있습니다.

cd나 ls같은 커맨드뿐만이 아니라 이번 토픽에서 배운 모든 커맨드, 그리고 아직 배우지 않은 더 복잡한 커맨드들도 사용할 수 있습니다. 이건 개발을 할 때 아주 유용한데요. 윈도우 환경에서 개발을 하면 프로젝트 파일들이 모두 윈도우 파일 시스템에 있겠죠? 리눅스 툴을 활용해서 프로젝트에 대한 테스트나 작업을 해보고 싶다면 WSL을 켜서 윈도우 파일에 바로 접근하면 됩니다. 지금은 그렇게 와닿지 않더라도 일단 윈도우 파일은 /mnt/c 안에 있다는 사실 기억해 두시면 좋을 것 같습니다!

\*참고로 윈도우에서 리눅스 파일에 접근하는 것도 가능은 하지만 윈도우 툴로 리눅스 파일을 열거나 수정하면 리눅스 파일 시스템이 손상될 수 있기 때문에 권장되지 않습니다.

\*5-5-2. 윈도우 PowerShell 알아보기
PowerShell이란?
PowerShell은 윈도우 전용 커맨드라인 툴입니다.

유닉스에 bash/zsh가 있다면 윈도우에는 PowerShell이 있는 거죠. 시스템 관리, 자동화, 개발 등 다양한 작업을 PowerShell에서 할 수 있습니다. 그리고 기본 유닉스 커맨드도 지원하기 때문에 아주 유용하게 쓰입니다.

PowerShell vs cmd(명령 프롬프트)
윈도우 유저라면 cmd(명령 프롬프트/Command Prompt)를 들어보셨을 수도 있는데요. cmd도 윈도우 전용 커맨드라인 툴입니다.

하지만 PowerShell에 비해 기능이 적고 cmd에서 할 수 있는 모든 건 PowerShell에서도 할 수 있습니다. 간단한 작업을 할 때는 cmd를 써도 되지만, PowerShell이 더 복잡한 것도 아니니까 그냥 PowerShell을 쓰는게 무방합니다.

PowerShell 도움말 업데이트하기
PowerShell을 처음 사용한다면 도움말을 업데이트하는 것을 추천드립니다. 그래야 나중에 커맨드의 도움말을 제대로 확인할 수 있습니다. 도움말 업데이트도 PowerShell에서 할 수 있습니다.

윈도우 메뉴에 'powershell'을 검색하고 관리자로 실행해 주세요.

이게 PowerShell인데요. 여기 Update-Help라고 입력한 다음 엔터를 누르세요.

Update-Help

위와 같은 오류가 발생할 수도 있는데요. 무시하시고 넘어가셔도 괜찮습니다.

PowerShell 사용해보기
관리자 권한이 필요할 때는 관리자로 실행하지만, 보통은 일반 사용자로 실행합니다.

기존의 PowerShell 창을 닫고 일반 사용자로 PowerShell을 실행해 주세요.

PowerShell의 배경색이나 글자색, 글자 크기 등을 바꾸고 싶다면 환경 설정으로 들어가면 됩니다.

PowerShell은 기본 유닉스 커맨드를 지원한다고 했는데요. 어떤 커맨드를 지원하는지 알아보겠습니다.

PowerShell과 유닉스 커맨드
PowerShell에서는 아래 유닉스 커맨드를 사용할 수 있습니다:

man
pwd
cd
ls
mkdir
cat
mv
rm
cp
date
clear
이 외에 다른 것들도 사용할 수 있는데, 이 링크를 참고하시면 됩니다.

PowerShell에서는 기본적으로 cmdlet이라고 하는 커맨드들을 사용하는데요. cmdlet은 보통 아래와 같이 생겼습니다.

Action-Object  
하고 싶은 동작과 대상 사이에 - 를 넣는 거죠.

PowerShell에 ls같은 걸 입력하면 ls는 Get-ChildItem이라는 cmdlet을 가리키고 있기 때문에 ls를 사용할 수 있는 겁니다 (이럴 때 ls를 Get-ChildItem의 alias(에일리어스)라고 합니다). 하지만 결국 유닉스의 ls가 아닌 Get-ChildItem이 호출되는 것이기 때문에 옵션을 주는 방법과 커맨드의 동작은 조금 다를 수 있습니다.

실제 유닉스 커맨드와 차이점
경로
우선 윈도우에서는 경로를 표시할 때 / 대신 \(한국 키보드는 ₩)를 사용하는데요. PowerShell에서 /를 입력해도 되지만 프롬프트에 경로를 표시할 때나 자동완성을 활용할 경우 \가 사용됩니다.

옵션
cmdlet 옵션은 한 글자가 아닌 전체 단어입니다 (예: -Recurse). 유닉스 커맨드처럼 한 글자(예: -r)로 줄여 쓸 수 있는 옵션들도 있지만 그럴 수 없는 옵션들도 많고, 일일이 외워야 하기 때문에 PowerShell 옵션을 그대로 사용하는 것을 추천드립니다. 자주 필요한 옵션들은 각 커맨드를 살펴보면서 설명해 드릴게요.

지금부터 유닉스 환경과 PowerShell 환경에서 실행했을 때 차이가 있는 커맨드들을 정리해 드릴 겁니다.

man
man 커맨드를 실행하면 aliasing 하고 있는 cmdlet에 대한 도움말을 보여줍니다.

man ls

ls는 Get-ChildItem을 aliasing 하고 있기 때문에 Get-ChildItem에 대한 도움말이 나옵니다. 여기서 커맨드에 사용할 수 있는 옵션들을 확인할 수 있겠죠?

더 자세한 정보를 보고 싶다면 -Full 옵션을 사용하면 됩니다.

man -Full ls
ls
PowerShell에서 ls를 하면 파일/폴더 이름뿐만이 아닌 다양한 정보가 나옵니다. .으로 시작하는 파일들도 보이고요.

유닉스의 ls -al과 비슷하죠?

touch
PowerShell에 touch라는 alias는 없습니다. 그래서 파일을 생성할 때는 다른 방법을 사용해야 하는데요. 예를 들어 아래와 같은 방법을 사용할 수 있습니다.

$null > filename
filename 이름을 가진 빈 파일이 생성됩니다.

cat
PowerShell의 cat은 아규먼트를 하나만 받습니다. 여러 파일을 아규먼트로 주면 오류가 나니까 주의해 주세요.

cat testfile.txt testfile2.txt # 오류

mv
bash/zsh에서 mv를 했을 때 목적지에 똑같은 이름의 파일/폴더가 있으면 그걸 덮어써버립니다. 하지만 PowerShell에서는 파일이 이미 존재한다는 오류가 납니다.

mv testfile.txt testfile2.txt # 오류

만약 파일을 덮어쓰고 싶다면 -Force 옵션을 사용하면 됩니다.

mv -Force testfile.txt testfile2.txt

cp
mv와 마찬가지로 PowerShell에서는 파일/폴더를 덮어쓰지 않고 오류가 나는데요. -Force 옵션을 사용하면 파일/폴더를 덮어쓸 수 있습니다.

그리고 폴더를 복사할 때는 -Recurse 옵션을 사용해야 합니다.

cp -Recurse foo bar

foo 폴더를 bar라는 이름으로 복사했습니다.

참고로 -Recurse 옵션을 안 줘도 오류 없이 실행되는데, 이런 경우 폴더 자체만 복사되고 안의 내용물은 복사되지 않습니다.

이번에는 foo 폴더를 baz라는 이름으로 복사했는데 baz 안에는 아무것도 없죠?

rm
폴더를 삭제할 때는 -Recurse 옵션을 사용해야 합니다.

사실 -Recurse 안 줘도 되는데, 그러면 안에 있는 파일을 지울 것인지 물어봅니다.

유닉스와 다르죠? 유닉스에서 -r 옵션 없이 폴더를 지우려고 하면 오류가 납니다.

IDE(통합 개발 환경)와 PowerShell
개발을 하다 보면 커맨드라인이 필요한 경우가 많은데요. 따로 터미널을 열지 않고 작업할 수 있도록 대부분의 IDE에서는 IDE 내부에서 터미널을 열 수 있습니다. Visual Studio Code(VScode)나 PyCharm 같은 경우 PowerShell을 기본 터미널로 사용하기 때문에(윈도우의 경우) PowerShell에 익숙하면 좋겠죠?

VSCode의 터미널

PyCharm의 터미널

IDE 안에서 코드 작성과 커맨드 실행을 동시에 할 수 있는 거죠. PowerShell에서 기본 유닉스 커맨드를 실행할 수 있기 때문에 아주 편리할 겁니다.

#step6. React 프론트엔드 개발
\*6-1-1. 리액트의 탄생
페이스북의 개발자 마크 주커버그가 개발함.

\*6-1-2. 개발 환경 세팅하기 (Windows)

\*6-1-4. 나의 첫 리액트 프로젝트
커맨드 요약
-create-react-app으로 리액트 프로젝트 생성
npm init react app <폴더이름> 혹은 vs code로 열고 터미널에서 npm init react app .

개발 모드 실행
npm run start

개발 모드 종료
Ctrl + C

\*6-1-5. 리액트 개발자 도구 살펴보기
리액트 개발자 도구 -> 개발자 도구에서 components 클릭.

\*6-2-1. 프로젝트 소개
주사위 프로젝트, 가위바위보 프로젝트 만들기

\*6-2-2. 리액트 최신 버전에 대한 안내
2022년 3월 8일 이후로 리액트의 18 버전이 나왔습니다. 그래서 수업에서 소개하는 내용 중 index.js 파일에서 코드를 쓰는 방식이 조금 바뀌었는데요.

수업에 소개된 방법으로 프로젝트를 생성하면 최신 버전의 리액트가 설치될 겁니다. index.js 파일을 보시면 ReactDOM.render 가 아니라 ReactDOM.createRoot라는 함수를 사용하는 코드가 만들어지는데요. 수업에서 나오는 코드를 그대로 쓰게 되면 아래와 같은 경고 메시지가 개발자 도구 콘솔창에 나올 수 있습니다.

Warning: ReactDOM.render is no longer supported in React 18

이런 경우 index.js 파일의 코드를 아래처럼 수정하시면 됩니다.

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>안녕 리액트!</h1>);
이후 레슨에서 index.js 파일을 수정하면서 여러 가지를 배우게 될텐데요. 수업에서는 ReactDOM.render() 함수 안에서 코드를 작성하는데, 최신 버전을 사용하시는 분들은 root.render() 함수 안에서 작성하시면 됩니다.

\*6-2-6. JSX
자바스크립트와 html을 섞어서 쓸 수 있는 자바스크립트의 확장된 문법
class -> className
for -> htmlFor

\*6-2-7. 프래그먼트
리액트에서 한개 이상의 태그를 사용하려면 프래그먼트로 감싸주어야한다.
<Fragment> </Fragment>
<></>

\*6-2-9. JSX에서 자바스크립트 사용하기
jsx 문법에서 자바스크립트 코드를 활용하려면 중괄호로 감싸주면 된다.
{변수이름}
중괄호 안에서 메소드를 호출할 수도 있다.
덧셈 연산자를 사용할 수도 있다.

-이벤트 등록하기
태그의 속성(ex) onclick)에 ={}를 붙여주고 중괄호안에 함수를 할당해준다.

\*6-2-11. JSX 문법
JSX란?
JSX는 자바스크립트의 확장 문법인데요. 리액트로 코드를 작성할 때 HTML 문법과 비슷한 이 JSX 문법을 활용하면 훨씬 더 편리하게 화면에 나타낼 코드를 작성할 수가 있게 됩니다.

import ReactDOM from 'react-dom';

ReactDOM.render(<h1>안녕 리액트!</h1>, document.getElementById('root'));
JSX 문법
JSX는 자바스크립트로 HTML과 같은 문법을 사용할 수 있도록 만들어주는 편리한 문법이지만, 그만큼 꼭 지켜야 할 규칙들도 있습니다.

HTML과 다른 속성명

1. 속성명은 카멜 케이스로 작성하기!
   JSX 문법에서도 태그에 속성을 지정해 줄 수 있습니다. 단, 여러 단어가 조합된 몇몇 속성들을 사용할 때는 반드시 카멜 케이스(Camel Case)로 작성해야 합니다.
   사실 여러 단어가 조합된 HTML 속성들이 많진 않지만, 예를 들면 onclick, onblur, onfocus 등과 같은 이벤트 속성이나, tabindex 같은 속성들이 있습니다.
   이런 속성들은 모두 onClick, onBlur, onFocus, onMouseDown, onMouseOver, tabIndex 처럼 작성하는 것이죠!

import ReactDOM from 'react-dom';

ReactDOM.render(
<button onClick= ... >클릭!</button>,
document.getElementById('root')
);
단, 예외적으로 HTML에서 비표준 속성을 다룰 때 활용하는 data-\* 속성은 카멜 케이스(Camel Case)가 아니라 기존의 HTML 문법 그대로 작성하셔야 합니다.

import ReactDOM from 'react-dom';

ReactDOM.render(

  <div>
    상태 변경: 
    <button className="btn" data-status="대기중">대기중</button>
    <button className="btn" data-status="진행중">진행중</button>
    <button className="btn" data-status="완료">완료</button>
  </div>,
  document.getElementById('root')
);
2. 자바스크립트 예약어와 같은 속성명은 사용할 수 없다!
JSX 문법도 결국은 자바스크립트 문법이기 때문에, for나 class처럼 자바스크립트의 문법에 해당하는 예약어와 똑같은 이름의 속성명은 사용할 수 없습니다.
그래서 HTML의 for의 경우에는 자바스크립트의 반복문 키워드 for와 겹치기 때문에 htmlFor로, HTML의 class 속성도 자바스크립트의 클래스 키워드 class와 겹치기 때문에 className으로 작성해 주어야 합니다.

React 공식 문서 - 어트리뷰트의 차이

import ReactDOM from 'react-dom';

ReactDOM.render(

  <form>
    <label htmlFor="name">이름</label>
    <input id="name" className="name-input" type="text" />
  </form>,
  document.getElementById('root')
);
반드시 하나의 요소로 감싸기 - Fragment
JSX 문법을 활용할 때는 반드시 하나의 요소로 감싸주어야 합니다. 그래서 아래 코드처럼 여러 개의 요소를 작성하면 오류가 발생하는데요.

import ReactDOM from 'react-dom';

ReactDOM.render(

  <p>안녕</p>
  <p>리액트!</p>,
  document.getElementById('root')
);
이럴 때는 아래 코드처럼 여러 태그를 감싸는 부모 태그를 만들어 하나의 요소로 만들어 주어야 합니다.

import ReactDOM from 'react-dom';

ReactDOM.render(

  <div>
    <p>안녕</p>
    <p>리액트!</p>
  </div>,
  document.getElementById('root')
);
하지만 이렇게 작성한다면 때로는 꼭 필요하지 않은 부모 태그가 작성될 수 있겠죠? 그럴 땐 Fragment로 감싸주면 의미 없는 부모 태그를 만들지 않아도 여러 요소를 작성할 수 있습니다.

import { Fragment } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<Fragment>

<p>안녕</p>
<p>리액트!</p>
</Fragment>,
document.getElementById('root')
);
참고로 Fragment는 아래 코드처럼 빈 태그로 감싸는 단축 문법으로 활용할 수도 있습니다.

import ReactDOM from 'react-dom';

ReactDOM.render(
<>

<p>안녕</p>
<p>리액트!</p>
</>,
document.getElementById('root')
);
자바스크립트 표현식 넣기
JSX 문법에서 중괄호({})를 활용하면 자바스크립트 표현식을 넣을 수 있습니다.

import ReactDOM from 'react-dom';

const product = '맥북';

ReactDOM.render(

  <h1>나만의 {product} 주문하기</h1>,
  document.getElementById('root')
);
이런 부분들을 잘 활용하면, 아래 코드처럼 중괄호 안에서 문자열을 조합할 수도 있고 변수에 이미지 주소를 할당해서 img 태그의 src 속성값을 전달해 줄 수도 있고, 이벤트 핸들러를 좀 더 편리하게 등록할 수도 있습니다.

import ReactDOM from 'react-dom';

const product = 'MacBook';
const model = 'Air';
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png'

function handleClick(e) {
alert('곧 도착합니다!');
}

ReactDOM.render(
<>

<h1>{product + ' ' + model} 주문하기</h1>
<img src={imageUrl} alt="제품 사진" />
<button onClick={handleClick}>확인</button>
</>,
document.getElementById('root')
);
단, JSX 문법에서 중괄호는 자바스크립트 표현식을 다룰 때 활용하기 때문에, 중괄호 안에서 for, if문 등의 문장은 다룰 수 없다는 점은 꼭 기억해 주세요.
그런데도 만약 JSX 문법을 활용할 때 조건문이 꼭 필요하다면 조건 연산자를, 반복문이 꼭 필요하다면 배열의 반복 메소드를 활용해 볼 수는 있겠죠?

\*6-2-13. 컴포넌트
리액트 컴포넌트: 함수 이름의 첫글자를 대문자로 써야하고, 반드시 jsx 문법으로 만든 리액트 엘리먼트를 리턴해줘야 한다.

\*6-2-15. 컴포넌트 문법
리액트 엘리먼트
JSX 문법으로 작성한 요소는 결과적으로 자바스크립트 객체가 됩니다.

import ReactDOM from 'react-dom';

const element = <h1>안녕 리액트!</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root'));
{$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
이런 객체를 리액트 엘리먼트라고 부르는데요.

이 리액트 엘리먼트를 ReactDOM.render 함수의 아규먼트로 전달하게 되면, 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워주는 것이죠.

리액트 엘리먼트는 리액트로 화면을 그려내는데 가장 기본적인 요소입니다.

리액트 컴포넌트
리액트 컴포넌트는 리액트 엘리먼트를 조금 더 자유롭게 다루기 위한 하나의 문법입니다.

컴포넌트를 만드는 가장 간단한 방법은 자바스크립트의 함수를 활용하는 건데요.
아래 코드에서 JSX 문법으로 작성된 하나의 요소를 리턴하는 Hello 함수가 바로 하나의 컴포넌트입니다.

이렇게 요소를 컴포넌트로 작성하게 되면 다양한 장점들이 있는데,
자세한 내용은 이후의 개념들을 하나씩 배워나가면서 차차 알아보도록 합시다!

import ReactDOM from 'react-dom';

function Hello() {
return <h1>안녕 리액트</h1>;
}

const element = (
<>
<Hello />
<Hello />
<Hello />
</>
);

ReactDOM.render(element, document.getElementById('root'));
그리고 이렇게 컴포넌트를 작성하면,
위 코드에서 element 변수 안의 JSX 코드에서 볼 수 있듯 컴포넌트 함수 이름을 통해 하나의 태그처럼 활용할 수가 있습니다.

이런 특성을 모듈 문법으로 활용하면 훨씬 더 독립적으로 컴포넌트 특성에 집중해서 코드를 작성할 수가 있습니다.

Dice.js

import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {
return <img src={diceBlue01} alt="주사위" />;
}

export default Dice;
App.js

import Dice from './Dice';

function App() {
return (

<div>
<Dice />
</div>
);
}

export default App;
한 가지 주의해야 할 부분은, 리액트 컴포넌트의 이름은 반드시 첫 글자를 대문자로 작성해야 한다는 것입니다.
컴포넌트 이름의 첫 글자가 소문자라면 오류가 발생하니깐 꼭 주의해 주세요!

\*6-2-16. Props
Props: 컴포넌트에 지정한 속성 프로퍼티스의 줄임말.
각각의 속성은 프롭이라고 부른다.

\*6-2-19. children
props를 전달할 때 값이 하나면 children을 써서 값을 전달해준다.
function Button ({ children }){
<button>{children}</button>
}

function App() {
<button>하하하</button>
<button>호호호</button>
}

\*6-2-21. Props 정리하기
Props
JSX 문법에서 컴포넌트를 작성할 때 컴포넌트에도 속성을 지정할 수 있는데요. 리액트에서 이렇게 컴포넌트에 지정한 속성들을 Props라고 부릅니다.

Props는 Properties의 약자인데요. 컴포넌트에 속성을 지정해주면 각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달됩니다.

App.js

import Dice from './Dice';

function App() {
return (

<div>
<Dice color="blue" />
</div>
);
}

export default App;
Dice.js

import diceBlue01 from './assets/dice-blue-1.svg';

function Dice(props) {
console.log(props)
return <img src={diceBlue01} alt="주사위" />;
}

export default Dice;
위 코드들 처럼 App 함수에서 사용하는 Dice 컴포넌트에 color라는 속성을 blue로 지정해주고, Dice 함수 내부에서 props라는 파라미터를 하나 만들어 출력해보면 브라우저 콘솔에는 다음과 같은 출력 결과가 나타나게 됩니다.

{ color: "blue" }
그래서 컴포넌트를 활용할 때 속성값을 다양하게 전달하고 이 props 값을 활용하면, 똑같은 컴포넌트라도 전달된 속성값에 따라 서로 다른 모습을 그려낼 수도 있게 됩니다.

App.js

import Dice from './Dice';

function App() {
return (

<div>
<Dice color="red" num={2} />
</div>
);
}

export default App;
Dice.js

import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
// ...
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
// ...

const DICE_IMAGES = {
blue: [diceBlue01, diceBlue02],
red: [diceRed01, diceRed02],
};

function Dice(props) {
const src = DICE_IMAGES[props.color][props.num - 1];
const alt = `${props.color} ${props.num}`;
return <img src={src} alt={alt} />;
}

export default Dice;
참고로, 이렇게 props가 객체 형태를 띠고 있으니 Destructuring 문법을 활용해서 조금 더 간결하게 코드를 작성할 수도 있겠죠?

import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
// ...
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
// ...

const DICE_IMAGES = {
blue: [diceBlue01, diceBlue02],
red: [diceRed01, diceRed02],
};

function Dice({ color = 'blue', num = 1 }) {
const src = DICE_IMAGES[color][num - 1];
const alt = `${color} ${num}`;
return <img src={src} alt={alt} />;
}

export default Dice;
Children
props에는 children이라는 조금 특별한 프로퍼티(prop, 프롭)가 있습니다.

JSX 문법으로 컴포넌트를 작성할 때 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그의 형태로 작성하면, 그 안에 작성된 코드가 바로 이 children 값에 담기게 됩니다.

Button.js

function Button({ children }) {
return <button>{children}</button>;
}

export default Button;
App.js

import Button from './Button';
import Dice from './Dice';

function App() {
return (

<div>
<div>
<Button>던지기</Button>
<Button>처음부터</Button>
</div>
<Dice color="red" num={2} />
</div>
);
}

export default App;
그래서 JSX 문법으로 컴포넌트를 작성할 때 어떤 정보를 전달할 때는 일반적인 props의 속성값을 주로 활용하고, 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 children 값을 활용할 수가 있습니다.

참고로 이 children을 활용하면 단순히 텍스트만 작성하는 걸 넘어서 컴포넌트 안에 컴포넌트를 작성할 수도 있고, 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있으니깐 이 값을 어떻게 활용하면 좋을지 여러분도 한번 고민해 보시면 좋을 것 같습니다!

\*6-2-23. State

\*6-2-25. 참조형 State
.join() -> 아규먼트로 전달한 값을 배열의 각 요소들 사이사이에 넣어서 결과적으로는 하나의 문자열로 만들어주는 메소드

\*6-2-28. State 정리하기
으로 변경하는 것이 아니라 이 setter 함수를 활용해야 하는데요. setter 함수는 호출할 때 전달하는 아규먼트 값으로 state 값을 변경해 줍니다.

그래서 아래 코드처럼 setter 함수를 활용해서 이벤트 핸들러를 등록해두면, 이벤트가 발생할 때마다 상태가 변하면서 화면이 새로 그려지는 것이죠!

import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function App() {
const [num, setNum] = useState(1);

const handleRollClick = () => {
setNum(3); // num state를 3으로 변경!
};

const handleClearClick = () => {
setNum(1); // num state를 1로 변경!
};

return (

<div>
<Button onClick={handleRollClick}>던지기</Button>
<Button onClick={handleClearClick}>처음부터</Button>
<Dice color="red" num={num} />
</div>
);
}

export default App;
참조형 State
자바스크립트의 자료형은 크게 기본형(Primitive type)과 참조형(Reference type)로 나눌 수 있다는 사실, 모두 알고 계시죠?

특히 참조형 값들은 조금 독특한 특성을 가지고 있어서 변수로 다룰 때도 조금 주의해야 할 부분들이 있었는데요. state를 활용할 때도 마찬가지입니다!

// ...

const [gameHistory, setGameHistory] = useState([]);

const handleRollClick = () => {
const nextNum = random(6);
gameHistory.push(nextNum);
setGameHistory(gameHistory); // state가 제대로 변경되지 않는다!
};

// ...
위 코드에서 볼 수 있듯 배열 값을 가진 gameHistory에 push 메소드를 이용해서 배열의 값을 변경한 다음, 변경된 배열을 setter 함수로 state를 변경하려고 하면 코드가 제대로 동작하지 않습니다.

gameHistory state는 배열 값 자체를 가지고 있는 게 아니라 그 배열의 주솟값을 참조하고 있는 건데요. 때문에 push 메소드로 배열 안에 요소를 변경했다고 하더라도 결과적으로 참조하는 배열의 주솟값은 변경된 것이 아니게 됩니다.

결과적으로 리액트 입장에서는 gameHistory state가 참조하는 주솟값은 여전히 똑같기 때문에 상태(state)가 바뀌었다고 판단하지 않는 것이죠!

그래서 참조형 state를 활용할 때는 반드시 새로운 참조형 값을 만들어 state를 변경해야 합니다.

가장 간단한 방법은 Spread 문법(...) 을 활용하는 것이겠죠?

// ...

const [gameHistory, setGameHistory] = useState([]);

const handleRollClick = () => {
const nextNum = random(6);
setGameHistory([...gameHistory, nextNum]); // state가 제대로 변경된다!
};

// ...
이 참조형 state의 특성을 이해하지 못하면, 간혹 state가 제대로 변경되지 않는 버그가 발생했을 때 원인을 제대로 찾지 못하는 경우가 발생할 수도 있는데요.

참조형 state를 활용할 땐 반드시 새로운 참조형 값을 만들어서 state를 변경해야 한다는 점. 꼭 기억해 두세요!

\*6-2-30. 컴포넌트가 좋은 이유
Component(부품): 리액트의 핵심 개념

컴포넌트의 장점

1. 반복적인 개발이 줄어든다.
2. 오류를 고치기 쉽다.
3. 일을 쉽게 나눌 수 있다. (협업하기 좋음)

\*6-2-31. 컴포넌틑 재사용하기

\*6-2-32. 코드 정리하기

\*6-2-33. 리액트가 렌더링하는 방식
state가 바뀔 때 리액트가 렌더링하는 방식

아무 변화 없는 요소들도 매번 다시 렌더링 되는 문제
-Virtual DOM(가상 DOM)
:효율적으로 화면을 처리할 수 있다!

\*6-2-34. 인라인 스타일

\*6-2-36. CSS 클래스네임
className=""

\*6-2-38. 디자인 적용하는 방법과 팁
앞에서 리액트에서 이미지를 넣고 디자인을 적용하는 방법을 배워보았는데요.

사실 CSS 파일을 불러오거나 이미지 파일을 불러오는 기능은 리액트 고유의 기능이 아니라 Create React App이라는 프로그램이 대신 설정해 준 기능입니다. (참고: Create React App 문서)

이번 레슨에서는 앞에서 배웠던 여러가지 방법들을 복습해보고, 클래스네임을 좀 더 편리하게 쓰는 방법을 소개하겠습니다.

디자인을 적용하는 방법
이미지 불러오기
이미지 파일은 import 구문을 통해 불러오고, 불러온 이미지 주소를 src 속성으로 사용하면 됩니다.

import diceImg from './assets/dice.png';

function Dice() {
return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
인라인 스타일
리액트에서 인라인 스타일은 문자열이 아닌 객체형으로 사용합니다. 프로퍼티 이름은 CSS 속성 이름으로, 프로퍼티 값은 CSS 속성 값으로 쓰는데요, 이때 프로퍼티 이름은 아래의 boarderRadius 처럼 대시 기호 없이 카멜 케이스로 써야 한다는 점도 꼭 기억해두세요.

import diceImg from './assets/dice.png';

const style = {
borderRadius: '50%',
width: '120px',
height: '120px',
};

function Dice() {
return <img style={style} src={diceImg} alt="주사위 이미지" />;
}

export default App;
CSS 파일 불러오기
import 구문으로 파일을 불러올 수 있는데요, 이때 from 키워드 없이 쓰면 됩니다.

import diceImg from './assets/dice.png';
import './Dice.css';

function Dice() {
return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
클래스네임 사용하기
CSS 파일에 정의된 클래스명을 className prop에 문자열로 넣어주면 됩니다. 이때 재사용성을 위해 className prop을 부모 컴포넌트에서 받으면 더 좋습니다.

import diceImg from './assets/dice.png';
import './Dice.css';

function Dice({ className = '' }) {
const classNames = `Dice ${className}`;
return <img className={classNames} src={diceImg} alt="주사위 이미지" />;
}

export default App;
편리하게 클래스네임을 쓰는 방법
앞에서는 여러 className을 템플릿 문자열로 합쳐서 사용했습니다. 몇 개 없을 때는 상관없지만, 개수가 늘어날수록 아래처럼 알아보기 힘들어진다는 문제점이 있는데요.

템플릿 문자열을 사용한 예
function Button({ isPending, color, size, invert, children }) {
const classNames = `Button ${isPending ? 'pending' : ''} ${color} ${size} ${invert ? 'invert' : ''}`;
return <button className={classNames}>{children}</button>;
}

export default Button;
배열을 사용한 예
function Button({ isPending, color, size, invert, children }) {
const classNames = [
'Button',
isPending ? 'pending' : '',
color,
size,
invert ? 'invert' : '',
].join(' ');
return <button className={classNames}>{children}</button>;
}

export default Button;
위 예시 코드처럼 지저분하게 느껴지고, 매번 반복되는 코드를 작성한다는 번거로움이 있습니다. 개발자들은 이럴 때 라이브러리라는 걸 쓰는데요, 다른 개발자가 미리 만들어 놓은 코드를 이용해서 편하게 개발하는 겁니다.

클래스네임의 경우에도 편리하게 사용할 수 있는 라이브러리가 많이 있는데요, 그중에서도 이번에 소개할 라이브러리는 바로 classnames라는 라이브러리입니다. 아래 예시 코드를 보시면 아시겠지만, 클래스네임에만 집중할 수 있어 훨씬 읽기 편해집니다. 이렇게 적절한 라이브러리를 쓰면 개발 생산성이 굉장히 좋아지죠.

classnames 라이브러리를 사용한 예
import classNames from 'classnames';

function Button({ isPending, color, size, invert, children }) {
return (
<button
className={classNames(
'Button',
isPending && 'pending',
color,
size,
invert && 'invert',
)}>
{ children }
</button >
);
}

export default Button;
classnames 은 NPM이라는 프로그램을 통해 설치할 수 있습니다. 터미널에서 npm install classnames 을 입력하고 설치한 다음에, 위 예시처럼 import 로 불러와서 사용하면 됩니다. NPM 저장소 사이트로 들어가면 사용 방법과 설명이 나와있으니, 아래 링크를 한 번 살펴보시고 사용해보는 것도 좋을 것 같습니다.

NPM classnames 패키지: https://www.npmjs.com/package/classnames

\*6-2-40. 마무리 하기 (디자인 예시와 파일)

\*6-3-01. 빌드하기
개발된 프로젝트 빌드하기: 터미널에서 npm run build 입력하기
빌드한 것 로컬에서 실행하기: 터미널에서 npx serve build 입력하기

\*6-3-02. 명령어 다시보기
명령어 복습하기
이번 시간에는 그동안 배운 명령어들을 간단하게 복습하고 넘어가 보도록 하겠습니다.

프로젝트 생성하기
npm init react-app .
터미널에서 원하는 디렉토리에 들어가서 npm init react-app .를 입력하면 현재 디렉토리에 리액트 프로젝트를 생성합니다.

개발 모드 실행하기
npm start (npm run start)
터미널에서 npm run start를 입력하면 개발 모드 서버가 실행됩니다.

실행 중인 서버 종료하기
ctrl + c
서버가 실행 중인 터미널에서 ctrl + c를 입력하면 서버가 종료됩니다.

개발된 프로젝트 빌드하기
npm run build
터미널에서 npm run build를 입력하면 빌드를 시작합니다.

빌드한 것 로컬에서 실행하기
npx serve build
터미널에서 npx serve build를 입력하면 serve 프로그램을 다운 받고 build 폴더에서 서버가 실행됩니다.

\*6-3-03. 웹 사이트 배포하기 (AWS S3)

\*6-3-04. (옵션) 커스텀 도메인 달기 (AWS Route53)

\*6-4-01. 리액트로 데이터를 다루는 방법

\*6-4-02. 수업에서 사용할 VSCode 기능 소개

\*6-4-03. Prettier 설정하는 법 소개

\*6-4-04. 이번에 우리가 만들 프로젝트는?

\*6-4-05. mock 데이터 추가하기

\*6-4-06. map으로 배열 렌더링하기

<ul>
{item.map((item) => {
  return (
    <li></li>
  );
})}
</ul>

\*6-4-08. sort로 정렬 바꾸기
const sortedItems = items.sort((a, b) => b[order] - a[order]);

\*6-4-10. filter로 아이템 삭제하기
const handleDelete = (id) => {
const nextItems = items.filter((item) => item.id !== id);
setItems(nextItems);
};

\*6-4-12. 배열을 렌더링할 땐 key를 기억하세요
li key={item.id}
각 요소를 렌더링 할 때는 반드시 key를 지정해야 한다.
id를 지정할 때는 고유한 값으로 지정해야 한다.

\*6-4-13. key를 써야하는 이유

\*6-4-15. 배열 렌더링하기
앞에서 배열 메소드를 활용해서 렌더링을 하고, 정렬과 삭제 삭제 기능을 만들었는데요.

이번 레슨에선 이 내용들을 가볍게 정리하고 넘어가겠습니다.

pokemon.json

위 JSON 파일은 포켓몬 도감 151번까지의 포켓몬 데이터입니다.

각 데이터를 구분하는 값인 id, 포켓몬 이름을 값으로 하는 name 프로퍼티, 그리고 포켓몬의 속성인 types 프로퍼티가 있습니다.

map 으로 렌더링하기
배열 메소드 map에서 콜백 함수의 리턴 값으로 리액트 엘리먼트를 리턴하면 되는데요.

import items from './pokemons';

function Pokemon({ item }) {
return (

<div>
No.{item.id} {item.name}
</div>
);
}

function App() {
return (

<ul>
{items.map((item) => (
<li key={item.id}>
<Pokemon item={item} />
</li>
))}
</ul>
);
}

export default App;
참고로 반드시 JSX의 중괄호 안에서 map 함수를 써야 하는 것은 아닙니다.

예를 들어서 아래처럼 renderedItems 라는 변수에 map의 결과를 지정해도 똑같이 렌더링 하게 됩니다. renderedItems 의 계산된 값이 결국 리액트 엘리먼트의 배열이기 때문이죠.

import items from './pokemons';

function Pokemon({ item }) {
return (

<div>
No.{item.id} {item.name}
</div>
);
}

function App() {
const renderedItems = items.map((item) => (

<li key={item.id}>
<Pokemon item={item} />
</li>
));

return (

<ul>
{renderedItems}
</ul>
);
}

export default App;
sort 로 정렬하기
배열 메소드의 sort 메소드를 사용하면 배열을 정렬할 수 있었죠?

이렇게 정렬한 배열을 렌더링 할 수 있었습니다.

아래 코드는 id 순서대로 / 반대로 정렬하는 예시입니다.

import { useState } from 'react';
import items from './pokemons';

function Pokemon({ item }) {
return (

<div>
No.{item.id} {item.name}
</div>
);
}

function App() {
const [direction, setDirection] = useState(1);

const handleAscClick = () => setDirection(1);

const handleDescClick = () => setDirection(-1);

const sortedItems = items.sort((a, b) => direction \* (a.id - b.id));

return (

<div>
<div>
<button onClick={handleAscClick}>도감번호 순서대로</button>
<button onClick={handleDescClick}>도감번호 반대로</button>
</div>
<ul>
{sortedItems.map((item) => (
<li key={item.id}>
<Pokemon item={item} />
</li>
))}
</ul>
</div>
);
}

export default App;
filter 로 삭제하기
배열 메소드 중 filter 와 배열형 스테이트를 활용하면

삭제 기능을 간단히 구현할 수 있었습니다.

import { useState } from 'react';
import mockItems from './pokemons';

function Pokemon({ item, onDelete }) {
const handleDeleteClick = () => onDelete(item.id);

return (

<div>
No.{item.id} {item.name}
<button onClick={handleDeleteClick}>삭제</button>
</div>
);
}

function App() {
const [items, setItems] = useState(mockItems);

const handleDelete = (id) => {
const nextItems = items.filter((item) => item.id !== id);
setItems(nextItems);
};

return (

<ul>
{items.map((item) => (
<li key={item.id}>
<Pokemon item={item} onDelete={handleDelete} />
</li>
))}
</ul>
);
}

export default App;
반드시 key 를 내려주자
각 요소를 렌더링 할 때는 key Prop을 내려줘야 하는데요.

이때 가장 바깥쪽에 있는 (최상위) 태그에다가 key Prop을 지정하면 됩니다.

앞에서 id 는 각 요소를 구분할 수 있는 고유한 값이기 때문에 사용했었는데요.

반드시 id 일 필요는 없고 포켓몬 이름처럼(참고로 포켓몬 이름은 고유합니다)

각 데이터를 구분할 수 있는 고유한 값이면 무엇이든 key 로 활용해도 상관없습니다.

import items from './pokemons';

function Pokemon({ item }) {
return (

<div>
No.{item.id} {item.name}
</div>
);
}

function App() {
return (

<ul>
{items.map((item) => (
<li key={item.name}>
<Pokemon item={item} />
</li>
))}
</ul>
);
}

export default App;
`

\*6-4-01. 실습 서버 소개
실습할 서버를 어디서 구하나요?
이제부터 우리가 작성한 코드를 백엔드 서버에 연동하는 방법을 배워볼 겁니다.

프론트엔드만 공부했는데 서버는 어디서 어떻게 구해야 할지, 걸림돌이 될 수 있겠죠?

보통 프론트엔드 개발자들은 직접 서버를 만드는 경우보다는 백엔드 개발자들이 만들어 둔 서버를 사용하는데요.

처음 프론트엔드 개발을 배울 때는 이런 서버가 없어서 네트워크 관련 내용을 따라하기 힘든 경우도 많습니다.

그래서 이번 토픽에서는 실제 개발 상황처럼 여러분이 백엔드 서버를 연동을 할 수 있도록

코드잇에서 만든 백엔드 서버를 제공할 건데요.

저는 이 서버를 실습 서버라고 부르겠습니다.

이번 레슨에서는 실습 서버가 어떤 건지 소개드릴게요.

실습 서버 주소
우리 수업의 영상에서 사용할 실습 서버의 주소는 https://learn.codeit.kr/api/...로 시작합니다.

하지만 이렇게 하나의 주소를 가지고 여러 수강생들이 실습을 하면 서로 데이터가 겹치는 불편함이 있겠죠?

그래서 주소를 나눠 쓸 수 있도록 했는데요. 각 주소마다 데이터가 따로 관리되니 좀 더 편하게 실습할 수 있습니다.

여러분이 실습하실 때는 /api 대신에 /0000 ~ /9999 사이의 숫자 네 자리로 사용하시면 됩니다.

예를들어서 저는 주소를 쉽게 외우기 위해서 제 전화번호 뒷자리인 1636을 사용하려고 하는데요.

이런 경우에는 다음과 같은 주소를 사용하면 됩니다.

https://learn.codeit.kr/1636/film-reviews/
https://learn.codeit.kr/1636/foods/
물론 서버를 나눠서 사용하더라도 여러 사람이 같은 번호를 고르면 서버를 함께 쓰게 됩니다. 데이터가 헷갈려서 불편하다면 이럴 때는 다른 번호를 골라서 사용하시면 됩니다.

여러 사람들이 동시에 사용하는 서버
실습 서버는 여러 수강생들이 함께 사용합니다.

다른 수강생이 만든 데이터가 갑자기 생기거나 내가 만든 데이터가 수정될 수 있습니다.

내가 만든 결과물이 영상에 나오는 결과물이랑 다를 수 있다는 점도 참고해주세요.

또, 이 서버는 여러 수강생이 같이 사용하는 거니까

개인정보나 비밀번호 같은 민감한 데이터를 올리지 않도록 주의하시기 바랍니다!

데이터는 하루에 한 번씩 초기화돼요!
데이터가 계속 쌓이는 걸 막기 위해서 서버 데이터는 매일 새벽 초기화됩니다.

자 그럼 이제 시작해볼까요?
https://learn.codeit.kr/0302

\*6-4-02. 리액트에서 fetch 사용하기
export async function getFoods() {
const response = await fetch('https://learn.codeit.kr/0302/foods');
const body = await response.json();
return body;
}

\*6-4-04. useEffect로 초기 데이터 가져오기
useEffect(() => {
handleLoad();
}, []);

\*6-4-06. 서버에서 정렬한 데이터 받아오기
// api.js
export async function getReviews(order = "createdAt") {
const query = `order=${order}`;
const response = await fetch(
`https://learn.codeit.kr/api/film-reviews?${query}`
);
const body = await response.json();
return body;
}

// App. js
const handleLoad = async (orderQuery) => {
const { reviews } = await getReviews(orderQuery);
setItems(reviews);
};

useEffect(() => {
handleLoad(order);
}, [order]);

\*6-4-08. useEffect 살펴보기
앞에서 useEffect 를 사용해서 초기 데이터를 불러오고 정렬을 바꿀 때마다 데이터를 불러와봤습니다.

이번 노트에선 우리가 사용한 useEffect 함수를 간단하게 정리해봅시다.

처음 한 번만 실행하기
useEffect(() => {
// 실행할 코드
}, []);
컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행합니다.

그 이후로는 콜백 함수를 실행하지 않습니다.

값이 바뀔 때마다 실행하기
useEffect(() => {
// 실행할 코드
}, [dep1, dep2, dep3, ...]);
컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행합니다.

그 이후로 렌더링 할 때는 디펜던시 리스트에 있는 값들을 확인해서

하나라도 바뀌면 콜백 함수를 기억해뒀다가 실행합니다.

실험으로 확인해보기
아래 코드는 useEffect 함수의 동작을 간단한 실험을 해볼 수 있는 코드입니다.

디펜던시 리스트에 [] , [first], [first, second] 를 넣어보면서

콘솔 출력이 어떻게 달라지는지 확인해보세요!

import { useEffect, useState } from 'react';

function App() {
const [first, setFirst] = useState(1);
const [second, setSecond] = useState(1);

const handleFirstClick = () => setFirst(first + 1);

const handleSecondClick = () => setSecond(second + 1);

useEffect(() => {
console.log('렌더링 이후', first, second);
}, []);

console.log('렌더링', first, second);

return (

<div>
<h1>
{first}, {second}
</h1>
<button onClick={handleFirstClick}>First</button>
<button onClick={handleSecondClick}>Second</button>
</div>
);
}

export default App;

\*6-4-09. 페이지네이션이란?
페이지네이션: 책의 페이지처럼 데이터를 나눠서 제공하는 것

1. 오프셋 기반 페이지네이션: 오프셋=상쇄하다=지금까지 받아온 데이터의 갯수
2. 커서 기반 페이지네이션: 커서=특정 데이터를 가리키는 값=지금까지 받은 데이터를 표시한 책갈피

*오프셋 기반 = 받아온 갯수 기준
*커서 기반 = 데이터를 가리키는 커서 기준

\*6-4-10. 데이터 더 불러오기

\*6-4-11. 데이터가 있을 때만 버튼 보여주기
{hasNext && <button onClick={handleLoadMore}>더보기</button>}

\*6-4-12. 조건부 렌더링 꿀팁
앞에서 논리 연산자 && 을 사용해서 간단한 조건부 렌더링을 해봤는데요.

이번 레슨에선 리액트에서 활용할 수 있는 조건부 렌더링에 대한 꿀팁을 알려드릴게요!

논리 연산자 활용하기
AND 연산자
import { useState } from 'react';

function App() {
const [show, setShow] = useState(false);

const handleClick = () => setShow(!show);

return (

<div>
<button onClick={handleClick}>토글</button>
{show && <p>보인다 👀</p>}
</div>
);
}

export default App;
show 값이 true 이면 렌더링 하고, false 이면 렌더링 하지 않습니다.

OR 연산자
import { useState } from 'react';

function App() {
const [hide, setHide] = useState(true);

const handleClick = () => setHide(!hide);

return (

<div>
<button onClick={handleClick}>토글</button>
{hide || <p>보인다 👀</p>}
</div>
);
}

export default App;
hide 값이 true 이면 렌더링 하지 않고, false 이면 렌더링 합니다.

삼항 연산자 활용하기
import { useState } from 'react';

function App() {
const [toggle, setToggle] = useState(false);

const handleClick = () => setToggle(!toggle);

return (

<div>
<button onClick={handleClick}>토글</button>
{toggle ? <p>✅</p> : <p>❎</p>}
</div>
);
}

export default App;
삼항 연산자를 사용하면 참, 거짓일 경우에 다르게 렌더링해줄 수 있습니다.

toggle 의 값이 참일 경우엔 '✅'을, 거짓일 경우에는 '❎'를 렌더링합니다.

렌더링되지 않는 값들
function App() {
const nullValue = null;
const undefinedValue = undefined;
const trueValue = true;
const falseValue = false;
const emptyString = '';
const emptyArray = [];

return (

<div>
<p>{nullValue}</p>
<p>{undefinedValue}</p>
<p>{trueValue}</p>
<p>{falseValue}</p>
<p>{emptyString}</p>
<p>{emptyArray}</p>
</div>
);
}

export default App;
위 컴포넌트에서 중괄호 안에 있는 값들은 모두 아무것도 렌더링하지 않습니다.

function App() {
const zero = 0;
const one = 1;

return (

<div>
<p>{zero}</p>
<p>{one}</p>
</div>
);
}

export default App;
반면에 이 값들은 각각 숫자 0과 1을 렌더링 합니다.

조건부 렌더링을 사용할 때 주의할 점
만약 아래와 같은 코드를 사용하면 어떤 문제가 있을까요?

import { useState } from 'react';

function App() {
const [num, setNum] = useState(0);

const handleClick = () => setNum(num + 1);

return (

<div>
<button onClick={handleClick}>더하기</button>
{num && <p>num이 0 보다 크다!</p>}
</div>
);
}

export default App;
num 값이 0일 때는 false 로 계산되니까 뒤의 값을 계산하지 않기 때문에

아무것도 렌더링 하지 않는 코드 같습니다.

하지만 앞에서 살펴봤듯이 숫자 0은 0으로 렌더링 되는데요.

그래서 처음 실행했을 때 숫자 0이 렌더링 되고

'더하기' 버튼을 눌러서 num 값이 증가하면 num이 0 보다 크다! 가 렌더링 됩니다.

그래서 이런 경우엔 아래처럼 보다 명확한 논리식을 써주는 게 안전합니다.

true 나 false 값은 리액트에서 렌더링 하지 않기 때문이죠!

import { useState } from 'react';

function App() {
const [num, setNum] = useState(0);

const handleClick = () => setNum(num + 1);

return (

<div>
<button onClick={handleClick}>더하기</button>
{(num > 0) && <p>num이 0 보다 크다!</p>}
</div>
);
}

export default App;
편하게 코드를 작성하다 보면 굉장히 자주 하는 실수니까 함께 알아두시면 좋을 겁니다!

\*6-4-13. 비동기로 State를 변경할 때 주의할 점

\*6-4-15. useState 뽀개기
앞에서 비동기로 useState 를 사용할 때 주의할 점을 배웠는데요.
그때 Setter 함수의 또 다른 사용법을 배웠죠?

이번 레슨에서는 초깃값을 지정하는 또 다른 방법에 대해서 소개하고,
여태까지 배운 useState 사용법을 총정리해보도록 하겠습니다.

초깃값 지정하기
const [state, setState] = useState(initialState);
useState 함수에 값을 전달하면 초깃값으로 지정할 수 있었습니다.

콜백으로 초깃값 지정하기
const [state, setState] = useState(() => {
// 초기값을 계산
return initialState;
});
이 방법은 여기서 처음 소개하는 내용인데요,
초깃값을 계산해서 넣는 경우 이렇게 콜백을 사용하면 좋습니다.

무슨 말인지 예시 코드로 한번 살펴볼게요.

function ReviewForm() {
const savedValues = getSavedValues(); // ReviewForm을 렌더링할 때마다 실행됨
const [values, setValues] = useState(savedValues);
// ...
}
getSavedValues 라는 함수를 통해서 컴퓨터에 저장된 초깃값을 가져온다고 해봅시다.

이 코드엔 한 가지 문제점이 있는데요. savedValues 라는 값은 처음 렌더링 한 번만 계산하면 되는데,
매 렌더링 때마다 불필요하게 getSavedValues 함수를 실행해서 저장된 값을 가져온다는 거죠.

function ReviewForm() {
const [values, setValues] = useState(() => {
const savedValues = getSavedValues(); // 처음 렌더링할 때만 실행됨
return savedValues
});
// ...
}
이럴 때는 이렇게 콜백 형태로 초깃값을 지정해주면
처음 렌더링 할 때 한 번만 콜백을 실행해서 초깃값을 만들고,
그 이후로는 콜백을 실행하지 않기 때문에 getSavedValues 를 불필요하게 실행하지 않습니다.

단, 이때 주의할 점은 이 콜백 함수가 리턴할 때까지 리액트가 렌더링하지 않고 기다린다는 점인데요.
콜백 함수의 실행이 오래 걸릴 수록 초기 렌더링이 늦어진다는 점에 주의하세요.

Setter 함수 사용하기
기본
const [state, setState] = useState(0);

const handleAddClick = () => {
setState(state + 1);
}
Setter 함수에다가 값을 전달하면, 해당하는 값으로 변경되었죠?
이때 주의할 점이 있었는데요,
배열이나 객체 같은 참조형은 반드시 새로운 값을 만들어서 전달해야 한다는 거였습니다.

참조형 State 사용의 잘못된 예

const [state, setState] = useState({ count: 0 });

const handleAddClick = () => {
state.count += 1; // 참조형 변수의 프로퍼티를 수정
setState(state); // 참조형이기 때문에 변수의 값(레퍼런스)는 변하지 않음
}
참조형 State 사용의 올바른 예

const [state, setState] = useState({ count: 0 });

const handleAddClick = () => {
setState({ ...state, count: state.count + 1 }); // 새로운 객체 생성
}
콜백으로 State 변경
setState((prevState) => {
// 다음 State 값을 계산
return nextState;
});
만약 이전 State 값을 참조하면서 State를 변경하는 경우,
비동기 함수에서 State를 변경하게 되면 최신 값이 아닌 State 값을 참조하는 문제가 있었습니다.
이럴 때는 콜백을 사용해서 처리할 수 있었는데요. 파라미터로 올바른 State 값을 가져와서 사용할 수 있습니다.
이전 State 값으로 새로운 State를 만드는 경우엔 항상 콜백 형태를 사용하는 습관을 들이면 좋겠죠?

콜백으로 State를 변경하는 예시

const [count, setCount] = useState(0);

const handleAddClick = async () => {
await addCount();
setCount((prevCount) => prevCount + 1);
}

\*6-4-16. 네트워크 로딩 처리하기
const [isLoading, setIsLoading] = useState(false);

let result;
try {
setIsLoading(true);
result = await getReviews(options);
} catch (error) {
console.error(error);
return;
} finally {
setIsLoading(false);
}

<button disabled={isLoading} onClick={handleLoadMore}>
          더보기
</button>

\*6-4-17. 17. 네트워크 에러 처리하기
if (!response.ok) {
throw new Error("리뷰를 불러오는데 실패했습니다");
}

\*6-2-01. 리액트에서 입력 폼 만들기
onChange = onInput처럼 사용자가 값을 입력할 때 마다 이벤트가 발생한다.

\*6-2-02.

\*6-2-03. onSubmit을 써보자
onSubmit = form의 입력값을 서버로 전송할 때 쓰는 이벤트.

\*6-2-04. 하나의 state로 폼 구현하기
function ReviewForm() {
const [values, setValues] = useState({
title: "",
rating: 0,
content: "",
});

\*6-2-06. 제어 컴포넌트와 비제어 컴포넌트 \*제어 컴포넌트(Controlled Component): 인풋의 value 값을 리액트에서 지정.
리액트에서 사용하는 값과 실제 인풋 값이 항상 일치. 주로 권장되느 방법

\*비제어 컴포넌트(Uncontrolled Component): 인풋의 value 값을 리액트에서 지정하지 않음. 경우레 따라서 필요한 방법

\*6-2-07. 입력 폼 뽀개기
앞에서 스테이트를 사용해서 입력 폼을 다루는 간단한 방법과

제어 컴포넌트, 비제어 컴포넌트에 대해서 배웠는데요.

이번 레슨에선 여행 검색을 예시로 보면서 배운 내용을 정리해봅시다!

HTML과 다른 점
onChange
리액트에선 순수 HTML과 다르게

onChange Prop을 사용하면 입력 값이 바뀔 때마다 핸들러 함수를 실행합니다.

oninput 이벤트와 같다고 생각하시면 되는데요.

리액트 개발자들은 주로 onChange 라는 Prop을 사용하니까, 이 내용은 꼭 기억해주세요.

htmlFor
앞에서 잠깐 배운 내용이지만,

<label /> 태그에서 사용하는 속성인 for 는 자바스크립트 반복문 키워드인 for 와 겹치기 때문에

리액트에서는 htmlFor 를 사용합니다.

폼을 다루는 기본적인 방법
스테이트를 만들고 target.value 값을 사용해서 값을 변경해 줄 수 있었습니다.

이때 value Prop으로 스테이트 값을 내려주고, onChange Prop으로 핸들러 함수를 넘겨줬는데요.

function TripSearchForm() {
const [location, setLocation] = useState('Seoul');
const [checkIn, setCheckIn] = useState('2022-01-01');
const [checkOut, setCheckOut] = useState('2022-01-02');

const handleLocationChange = (e) => setLocation(e.target.value);

const handleCheckInChange = (e) => setCheckIn(e.target.value);

const handleCheckOutChange = (e) => setCheckOut(e.target.value);

return (

<form>
<h1>검색 시작하기</h1>
<label htmlFor="location">위치</label>
<input id="location" name="location" value={location} placeholder="어디로 여행가세요?" onChange={handleLocationChange} />
<label htmlFor="checkIn">체크인</label>
<input id="checkIn" type="date" name="checkIn" value={checkIn} onChange={handleCheckInChange} />
<label htmlFor="checkOut">체크아웃</label>
<input id="checkOut" type="date" name="checkOut" value={checkOut} onChange={handleCheckOutChange} />
<button type="submit">검색</button>
</form>
)
}
폼 값을 객체 하나로 처리하기
이벤트 객체의 target.name 과 target.value 값을 사용해서 값을 변경해 줄 수도 있었습니다.

이렇게하면 객체형 스테이트 하나만 가지고도 값을 처리할 수 있었죠.

function TripSearchForm() {
const [values, setValues] = useState({
location: 'Seoul',
checkIn: '2022-01-01',
checkOut: '2022-01-02',
})

const handleChange = (e) => {
const { name, value } = e.target;
setValues((prevValues) => ({
...prevValues,
[name]: value,
}));
}

return (

<form>
<h1>검색 시작하기</h1>
<label htmlFor="location">위치</label>
<input id="location" name="location" value={values.location} placeholder="어디로 여행가세요?" onChange={handleChange} />
<label htmlFor="checkIn">체크인</label>
<input id="checkIn" type="date" name="checkIn" value={values.checkIn} onChange={handleChange} />
<label htmlFor="checkOut">체크아웃</label>
<input id="checkOut" type="date" name="checkOut" value={values.checkOut} onChange={handleChange} />
<button type="submit">검색</button>
</form>
)
}
기본 submit 동작 막기
HTML 폼의 기본 동작은 submit 타입의 버튼을 눌렀을 때 페이지를 이동하는 건데요.

이벤트 객체의 preventDefault 를 사용하면 이 동작을 막을 수 있었습니다.

const handleSubmit = (e) => {
e.preventDefault();
// ...
}
제어 컴포넌트
인풋 태그의 value 속성을 지정하고 사용하는 컴포넌트입니다.

리액트에서 인풋의 값을 제어하는 경우로 리액트에서 지정한 값과 실제 인풋 value 의 값이 항상 같습니다.

이렇게 하면 값을 예측하기가 쉽고 인풋에 쓰는 값을 여러 군데서 쉽게 바꿀 수 있다는 장점이 있어서 리액트에서 권장하는 방법인데요.

이때 State냐 Prop이냐는 중요하지 않고, 리액트로 value 를 지정한다는 것이 핵심입니다.

아래 두 경우 모두 제어 컴포넌트입니다.

예시 1
function TripSearchForm() {
const [values, setValues] = useState({
location: 'Seoul',
checkIn: '2022-01-01',
checkOut: '2022-01-02',
})

const handleChange = (e) => {
const { name, value } = e.target;
setValues((prevValues) => ({
...prevValues,
[name]: value,
}));
}

return (

<form>
<h1>검색 시작하기</h1>
<label htmlFor="location">위치</label>
<input id="location" name="location" value={values.location} placeholder="어디로 여행가세요?" onChange={handleChange} />
<label htmlFor="checkIn">체크인</label>
<input id="checkIn" type="date" name="checkIn" value={values.checkIn} onChange={handleChange} />
<label htmlFor="checkOut">체크아웃</label>
<input id="checkOut" type="date" name="checkOut" value={values.checkOut} onChange={handleChange} />
<button type="submit">검색</button>
</form>
)
}
예시 2
function TripSearchForm({ values, onChange }) {
return (
<form>
<h1>검색 시작하기</h1>
<label htmlFor="location">위치</label>
<input id="location" name="location" value={values.location} placeholder="어디로 여행가세요?" onChange={onChange} />
<label htmlFor="checkIn">체크인</label>
<input id="checkIn" type="date" name="checkIn" value={values.checkIn} onChange={onChange} />
<label htmlFor="checkOut">체크아웃</label>
<input id="checkOut" type="date" name="checkOut" value={values.checkOut} onChange={onChange} />
<button type="submit">검색</button>
</form>
)
}
비제어 컴포넌트
인풋 태그의 value 속성을 리액트에서 지정하지 않고 사용하는 컴포넌트입니다.

function TripSearchForm({ onSubmit }) {
return (

<form onSubmit={onSubmit} >
<h1>검색 시작하기</h1>
<label htmlFor="location">위치</label>
<input id="location" name="location" placeholder="어디로 여행가세요?" />
<label htmlFor="checkIn">체크인</label>
<input id="checkIn" type="date" name="checkIn" />
<label htmlFor="checkOut">체크아웃</label>
<input id="checkOut" type="date" name="checkOut" />
<button type="submit">검색</button>
</form>
)
}
참고로 위처럼 작성해도 onSubmit 함수에서는 폼 태그를 참조할 수 있는데요.

값들을 참조하려면 이벤트 객체의 target 활용해서 이렇게 할 수도 있고,

const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const location = form['location'].value;
const checkIn = form['checkIn'].value;
const checkOut = form['checkOut'].value;
// ....
}
폼 태그로 곧바로 FormValue 를 바로 만드는 것도 가능합니다.

const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const formValue = new FormValue(form);
// ...
}
만약 이렇게 제어 컴포넌트랑 비제어 컴포넌트 모두 쓸 수 있는 경우라면

제어 컴포넌트를 사용하는 걸 추천드립니다!

\*6-2-08. 파일 인풋
반드시 비제어 인풋으로 구현해야 한다.

\*6-2-10. ref로 DOM 노드 가져오기
ref()

\*6-2-11. 파일 인풋 초기화

\*6-2-13. ref와 useRef
앞에서 DOM 노드를 참조할 때 useRef 함수로 Ref 객체를 만들고

이것의 current 라는 프로퍼티를 활용했었는데요.

이번 노트에서는 배운 내용을 사용법 위주로 정리해보겠습니다.

Ref 객체 생성
import { useRef } from 'react';

// ...

const ref = useRef();
useRef 함수로 Ref 객체를 만들 수 있었습니다.

ref Prop 사용하기
const ref = useRef();

// ...

<div ref={ref}> ... </div>
ref Prop에다가 앞에서 만든 Ref 객체를 내려주면 됩니다.

Ref 객체에서 DOM 노드 참조하기
const node = ref.current;
if (node) {
// node 를 사용하는 코드
}
Ref 객체의 current 라는 프로퍼티를 사용하면 DOM 노드를 참조할 수 있었습니다.

current 값은 없을 수도 있으니까 반드시 값이 존재하는지 검사하고 사용해야 하는 점도 잊지 마세요!

예시: 이미지 크기 구하기
다음 코드는 img 노드의 크기를 ref 를 활용해서 출력하는 예시입니다.

img 노드에는 너비 값인 width 와 높이 값인 height 라는 속성이 있는데요.

Ref 객체의 current 로 DOM 노드를 참조해서 두 속성 값을 가져왔습니다.

import { useRef } from 'react';

function Image({ src }) {
const imgRef = useRef();

const handleSizeClick = () => {
const imgNode = imgRef.current;
if (!imgNode) return;

    const { width, height } = imgNode;
    console.log(`${width} x ${height}`);

};

return (

<div>
<img src={src} ref={imgRef} alt="크기를 구할 이미지" />
<button onClick={handleSizeClick}>크기 구하기</button>
</div>
);
}

\*6-2-14. 이미지 파일 미리보기
useEffect(() => {
if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

}, [value]);

\*6-2-15. 사이드 이펙트 정리하기
useEffect(() => {
if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };

}, [value]);

\*6-2-17. 사이드 이펙트와 useEffect
사이드 이펙트(Side Effect)란?
사이드 이펙트는 한국어로는 '부작용'이라는 뜻입니다.

일상생활에서는 '약의 부작용'처럼 사용하는 단어인데요.

예를 들면 감기약을 먹었을 때

감기 증상은 없어졌지만 (작용)

피부가 붉게 올라오면 (부작용)

이 약에는 부작용이 있다고 할 수 있죠.

일상생활에서는 주로 안 좋은 것들을 부작용이라고 부르지만

프로그래밍에선 말 그대로 외부에 부수적인 작용을 하는 걸 말하는데요.

어떤 것인지 간단한 자바스크립트 함수를 예시로 알아봅시다.

let count = 0;

function add(a, b) {
const result = a + b;
count += 1; // 함수 외부의 값을 변경
return result;
}

const val1 = add(1, 2);
const val2 = add(-4, 5);
위 코드에서 add 함수를 봅시다.

이 함수는 a, b 를 파라미터로 받아서 더한 값을 리턴하는데요.

함수 코드 중에서 함수 바깥에 있는 count 라는 변수의 값을 변경하는 코드가 있죠?

add 함수는 실행하면서 함수 외부의 상태(count 변수)가 바뀌기 때문에,

이런 함수를 "사이드 이펙트가 있다"고 합니다.

우리에게 친숙한 예로는 console.log 함수가 있는데요.

console.log 함수를 사용하면 값을 계산해서 리턴하는 게 아니라

웹 브라우저 콘솔 창에 문자열을 출력하죠?

외부 상태를 변경해서 문자열을 출력하는 겁니다.

이렇게 함수 안에서 함수 바깥에 있는 값이나 상태를 변경하는 걸 '사이드 이펙트'라고 부릅니다.

사이드 이펙트와 useEffect
useEffect 는 리액트 컴포넌트 함수 안에서

사이드 이펙트를 실행하고 싶을 때 사용하는 함수입니다.

예를들면 DOM 노드를 직접 변경한다거나,

브라우저에 데이터를 저장하고,

네트워크 리퀘스트를 보내는 것처럼 말이죠.

주로 리액트 외부에 있는 데이터나 상태를 변경할 때 사용하는데요.

간단한 예시들을 보면서 어떤 식으로 활용할 수 있는지 가볍게 살펴봅시다.

페이지 정보 변경
useEffect(() => {
document.title = title; // 페이지 데이터를 변경
}, [title]);
네트워크 요청
useEffect(() => {
fetch('https://example.com/data') // 외부로 네트워크 리퀘스트
.then((response) => response.json())
.then((body) => setData(body));
}, [])
데이터 저장
useEffect(() => {
localStorage.setItem('theme', theme); // 로컬 스토리지에 테마 정보를 저장
}, [theme]);
참고: localStorage 는 웹 브라우저에서 데이터를 저장할 수 있는 기능입니다.

타이머
useEffect(() => {
const timerId = setInterval(() => {
setSecond((prevSecond) => prevSecond + 1);
}, 1000); // 1초마다 콜백 함수를 실행하는 타이머 시작

return () => {
clearInterval(timerId);
}
}, []);
참고: setInterval 이라는 함수를 쓰면 일정한 시간마다 콜백 함수를 실행할 수 있습니다.

useEffect를 쓰면 좋은 경우
여기서 한 가지 의문점이 들 수도 있습니다.

앞에서 우리는 데이터 불러오는 기능 만들 때

처음에는 onclick 이벤트 핸들러에서 네트워크 리퀘스트를 보냈고,

페이지가 열리자마자 데이터를 불러오기 위해서 useEffect 를 사용하는 걸로 바꿨습니다.

하지만 만약 둘 다 가능한 경우라면 핸들러 함수를 써야 하는 걸까요?

아니면 useEffect 를 써야 하는 걸까요?

여기에 정해진 규칙은 없습니다.

하지만 useEffect 는 쉽게 말해서 '동기화'에 쓰면 유용한 경우가 많은데요.

여기서 동기화는 컴포넌트 안에 데이터와 리액트 바깥에 있는 데이터를 일치시키는 걸 말합니다.

이게 어떤 의미인지 간단한 예시를 통해 살펴봅시다.

아래 App 컴포넌트는 인풋 입력에 따라 페이지 제목을 바꾸는 컴포넌트인데요.

핸들러 함수만 사용한 예시
import { useState } from 'react';

const INITIAL_TITLE = 'Untitled';

function App() {
const [title, setTitle] = useState(INITIAL_TITLE);

const handleChange = (e) => {
const nextTitle = e.target.value;
setTitle(nextTitle);
document.title = nextTitle;
};

const handleClearClick = () => {
const nextTitle = INITIAL_TITLE;
setTitle(nextTitle);
document.title = nextTitle;
};

return (

<div>
<input value={title} onChange={handleChange} />
<button onClick={handleClearClick}>초기화</button>
</div>
);
}

export default App;
handleChange 함수와 handleClearClick 함수가 있습니다.

모두 title 스테이트를 변경한 후에 document.title 도 함께 변경해주고 있는데요.

여기서 document.title 값을 바꾸는 건 외부의 상태를 변경하는 거니까 사이드 이펙트입니다.

만약 새로 함수를 만들어서 setTitle 을 사용하는 코드를 추가할 때마다

document.title 값도 변경해야 한다는 걸 기억해뒀다가 관련된 코드를 작성해야 한다는 점이 아쉽습니다.

동료 개발자가 나중에 컴포넌트를 수정하거나 1년 뒤의 내가 컴포넌트를 수정할 때 빠뜨리기 좋겠죠?

useEffect를 사용한 예시
import { useEffect, useState } from 'react';

const INITIAL_TITLE = 'Untitled';

function App() {
const [title, setTitle] = useState(INITIAL_TITLE);

const handleChange = (e) => {
const nextTitle = e.target.value;
setTitle(nextTitle);
};

const handleClearClick = () => {
setTitle(INITIAL_TITLE);
};

useEffect(() => {
document.title = title;
}, [title]);

return (

<div>
<input value={title} onChange={handleChange} />
<button onClick={handleClearClick}>초기화</button>
</div>
);
}

export default App;
useEffect 를 사용한 예시에서는 document 를 다루는 사이드 이펙트 부분만 따로 처리하고 있는데요.

이렇게 하니 setTitle 함수를 쓸 때마다 document.title 을 변경하는 코드를 신경 쓰지 않아도 되니까 편리합니다.

게다가 처음 렌더링 되었을 때 'Untitled'라고 페이지 제목을 변경하는 효과까지 낼 수 있죠.

그리고 이 코드를 본 사람이라면 누구든 이 컴포넌트는 title 스테이트 값을 가지고 항상 document.title 에 반영해줄 것이라고 쉽게 예측할 수 있는데요.

이렇게 useEffect 는 리액트 안과 밖의 데이터를 일치시키는데 활용하면 좋습니다.

useEffect 를 사용했을 때 반복되는 코드를 줄이고, 동작을 쉽게 예측할 수 있는 코드를 작성할 수 있기 때문이죠.

정리 함수 (Cleanup Function)
useEffect(() => {
// 사이드 이펙트

return () => {
// 사이드 이펙트에 대한 정리
}
}, [dep1, dep2, dep3, ...]);
useEffect 의 콜백 함수에서 사이드 이펙트를 만들면 정리가 필요한 경우가 있습니다.

이럴 때 콜백 함수에서 리턴 값으로 정리하는 함수를 리턴할 수 있었는데요.

리턴한 정리 함수에서는 사이드 이펙트에 대한 뒷정리를 합니다.

예를 들면 이미지 파일 미리보기를 구현할 때 Object URL을 만들어서 브라우저의 메모리를 할당(createObjectURL) 했는데요. 정리 함수에서는 이때 할당한 메모리를 다시 해제(revokeObjectURL)해줬었죠.

정리 함수가 실행되는 시점
쉽게 말해서 콜백을 한 번 실행했으면, 정리 함수도 반드시 한 번 실행된다고 생각하면 됩니다.

정확히는 새로운 콜백 함수가 호출되기 전에 실행되거나 (앞에서 실행한 콜백의 사이드 이펙트를 정리), 컴포넌트가 화면에서 사라지기 전에 실행됩니다 (맨 마지막으로 실행한 콜백의 사이드 이펙트를 정리).

예시: 타이머
import { useEffect, useState } from 'react';

function Timer() {
const [second, setSecond] = useState(0);

useEffect(() => {
const timerId = setInterval(() => {
console.log('타이머 실행중 ... ');
setSecond((prevSecond) => prevSecond + 1);
}, 1000);
console.log('타이머 시작 🏁');

    return () => {
      clearInterval(timerId);
      console.log('타이머 멈춤 ✋');
    };

}, []);

return <div>{second}</div>;
}

function App() {
const [show, setShow] = useState(false);

const handleShowClick = () => setShow(true);
const handleHideClick = () => setShow(false);

return (

<div>
{show && <Timer />}
<button onClick={handleShowClick}>보이기</button>
<button onClick={handleHideClick}>감추기</button>
</div>
);
}

export default App;
일정한 시간 간격마다 콜백 함수를 실행하는 setInterval 이라는 함수도 정리가 필요한 사이드 이펙트입니다.

매번 타이머를 시작하기만 하면 타이머가 엄청나게 많아지겠죠?

이 컴포넌트는 렌더링이 끝나면 타이머를 시작하고, 화면에서 사라지면 타이머를 멈춥니다.

코드를 보면서 동작을 살펴볼까요?

사용자가 '보이기' 버튼을 눌렀을 때 show 값이 참으로 바뀌면서 다시 렌더링 됩니다.

조건부 렌더링에 의해서 Timer 컴포넌트를 렌더링 하겠죠?

Timer 컴포넌트에서는 useEffect 에서 타이머를 시작하고, 정리 함수를 리턴합니다.

콘솔에는 '타이머 시작 🏁'이 출력됩니다.

다시 사용자가 '감추기' 버튼을 누르면 show 값이 거짓으로 바뀌면서 다시 렌더링 됩니다.

조건부 렌더링에 의해서 이제 Timer 컴포넌트를 렌더링 하지 않겠죠?

그럼 리액트에선 마지막으로 앞에서 기억해뒀던 정리 함수를 실행해줍니다.

타이머를 멈추고 콘솔에는 '타이머 멈춤 ✋'이 출력됩니다.

이런 식으로 정리 함수를 리턴하면 사이드 이펙트를 정리하고 안전하게 사용할 수 있다는 것.

꼭 기억해주세요!

\*6-2-18. 별점 컴포넌트 만들기


\*6-2-19. 나만의 별점 인풋 만들기
