# javascript-fronf-end-dev

#step1
*topic1.프로그래밍 오버뷰

*topic2.프로그래밍 시작하기 in JavaScript

*topic3.프로그래밍 언어 이해하기
-프로그래밍 언어란?
컴퓨터는 일을 대신 해주는 역할, 프로그램은 컴퓨터가 어떤 일을 해야 할지 알려주는 설명서, 프로그래밍 언어는 그 설명서를 작성하는 언어이다.

-용도, 상황, 프로젝트에 따라 적합한 프로그래밍 언어가 있다.

*객체 지향 프로그래밍
객체 지향: 프로그래밍에 대한 여러 접근 방식 중 하나.
-객체 지향의 장단점 정리
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
(장점)
-유지 보수에 용이하다.
-가독성이 높다.
-재사용하기 좋다.
-테스트가 쉽다.

(단점)
-설계가 어렵다.
-작은 규모의 프로그램에서는 객체 지향적으로 작성하는 것이 더 오래 걸릴 수 있다.
-극도로 빠르거나, 주어진 자원을 극도로 활용해야 하는 경우에는 좋지 않다.
-임베디드와 같은 특정 분야에는 부적합하다.

*Dynamic typing과 Static typing 정리하기
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

-프로그래밍 언어의 종류 총정리하기
1.자세한 언어
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

-가독성 좋은 코드 작성하는 법
1.코멘트 활용하기
2.이름 잘 짓기

-스타일 가이드 활용하기
각 언어의 스타일 가이드를 잘 활용하자.
구글에 언어 + style guide라고 검색하면 스타일 가이드가 나온다.

*스타일 가이드 정리

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

*라이브러리 vs 프레임워크
-라이브러리
이미 누가 만들어 둔 도구를 가져와서 사용!
코드를 가져오는데 돈이 안듬!

-프레임워크
최소한의 노력으로 프로그램 완성 가능!

*좋은 코드를 찾을 수 있는 곳

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


*topic4. 프로그래머의 세계 이해하기

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

*테스트 프로세스
-고려하는 항목
얼마나 시급한가?
담당자는 누구인가?
뺴먹은 버그가 있는가?
버그가 잘 고쳐졌나?

이슈에 관한 정보를 모아놓은것 : 이슈 트레킹 툴
이슈가 많을 경우 프로젝트 매니저가 있는 경우도 있다.

*버전관리
깃: 버전 관리는 하는 소프트웨어
깃허브: 깃을 이용해 코드를 저장하는 온라인 공간

*개발자의 필수 프로그램 IDE
나에게 맞는 IDE 고르기

-유용한 프로그램들
IDE 외에도 개발자들이 많이 사용하는 프로그램들을 살펴보자면.
프로젝트 관리 툴: Jira, Trello, Asana, Confluence
메신저: Slack, Skype, Jandi
디자인 협업 툴: Sketch

StackShare에 가면, 개발자 혹은 개발팀에서 사용하는 다양한 툴을 찾아볼 수도 있다.

*트렌드를 읽는 방법1(활발한 기술)
기술 선택 기준
-많은 사용자가 있는지
-활발한지

어떤 언어가 활발한가?
-커뮤니티 살펴보기
-프로그래밍 언어와 관련된 자료 찾아보기

*트렌드를 읽는 방법2(인정받는 기술)
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

*트렌드를 읽는 방법3(유망한 기술)
IT산업 전반에 대한 이해 필요
웹의 비중이 확대될것이라고 예상 -> 웹의 핵심 언어인 자바스크립트의 인기 UP

*트렌드를 읽는 방법 정리 노트
1.활발한 기술
 1.좋은 기술은 많은 사람들이 사용한다.
 2.많은 사람들이 사용하면 커뮤니티가 활발해 지고, 좋은 토론과 자료들이 많이 만들어 진다.
 3.좋은 토론과 자료를 통해, 더 많은 사람들이 기술을 선택하게 된다.

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

*다양한 애플리케이션
애플리케이션: 소비자가 직접 사용하는 프로그램

*컴파일러와 인터프리터 요약
*컴파일러	
개발 편의성: 코드를 수정하고 실행하려면 컴파일을 다시 해야 한다. 👎
실행 속도: 빠르다. 👍
보안: 프로그램의 코드가 유출되지 않는다. 👍
파일 용량: 프로그램의 실행 파일 전체를 전송해야 하므로, 용량이 크다. 👎
프로그래밍 언어: C, C++처럼 비교적 저수준에 가까운 언어

*인터프리터
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

*운영체제의 역할 I (입력과 출력)
애플리케이션 개발자-> 애플리케이션 개발
운영체제 개발자-> 운영체제 개발

*운영 체제의 역할 II (저장과 불러오기)
1.휘발성 vs 비휘발성
2.빠르고 작은 용량 vs 느리고 많은 용량
3.데이터 수정 가능 vs 데이터 수정 불가능

저장장치
ROM, RAM, HDD, SSD, CPU(cache, register)

*운영 체제의 역할 III (여러 프로그램 동시에 빠르게 실행하기)
운영체제가 여러 애플리케이션의 역할분담, 일하는 순서를 정해준다

*운영 체제의 종류
Windows macOS Android iOS
Windows, Android : 사용자 설정을 더 쉽게 바꿀 수 있음. 보안에 취약
macOS, iOS: 보안이 철저한 대신 환경설정의 선택지가 제한되어 있음.

운영 체제의 종류
1.데스크톱/랩톱 ex) Windows, Microsoft Windows, macOS, Linux
2.모바일: ex) Android, iOS
3.서버: 안정성, 속도, 효율이 가장 중요! Ubuntu, Unix
4.임베디드: 기계안에 들어가는 운영체제 종류나 환경이 다양해서 운영체제가 매우 많음.
실시간 운영 체제(Real-time operating system, RTOS) ex) WxWorks, RT LINUX

*플랫폼의 파편화
-앱을 만드는 개발자의 고충
플랫폼이란?: 프로그램이 실행되는 하드웨어, 소프트웨어 환경
각 플랫폼에 맞게 프로그램을 만들어야함!

-플랫폼 의존성: 플렛폼의 갯수에 맞게 프로그램을 만들어줘야한다.

-플랫폼 의존 구조
   사용자
애플리케이션
  운영체제
  하드웨어

*표준의 필요성
-플랫폼 파편화 문제의 해결책: 표준 (상호간의 약속)

*크로스 플랫폼 I (가상 머신)
-크로스 플랫폼: 여러 OS, CPU 등에서 동일하게 실행할 수 있는 환경
가상의 컴퓨터: 어댑터라고 생각하면됨. java에서 가상머신 JVM을 만듦.

*크로스 플랫폼 II (웹)
-JVM과 비슷한 역할: 웹브라우저. 웹 규격에 맞춰 제작.
-웹은 더 간편하게 크로스 플랫폼을 만들 수 있음 -> 반응형 웹디자인
-국제표준화 기구 ISO: 웹표준
-자바스크립트가 웹에서 많이 쓰이다보이 웹을 넘어서 다양한 곳에서도 많이 쓰이고 있다.
-웹의 문제: 브라우저 호환성 문제
-브라우저: 웹 호환성이 100% 지켜지지않는 이유! 
웹 표준 버전 =/ 웹브라우저 버전, 일부러 웹 표준과 다르게 만듦.

*네이티브 애플리케이션과 웹 애플리케이션
-웹의 기술 발전 -> 웹 애플리케이션 (웹을 활용해서 애플리케이션처럼 동작하는 것)
-앱을 사용자에게 쓰게하려면 네이티브 애플리케이션, 웹 애플리케이션 두 종류가 있다.
-Native Application: OS와 기기에 내장된 여러 기능 활용 가능. 인터넷 없어도 실행 가능. 설치, 배포 과정을 거쳐야함.
-Web Application: 설치없이 실행 가능, 실시간 업데이트, 주소만 입력하면 접속 가능. 적은 투자와 노력으로 서비스 런칭 가능


*웹을 활용하는 여러 가지 방법
-single-page Application: 페이스북, 지메일, 구글맵, 트위터
-Hybrid Web Application: 일반적인 네이티브 애플리케이션의 일부를 웹 사이트로 대체. (정해진 특정 공간만 바꿀 수 있음 ex)앱 속 광고)
-Progressive Web Application: Native Application과 Web Application의 장점만 합치려는 시도. 인터넷이 연결되지 않은 오프라인에서도 동작. 홈 화면에 설치 가능. OS 기능 사용 가능. 앱의 내용을 실시간으로 업데이트 가능. <- 이것들을 충족하면 Progressive Web Application이라고 부른다.


*topic5. 프로그래밍 핵심 개념 in JavaScript
*01.숫자형
- ** 거듭제곱
- % 나머지 연산

*02.숫자 연산 익히기
-연산 우선순위 나눗셈(/), 더하기(+), 나머지(%) 이중에선 더하기가 가장 우선순위가 낮다.
-거듭제곱(**)은 곱셈(*)보다 연산 우선순위가 높다.

*03.문자열 기본
-문자열을 만드려면 "" 또는 ''안에 글자를 써야한다.
-문자열은 반드시 같은 따옴표를 써야한다.

*04.문자열 활용
-문자열 내부의 반복되는 따옴표 앞에 /를 써주면 문자열안의 기호라고 인식한다.
-따옴표가 많아서 헷갈리면 따옴표 대신 백틱(`)을 대신 사용해주면 된다.
-문자열 덧셈 : '문자열' + '문자열'

*07. 불 대수
-불대수의 연산: AND OR NOT
-명제: 참과 거짓이 확실한 문장

*08. 불린형
-불린형: 자바스크립트에서 참과 거짓을 표현하는 자료형
-&&: and 연산자. 두 값이 모두 true일때만 true가 출력된다.
-||: or 연산자. 두 값중 하나만 true여도 true가 출력된다.
-!: not 연산자. true를 false로, false를 true로 만들어준다. 느낌표를 두번(!!) 붙이면 반대의 반대가 출력된다.

*11. typeof 연산자
-typeof: typeof라는 키워드 다음에 값을 입력하면 이 값을 평가해서 해당하는 자료형을 문자열로 출력해준다.
-typeof는 더하기, 빼기 연산자보다 우선순위가 높다.
-다른 연산과 함께 사용할때는 연산의 우선순위를 고려해서 계산할 값은 ()안에 넣어준다.

*14. 형 변환 I
-String: 문자로 형변환해주는 함수. String()
-Number: 숫자로 형변환해주는 함수. Number() 불린값은 숫자형태로 형변환할 때 0과 1로 형변환이 된다.
-Bollean: 일반적으로 어떤 값을 불린으로 변환할때는 true로 변환이 된다. 따옴표만 있는 빈문자, NaN, 숫자 0은 false로 변환된다. 이렇게 false로 변환되는 값을 falsy값이라고 한다.

*16. 형 변환 II
-산술연산(+, -, *, /, %, **)
더하기를 할 때 순서에 상관없이 어느 한쪽이라도 문자열이 있다면 양쪽 모두 문자열로 바꾼 뒤 문자열 연산으로 동작한다.
NaN값은 어느 값과 연산해도 NaN값이 나온다.

-관계 비교 연산(<, <=, >, >=)
양쪽 값을 모두 숫자값으로 바꿔서 비교하는 경우가 일반적이다.

-같음 비교 연산(===, !==, ==, !=)
===,!== : 일치, 불일치
==, != : 동등, 부등
동등 비교는 숫자 형태로 형변환이 일어난다.

*18. 템플릿 문자열
-`문자 ${변수, 계산식} 문자` ex) `내 이름은 ${name}이다.`

*20. null과 undefined
-null, undefined: 값이 없다
-null: 값이 없다는 것을 의도적으로 표현할 때 사용하는 값. 의도적인 없음!
-undefined: 코드를 실행하면서 값이 없다는 것을 확인하는 값. 선언을 한 다음 값을 정해주지 않았다는 것을 의미. 처음부터 없음!

*01. 할당 연산자
할당연산자: 오른쪽에 있는 피연산자를 왼쪽에 있는 피연산자에 할당한다.

*02. 복합 할당 연산자
할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자를 복합 할당 연산자(Compound assignment operators)라고 한다.
x = x + 1;
x += 1;

x = x + 2;
x += 2;

x = x * 2;
x *= 2;

x = x - 3;
x -= 3;

x = x / 2;
x /= 2;

x = x % 7;
x %= 7;

*증가(increment), 감소(decrement) 연산자
변수의 값을 1씩 증가시키거나 감소시킬 때는 복합 할당 연산자보다 더 간략하게 쓸 수 있는 증가연산자, 감소연산자를 사용할 수도 있다.
더하기 기호를 연달아 쓰거나(++), 빼기 기호를 연달아 쓰면 됨(--).

*06. return문 제대로 이해하기
return: 1.결과값을 돌려줌. 2.함수의 실행을 중단함. 함수 내부에서 return 키워드가 나오면 함수의 실행은 그 지점에서 종료됌.

*07. return과 console.log의 차이
함수를 선언할 때 return문을 따로 작성하지 않으면 undefined값을 리턴한다.

*09. 옵셔널 파라미터
파라미터가 있는데 함수를 호출할 때 아무런 값을 전달해주지 않으면 undefined가 출력된다.

-옵셔널 파라미터 
파라미터에 값을 미리 할당하는 것. 
옵셔널 파라미터는 선언을 할때 반드시 생성한 다음 맨 뒷쪽에 써야한다.

*11. 변수의 scope
scope: 범위, 영역
블록문(Block Statement): {}로 감싼 코드
로컬 변수, 지역 변수 (Local Variable) : 블록문 안에서 선언된 변수
글로벌 변수, 전역 변수 (Global Variable): 함수 안이든, 밖이든 어디서나 유효한 변수

*13. 상수
상수 (constant): 절대 변하지 않고 항상 일정한 값

*01. if문
if문: 어떤 특별한 조건에 따라서 코드를 실행할지 말지 결정할 수 있는 문법

*03. else if문
else if (추가 조건)
else {
  if () {

  } else if () {

  }
}

*06. switch문
switch (비교할_값) {
  case 조건값_1:
  동작부분;
  break;
  case2 조건값_2:
  동작부분;
  break;
  default:
  동작부분;
}

*07. switch문 vs if문
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

*09. for문
for문 (for statement)
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}

*10. for문 Tip
1. 추가동작부분을 꼭 채울 필요는 없다.
2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
 -for 반복문의 초기화 부분에서 생성한 변수는 for문 안에서의 로컬변수가 된다.
 -for문 안에서 생성한 로컬변수이기 때문에 for 반복문이 종료되고 나서 for 반복문 밖에서 변수를 사용하려고 하면 오류가 발생한다.
3. 초기화 부분도 반드시 채울 필요는 없다. 단, for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없다.
 -for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요하다. 그렇지 않으면 실행 오류를 만나게 된다.


*13. while문 (while statement)
while (조건부분) {
  동작부분
}

*16. break와 continue
-break는 반복문에도 활용할 수 있다.
break를 반복문에서 활용하면 반복문의 조건부분에 상관없이 반복문이 실행되는 도중에 빠져나올 수 있다.

-continue를 만나게되면 그 아래 코드들은 실행되지 않고 바로 다음 추가 동작 단계로 넘어간다.


#프로그래밍과 데이터 in JavaScript
#03.객체
-여러가지 값을 한번에 저장하고 싶다면 객체라는것을 사용하면 된다.
-객체는 자바스크립트의 거의 모든 문법에 녹아있다.

*Property Name 주의사항!
1. 첫번쨰 글자는 반드시 문자, 밑줄(_), 달러기호($) 중 하나로 시작!
2  띄어쓰기 금지!
3. 하이픈(-)금지! 

*Property Value
-제한된 자료형이 없다.(모든 자료형 가능)
- 객체안에 객체를 넣는것도 가능

#03. 객체에서 데이터 접근하기
객체의 프로퍼티에 접근하는 방법 2가지
1. 점 표기법 ex) console.log(person.name);
-프로퍼티네임.프로퍼티밸류
2. 대괄호 표기법 console.log(person['name']);
-띄어쓰기나 숫자로 시작하는 프로퍼티에 접근 가능
-프로퍼티 네임을 문자열로 만드는 어떤 방법이든 사용 가능

존재하지않는 프로퍼티에 접근하려고하면 오류가 나는게 아니라 undefined 값이 나온다.

*05. 객체 다루기
-객체의 프로퍼티 값 바꾸기
변수이름.프로퍼티네임 = '새로운 값'

-새로운 프로퍼티 추가하기
변수이름.추가할프로퍼티네임 = '추가할 값'

프로퍼티 삭제하기
-delete 변수이름.프로퍼티네임

*07. 객체와 메소드
-객체의 메소드: 변수의 객체에 프로퍼티 값으로 들어가는 함수

*for...in 반복문
객체의 프로퍼티 네임을 가져오는 반복문. 일반적인 for문으로는 대체할 수 없다.
for (변수 in 객체) {
  동작부분
}
-변수의 프로퍼티 네임들이 순서대로 출력된다.

*10. for...in 주의사항
1.숫자형(양수) 프로퍼티 네임
프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있다. 
-다만 실제로 사용될 때는 문자열로 형 변환이 되어 사용된다.
-예외적인 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능하다.

2.정수형 프로퍼티 네임
객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있다.

*12. Date객체
내장객체: 자바스크립트가 원래 갖고있는 객체
Date객체: Date객체를 생성한 순간의 날짜를 가져온다. new Date();

new Date(1000); -> 1970년 1월 1일 00:00:00 UTC + 1초!
원하는 날짜를 문자열로 입력해서 객체를 생성할 수 있음 -> new Date('YYYY-MM-DD'); 
ex) new Date('2017-05-18');
시간까지 지정 가능 -> new Date('YYYY-MM-DDThh:mm:ss');

Date.getTime(); -> 1970년 1월1일 00:00:00 UTC부터 몇 밀리초 지났는지..? -> 타임스탬프(time Stamp)

*13. Date객체 Tip
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
splice(2, 1, '23', '25') 첫번쨰:삭제할 인덱스, 두번째:삭제할 갯수, 세번째:추가할 요소

#07. 배열 메소드 II
배열의 첫 요소를 삭제: shift()
배열의 마지막 요소를 삭제: pop()
배열의 첫 요소로 값 추가: unshift()
배열의 마지막 요소로 값 추가: push()

#09. 배열 메소드 Tip
1.배열에서 특정 값 찾기 (indexOf / lastIndexOf)
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
-let millionaire = 1000000000; === let myNumber = 1e9; 
-지수 표기법 
지수 표기법은 컴퓨터 뿐만 아니라 과학, 공학, 수학처럼 숫자를 다루는 다양한 분야에서 아주 큰 수나 작은 수를 표기하는 방법 중 하나이다. -알파벳 e 오른쪽 값이 음수가 되면 이 숫자만큼 10의 거듭제곱으로 나누라는 의미이다. -> (-9.1e-5 === -0.000091); 
-숫자 표기법 
-16진법 (Hexadecimal) let hex1 = 0xff; // 255 let hex2 = 0xFF; // 255 
-8진법 (Octal) let octal = 0o377; // 255 // 2진법 (binary numeral system) let binary = 0b11111111; // 255

#숫자형 메소드 
// Number let myNumber = 0.3591;

// toFixed(0 ~ 100) -소수를 다룰 때 사용하는 메소드. 파라미터로 숫자값을 전달해주면 그만큼 소숫점 아래의 자릿수를 고정해주는 메소드이다. 
console.log(myNumber.toFixed(3)); 
-파라미터로 전달하는 값이 숫자값의 자릿수를 초과하게되면 0으로 대체된다. 
-주의해야할점 -> toFixed 메소드를 사용해 계산된 값은 문자열이다. 
-이 메소드로 수정된 값을 숫자로 사용하고 싶을때는 number 함수를 이용해서 숫자로 형변환을 해줘야한다. console.log(typeof Number(myNumber.toFixed(3))); -자바스크립트에서는 어떤 값 앞에 +기호를 붙여주면 number 함수와 똑같은 결과를 얻을수 있다. console.log(+myNumber.toFixed(3));

// toString(2 ~ 36) let myNumber = 0.3591;

console.log(myNumber.toString(2)); -> 11111111 console.log(myNumber.toString(8)); -> 377 console.log(myNumber.toString(16)); -> ff -결과값은 '문자열'이다.

-숫자형 메소드를 사용할 때 주의해야할 점 : 숫자에 바로 메소드를 사용할 수도 있는데, 숫자를 그냥 적으면 에러가 발생한다. 정수에 바로 점을 찍게되면 소숫점으로 인식하기 때문. -> 정수 형태의 숫자 값에는 메소드를 사용할 때
1.반드시 점 두개를 사용하거나, 255.. 2.양 옆을 괄호()로 감싸준다.

#04. Math 객체 
-절댓값 (Absolute Number) : 어떤 값의 '양수(positive number)' 버전. console.log(Math.abs(-10)); -> 10 console.log(Math.abs(10)); -> 10

-최댓값 (Maximum) : Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴된다. console.log(Math.max(2, -1, 4, 5, 0)); -> 5

-최솟값 (Minimum) : Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴된다. console.log(Math.min(2, -1, 4, 5, 0)); -> -1

-거듭제곱 (Exponentiation) : 자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴된다. console.log(Math.pow(2, 3)); -> 8 console.log(Math.pow(5, 2)); -> 25

-제곱근 (Square Root) : Math.sqrt(x)를 하면 x의 제곱근이 리턴된다. console.log(Math.sqrt(25)); -> 5 console.log(Math.sqrt(49)); -> 7

-반올림 (Round) : Math.round(x)를 하면 x의 반올림된 값이 리턴된다. 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려간다. console.log(Math.round(2.3)); -> 2 console.log(Math.round(2.4)); -> 2 console.log(Math.round(2.49)); -> 2 console.log(Math.round(2.5)); -> 3 console.log(Math.round(2.6)); -> 3

-버림과 올림 (Floor and Ceil) : Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다. 이 경우, 소수 부분이 얼마 인지와는 상관이 없다. console.log(Math.floor(2.4)); -> 2 console.log(Math.floor(2.49)); -> 2 console.log(Math.floor(2.8)); -> 2 console.log('-'); -> - console.log(Math.ceil(2.4)); -> 3 console.log(Math.ceil(2.49)); -> 3 console.log(Math.ceil(2.8)); -> 3

-난수 (Random) : Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴된다. console.log(Math.random()); -> 0.21458369059793236 console.log(Math.random()); -> 0.6622040803059857 console.log(Math.random()); -> 0.785172717569619 console.log(Math.random()); -> 0.9056556038884926

#바보 자바스크립트? let sum = 0.1 + 0.2; console.log(sum); -> 0.30000000000004 ?! -사람과 컴퓨터가 숫자를 다루는 방식이 다르기 때문에 숫자를 계산할 때 오차가 발생한다. -오차를 해결하는 방법 
1.toFixed() 메소드 사용하기 toFixed 값은 문자열이기 때문에 숫자로 형변환을 해주어야한다. -> console.log(Number(sum.toFixed(1))); Number 메소드 사용하기 -> console.log(+sum.toFixed(1)); + 붙여주기 
2.Math.round() 메소드 사용하기 -> console.log(Math.round(sum * 10) / 10);

#07. 문자열 심화 
-자바스크립트에서는 문자열도 객체처럼 다룰 수 있다. 문자열은 배열과 비슷한 부분이 많다. // String myString = 'Hi codeit';

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

#문자열과 배열의 비슷한 점 
-배열과 문자열 모두 length프로퍼티를 가지고 있고, 대괄호 표기법으로 각 요소에 접근할 수 있다. 꽤 많은 메소드들이 배열과 문자열 모두 동일하게 사용된다. 배열을 다룰 때 유용한 for..of문을 문자열에 활용할 수도 있다.

let myString = 'Codeit';

for (let str of myString) { console.log(str); } -> C o d e i t

console.log(typeof myString); -> string (문자열은 string(문자)) console.log(typeof myArray); -> object (배열은 object(객체)) -typeof 연산자를 사용해서 두 값의 자료형을 비교해보면, string과 object, 확실히 서로 다른 자료형인걸 확인할 수 있고,

console.log(myString === myArray); -> false console.log(myString == myArray); -> false -일치 비교뿐만 아니라, 느슨하게 비교하는 동등비교에서도 false가 출력되는걸 확인할 수 있다.

-mutable vs immutable -가장 중요한 차이는 배열은 'mutable(바뀔 수 있는)' 자료형인 반면 문자열은 'immutable(바뀔 수 없는)' 자료형이라는 것이다. -베열은 요소에 접근해서 할당연산자를 통해 요소를 수정할 수 있지만, 문자열은 한 번 할당된 값을 수정할 수 없다. 다르게 표현해서, 변수에 할당된 문자열을 바꾸고 싶다면, 일부를 바꾸는 게 아니라 새로운 문자열을 지정해주어야 한다.

// 배열은 mutable let myArray = ['C', 'o', 'd', 'e', 'i', 't']; myArray[0] = 'B'; console.log(myArray); -> (6) ["B", "o", "d", "e", "i", "t"]

// 문자열은 immutable let myString = 'Codeit'; myString[0] = 'B'; console.log(myString); -> Codeit

#기본형과 참조형 
-자료형 (Date Type) : 기본형, 참조형 
-Number String Null Bollean undefined 
기본형 (Primitive Type) : 변수에 기본형 값을 다루는 방식은 모두 똑같다. 
ex) let x = 3; 
-Object 
참조형 (Reference Type) : 변수에 객체를 할당하면 변수에 객체가 담기는 것이 아니라 그 객체를 가지고 있는 주소값이 담기는 것이다. ex) let x = {name: "codeit"}; -> 기본형 값을 변수에 담아 사용할 때는 값이 그대로 할당되고, 참조형 값을 변수에 담아 사용할 때는 해당 객체를 가리키는 주소값이 할당된다.

#참조형 복사하기 
-참조형 값은 변수에 할당될 때 값 자체가 아니라 '주소값'이 할당된다.

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

*참고 : 이렇게 함수를 기준으로만 적용되는 스코프는 함수 스코프, 코드 블록을 기준으로 적용되는 스코프는 블록 스코프라는 용어를 사용한다.

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
*02. 기본 HTML 태그 정리

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

*04. <b> 태그, <i> 태그 정리
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

*04. 도움되는 웹사이트
1.구글
2.스택오버플로우
3.jsfiddle.net

Serif - 끝이 구부러진 것이 특징
San-Serif - 끝이 구부러진게 없이 깔끔함.
Monospace - 모든 글자가 같은 넓이를 차지한다. 
Cursive - 필기체
Fantasy - 그 외의 특이한 폰트

*background-repeat
/* 반복하지 않음 */
background-repeat: no-repeat;

/* 가로 방향으로만 반복 */
background-repeat: repeat-x;

/* 세로 방향으로만 반복 */
background-repeat: repeat-y;

/* 가로와 세로 모두 반복 */
background-repeat: repeat;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */
background-repeat: space;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */
background-repeat: round;


*background-size
/* 원래 이미지 사이즈대로 출력 */
background-size: auto;

/* 화면을 꽉 채우면서, 사진 비율을 유지 */
background-size: cover;

/* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */
background-size: contain;

/* 픽셀값 지정 (가로: 30px, 세로: 50px로 설정) */
background-size: 30px 50px;

/* 퍼센트값 지정 (가로: 부모 요소 width의 60%, 세로: 부모 요소 height의 70%로 설정) */
background-size: 60% 70%;


*background-position
/* 단어로 지정해주기 (가로: left, center, right, 세로: top, center, bottom) */
/* 아래와 같은 총 9개의 조합이 가능 */
background-position: left top;
background-position: left center;
background-position: left bottom;
background-position: right top;
background-position: right center;
background-position: right bottom;
background-position: center top;
background-position: center center;
background-position: center bottom;

/* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */
background-position: 25% 75%;

/* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 100px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */
background-position: 100px 200px;

*display의 종류
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

*inline-block
만약 inline 요소처럼 다른 요소들과 같은 줄에 머무르면서 block 요소처럼 가로, 세로 길이도 설정해주고 싶으면 inline-block을 사용하면 된다.

*<img> 태그의 비밀
<img> 태그는 인라인이기 때문에 글자처럼 정렬이 된다.

*가로 가운데 정렬
1. inline 요소
inline 또는 inline-block 요소면 부모 태그에 text-align: center;를 써주면 된다.

2. block 요소
block 요소면 margin-left: auto;, margin-right: auto;를 써주면 된다.

*01. relative 포지션
Static position: 원래 있어야 할 자리에 있는 것 (기본)
Relative position: 상대적인 포지션. 원래 있어야할 곳에서 이동

*04. fixed 포지션
Fixed position: 브라우저를 기준으로 포지셔닝을 해주는 것. 스크롤을 움직여도 똑같은 자리에 고정되어 있다. fixed로 위치를 바꿔주면 원래 있던 곳에서 빠져나온다.

*04. absolute 포지션
Absolute position: 가장 가까운 포지셔닝이 된 요소가 기준.

*01. float
float를 적용하면 붕뜨면서 그 공간은 공백이 된다. 인라인 요소나 인라인 블록 요소는 float 공간에 갈 수 없다.

*03. multiple floats

*05. clear
clear: 요소의 옆에 떠있는 요소가 없도록 함.

*01. 리스트
ol: <ol> 정렬된 목록을 나타낸다. 보통 숫자 목록으로 표현한다.
li: <li> 목록의 항목을 나타낸다. 반드시 정렬 목록(<ol>), 비정렬 목록(<ul>, 혹은 메뉴(<menu>) 안에 위치해야 한다. 

*03. 부트스트랩 그리드
-기본 구성원
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

*04. 부트스트랩 반응형 그리드
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
  width: 100%; /* extra small */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* small */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* medium */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* large */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* extra large */
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
#4-1.인터랙티브 자바스크립트 시작하기

*03. id로 태그 선택하기
getElmentById
존재하지 않는 id를 선택하려고하면 null 값이 나온다.

*05. class로 태그 선택하기
getElmentsByClassName - 여러 태그를 한꺼번에 선택 가능
getElmentsByClassName으로 클래스가 하나 밖에 없는 태그를 선택하려고하면 요소 한개가 들어있는 HTMLCollection이 선택된다.
존재하지 않는 클래스를 선택하려고하면 빈 HTMLCollection이 출력된다.

*06. 유사 배열(Array-Like Object)이란..?
-유사 배열(Array-Like Object)이란?
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

*08. 태그 이름으로 태그 선택하기
document.getElementsByTagName('태그이름')메소드를 활용하면 태그 이름으로 태그를 선택할 수 있다.
const btns = document.getElementsByTagName('button');
이렇게 하면 HTML 문서 내에 있는 모든 button 태그를 선택하게 된다.

document.getElementsByClassName('class')메소드와 마찬가지로 태그 이름으로 요소를 찾는 경우에 여러 개의 요소가 선택될 수 있기 때문에 메소드 이름에 Element(s), s가 있고, 실행결과 역시 HTMLCollection을 리턴한다는 점도 기억해야한다.
참고로 css 선택자처럼 '*' 값을 전달하게 되면 모든 태그를 선택할 수도 있다.

*09. css 선택자로 태그 선택하기
querySelector - 한개의 태그를 선택할 때 사용
querySelectorAll - 여려개의 태그를 선택할 때 사용
querySelector 메소드를 활용해 존재하지 않는 요소를 선택할 경우에는 null 값을 리턴한다.

*11. 이벤트와 버튼 클릭
이벤트 핸들링: 이벤트가 발생했을 때 어떤 특별한 동작을 하도록 이벤트를 다루는 것.
이벤트 핸들러: 이벤트를 다루는 구체적인 함수 부분.

*13. 종합 정리
1. 자바스크립트로 태그 선택하기
-메소드
1. document.getElementById('id') 
2. document.getElementsByClassName('class')
3. document.getElementsByTagName('tag')	
4. document.querySelector('css')
5. document.querySelectorAll('css')

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

2. 유사 배열이란?
배열과 유사한 객체 ex) HTMLCollection, NodeList, DOMTokenList, ...

특징
1. 숫자 형태의 indexing이 가능하다.
2. length 프로퍼티가 있다.
3. 배열의 기본 메소드를 사용할 수 없다.
4. Array.isArray(유사배열)의 리턴값은 false다.

3. 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
-이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
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

*01. 브라우저도 객체다?
window : 전역객체 (Global Object)
window 객체: 자바스크립트로 브라우저가 가지고 있는 다양한 정보를 얻거나 브라우저를 제어할 수 있다.

*02. DOM
DOM (Document Object Model) 문서 객체 모델: 웹페이지에 나타나는 html 문서 전체를 객체로 표현한 것
document 객체을 활용하면 웹페이지의 내부에 무엇이든 수정할 수 있고 새로운 컨텐츠를 만들어낼 수 있다.

객체형태로 보기: console.dir()

*03. console.dir?
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

*04. DOM 트리
DOM 트리
부모 노드
자식 노드
형제 노드
텍스트 노드 (잎 노드)

*05. DOM 트리 여행하기
-부모 요소 노드
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

*06. DOM 트리 여행하기: 부록

-요소 노드에 대한 이동 프로퍼티
프로퍼티
1. element.children	(자식 요소 노드) -element의 자식 요소 모음(HTMLCollection)
2. element.firstElementChild (자식 요소 노드) -element의 첫 번째 자식 요소 하나
3. element.lastElementChild (자식 요소 노드) -element의 마지막 자식 요소 하나
4. element.parentElement (부모 요소 노드) -element의 부모 요소 하나
5. element.previousElementSibling	(형제 요소 노드) -element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
6. element.nextElementSibling (형제 요소 노드) -element의 다음(next) 혹은 우측(right)에 있는 요소 하나

-모든 노드에 대한 이동 프로퍼티
만약 요소 노드가 아닌 다른 노드들을 이동하고 싶은 경우에는 아래와 같은 프로퍼티를 활용할 수도 있다.

프로퍼티
1. node.childNodes (자식 노드) -node의 자식 노드 모음(NodeList)
2. node.firstChild (자식 노드) -node의 첫 번째 자식 노드 하나
3. node.lastChild	(자식 노드) -node의 마지막 자식 노드 하나
4. node.parentNode (부모 노드) -node의 부모 요소 하나
5. node.previousSibling (형제 노드) -node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
6. node.nextSibling (형제 노드) -node의 다음(next) 혹은 우측(right)에 있는 노드 하나

*08. 요소 노드 프로퍼티
요소 노드 주요 프로퍼티
-innerHTML: 요소안에 있는 html 자체를 문자열로 리턴해준다.
-myTag.innerHTML += '<li>리스트 추가</li> : 덧셈 할당 연산자를 통해서 기존 html의 마지막 부분에 요소를 추가할 수도 있다.

-outerHTML: 해당 요소를 포함한 전체 HTML코드를 문자열로 리턴해준다.
outerHTML에 새로운 값을 할당하게 되면 처음 선택한 요소는 사라진다.

-textContent: 요소 안에 있는 내용들 중에서 html을 제외한 텍스트만 가져온다.
새로운 값을 할당할 수 있다. 요소 안의 내용이 완전히 수정된다.

*09. inner/outerHTML, textContent 비교

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

*11. 요소 노드 추가하기
1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);


*12. 노드 삭제와 이동하기
-노드 삭제하기: NODE.remove();
tomorrow.remove();
today.children[2].remove();

-노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);

*14. HTML 속성 다루기
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

*16. 스타일 다루기

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

*18. 비표준 속성 다루기
-비표준 속성 활용하기
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

그래서 비표준 속성을 사용하기 위해 미리 약속된 방식이 존재하는데요. 바로 data-* 속성입니다.

data-로 시작하는 속성은 모두 dataset이라는 프로퍼티에 저장되는데요. 예를 들어서 data-status라는 속성이 있다면, element.dataset.status라는 프로퍼티에 접근해서 그 값을 가져올 수 있는 것이죠.

data-*형태와 dataset프로퍼티를 사용하는 것이 조금 더 안전하다는 점도 꼭 잊지 말고 기억해두시면 좋을 것 같습니다.


*19. 종합 정리
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
 1. element.children - 자식 요소 노드	 - element의 자식 요소 모음(HTMLCollection)
 2. element.firstElementChild -	자식 요소 노드 -	element의 첫 번째 자식 요소 하나
 3. element.lastElementChild	- 자식 요소 노드	- element의 마지막 자식 요소 하나
 4. element.parentElement	- 부모 요소 노드 -	element의 부모 요소 하나
 5. element.previousElementSibling	- 형제 요소 노드 -	element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
 6. element.nextElementSibling	- 형제 요소 노드 -	element의 다음(next) 혹은 우측(right)에 있는 요소 하나
 7. node.childNodes	- 자식 노드	- node의 자식 노드 모음(NodeList)
 8. node.firstChild	- 자식 노드	- node의 첫 번째 자식 노드 하나
 9. node.lastChild -	자식 노드	- node의 마지막 자식 노드 하나
 10. node.parentNode	- 부모 노드	- node의 부모 요소 하나
 11. node.previousSibling	- 형제 노드	- node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
 12. node.nextSibling	- 형제 노드	- node의 다음(next) 혹은 우측(right)에 있는 노드 하나
 
5. 주요 요소 노드 프로퍼티
 1. element.innerHTML	- 요소 노드 내부의 HTML코드 문자열로 리턴	- 요소 안의 정보를 확인할 수도 있지만,
내부의 HTML 자체를 수정할 때 좀 더 자주 활용
 2. element.outerHTML - 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴 -	outerHTML은 새로운 값을 할당하면
요소 자체가 교체되어 버리기 때문에 주의
 3. element.textContent -	요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴	- textContent는 말그대로 텍스트만 다루기 때문에
HTML태그를 쓰더라도 모두 텍스트로 처리됨

6. 요소 노드 다루기
 1. 요소 노드 만들기: document.createElement('태그이름')
 2. 요소 노드 꾸미기: element.textContent, element.innerHTML, ...
 3. 요소 노드 추가 혹은 이동하기: element.prepend, element.append, element.after, element.before
 4. 요소 노드 삭제하기: element.remove()

7. HTML 속성 다루기
대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 된다.
하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안 된다. 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있다.
 1. 속성에 접근하기: element.getAttribute('속성')
 2. 속성 추가(수정)하기: element.setAttribute('속성', '값')
 3. 속성 제거하기: element.removeAttribute('속성')

8. 스타일 다루기
자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지가 있다.
 1. style 프로퍼티 활용하기: element.style.styleName = 'value';
 2. class 변경을 통해 간접적으로 스타일 적용하기: element.className, element.classList

8-1. classList의 유용한 메소드

1.classList.add	:클래스 추가하기 -	여러 개의 값을 전달하면 여러 클래스 추가 가능
2.classList.remove: 클래스 삭제하기 -	여러 개의 값을 전달하면 여러 클래스 삭제 가능
3.classList.toggle: 클래스 없으면 추가, 있으면 삭제하기	- 하나의 값만 적용 가능하고,
두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음


#4-3. 이벤트 살펴보기
*01. 이벤트 핸들러 등록하기
1. 이벤트 등록하기 elem.addEventListener(event, handler);
2. 이벤트 삭제하기 elem.removeEventListener(event, handler);

*02. 다양한 이벤트
-마우스 이벤트
mousedown	마우스 버튼을 누르는 순간
mouseup	마우스 버튼을 눌렀다 떼는 순간
click	왼쪽 버튼을 클릭한 순간
dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu	오른쪽 버튼을 클릭한 순간
mousemove	마우스를 움직이는 순간
mouseover	마우스 포인터가 요소 위로 올라온 순간
mouseout	마우스 포인터가 요소에서 벗어나는 순간
mouseenter	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
mouseleave	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

-키보드 이벤트
keydown	키보드의 버튼을 누르는 순간
keypress	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
keyup	키보드의 버튼을 눌렀다 떼는 순간

-포커스 이벤트
focusin	요소에 포커스가 되는 순간
focusout	요소로부터 포커스가 빠져나가는 순간
focus	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur	요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)

-입력 이벤트
change	입력된 값이 바뀌는 순간
input	값이 입력되는 순간
select	입력 양식의 하나가 선택되는 순간
submit	폼을 전송하는 순간

-스크롤 이벤트
scroll	스크롤 바가 움직일 때

-윈도우 창 이벤트
resize	윈도우 사이즈를 움직일 때 발생

*04. 이벤트 객체
이벤트 핸들러가 되는 함수의 첫번째 파라미터는 무조건 이벤트 객체가 전달된다. event 또는 e
이벤트 객체의 currentTarget프로퍼티는 이벤트가 발생했을 때, 이벤트 핸들러가 등록된 요소를 담고 있다.

*05. 이벤트 객체 프로퍼티
1. 공통 프로퍼티
아래의 프로퍼티들은 이벤트 타입과 상관없이 모든 이벤트 객체들이 공통적으로 가지고 있는 프로퍼티이다.
type	이벤트 이름 ('click', 'mouseup', 'keydown' 등)
target	이벤트가 발생한 요소
currentTarget	이벤트 핸들러가 등록된 요소
timeStamp	이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초)
bubbles	버블링 단계인지를 판단하는 값

2. 마우스 이벤트
마우스와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있다.
button	누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽)
clientX, clientY	마우스 커서의 브라우저 표시 영역에서의 위치
pageX, pageY	마우스 커서의 문서 영역에서의 위치
offsetX, offsetY	마우스 커서의 이벤트 발생한 요소에서의 위치
screenX, screenY	마우스 커서의 모니터 화면 영역에서의 위치
altKey	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey	이벤트가 발생할 때 shift키를 눌렀는지
metaKey	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

3. 키보드 이벤트
키보드와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있다.
key	누른 키가 가지고 있는 값
code	누른 키의 물리적인 위치
altKey	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey	이벤트가 발생할 때 shift키를 눌렀는지
metaKey	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

*07. 이벤트 버블링
버블링 멈추기 -> e.stopPropagation();

*08. 캡쳐링
이벤트엔 버블링 이외에도 ‘캡처링(capturing)’ 이라는 흐름이 존재한다. 

먼저, 표준 DOM 이벤트에서 정의한 이벤트 흐름에는 3가지 단계가 있다.

1.캡처링 단계: 이벤트가 하위 요소로 전파되는 단계
2.타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계
3.버블링 단계: 이벤트가 상위 요소로 전파되는 단계

이벤트가 발생하면 가장 먼저 window 객체에서부터 target 까지 이벤트 전파가 일어난다. (캡쳐링 단계)
그리고 나서 타깃에 도달하면 타깃에 등록된 이벤트 핸들러가 동작하고, (타깃 단계)
이후 다시 window 객체로 이벤트가 전파된다. (버블링 단계)

캡쳐링 단계에서 이벤트 핸들러를 동작시키려면, addEventListener에 세번째 프로퍼티에 true 또는 { capture:true }를 전달하면 된다.

*10. 이벤트 위임
자식 요소에서 발생하는 이벤트를 부모 요소에서 다루는 방식을 이벤트 위임이라고 한다.

*12. 브라우저의 기본 동작
브라우저의 기본 동작을 막는 메소드 -> event.preventDefault();
브라우저의 기본동작을 막고 원하는 대로 동작하게 할 수 있다.

*14. 종합 정리
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
*01. 마우스 버튼 이벤트
MouseEvent.button
0: 마우스 왼쪽 버튼
1: 마우스 휠
2: 마우스 오른쪽 버튼

MouseEvent.type
click	왼쪽 버튼을 클릭한 순간
contextmenu	오른쪽 버튼을 클릭한 순간
mousedown	마우스 버튼을 누르는 순간
mouseup	마우스 버튼을 눌렀다 떼는 순간
dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간

*03. 마우스 이동 이벤트 I
MouseEvent.type
mousemove:	마우스 포인터가 이동할 때
mouseover:	마우스 포인터가 요소 밖에서 안으로 이동할 때
mouseout:	마우스 포인터가 요소 안에서 밖으로 이동할 때

MouseEvent.clientX, clientY
: 화면에 표시되는 창 기준 마우스 포인터 위치

MouseEvent.pageX, pageY
: 웹 문서 전체 기준 마우스 포인터 위치

MouseEvent.offsetX, offsetY
: 이벤트가 발생한 요소 기준 마우스 포인터 위치

*04. client, page, offset 차이
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


*05. 마우스 이동 이벤트 II
MouseEvent.type
mousemove:	마우스 포인터가 이동할 때
mouseover:	마우스 포인터가 요소 밖에서 안으로 이동할 때
mouseout:	마우스 포인터가 요소 안에서 밖으로 이동할 때

MouseEvent.target
: 이벤트가 발생한 요소

MouseEvent.relatedTarget
: 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소

*06. mouseenter / mouseleave
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


*08. 키보드 이벤트
KeyboardEvent.type
keydown: 키보드 버튼을 누른 순간
keypress: 키보드 버튼을 누른 순간
keyup: 키보드 버튼을 눌렀다 뗀 순간

KeyboardEvent.key
: 이벤트가 발생한 버튼의 값

KeyboardEvent.code
: 이벤트가 발생한 버튼의 키보드에서 물리적인 위치

*10. input 태그 다루기

-포커스 이벤트
focusin: 요소에 포커스가 되었을 때
focusout: 요소에 포커스가 빠져나갈 때
focus: 요소에 포커스가 되었을 때 (버블링 x)
blur: 요소에 포커스가 빠져나갈 때 (버블링 x)

-입력 이벤트
input: 사용자가 입력을 할 때
change: 요소의 값이 변했을 때

*12. 스크롤 이벤트
window.addEventListener('scroll', function);

*13. 종합 정리
1. MouseEvent.button
마우스 이벤트 객체의 버튼 프로퍼티를 활용하면, 마우스 버튼을 눌렀을 때 일어난 이벤트에 대해서 어떤 버튼을 눌러서 일어난 이벤트인지를 정확하게 알아낼 수 있다.
0	마우스 왼쪽 버튼
1	마우스 휠
2	마우스 오른쪽 버튼
3	X1 (일반적으로 브라우저 뒤로 가기 버튼)
4	X2 (일반적으로 브라우저 앞으로 가기 버튼)

참고로 mouseenter, mouseleave, mouseover, mouseout, mousemove 처럼 마우스 이동과 관련된 이벤트에서는 이 값이 null이나 undefined가 아니라 0이라는 점.

2. MouseEvent.type
마우스 이벤트의 타입에는 아래와 같은 타입들이 있다.
mousedown	마우스 버튼을 누르는 순간
mouseup	마우스 버튼을 눌렀다 떼는 순간
click	왼쪽 버튼을 클릭한 순간
dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu	오른쪽 버튼을 클릭한 순간
mousemove	마우스를 움직이는 순간
mouseover	마우스 포인터가 요소 위로 올라온 순간
mouseout	마우스 포인터가 요소에서 벗어나는 순간
mouseenter	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
mouseleave	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

3. MouseEvent.위치프로퍼티
마우스 이벤트 객체에는 마우스 포인터의 위치와 관련된 다양한 프로퍼티들이 있는데, 주로 아래와 같은 프로퍼티들이 자주 사용된다.

clientX, clientY	마우스 포인터의 브라우저 표시 영역에서의 위치
pageX, pageY	마우스 커서의 문서 영역에서의 위치
offsetX, offsetY	마우스 포인터의 이벤트 발생한 요소에서의 위치
screenX, screenY	마우스 포인터의 모니터 화면 영역에서의 위치

4. MouseEvent.relatedTarget
mouseenter, mouseleave, mouseover, mouseout 이벤트에는 relatedTarget이라는 프로퍼티가 존재하는데,
target 프로퍼티가 이벤트가 발생한 요소를 담고 있다면, relatedTarget 프로퍼티는 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소를 담고 있다.

5. KeyboardEvent.type
키보드 이벤트의 타입에는 아래와 같은 타입들이 있다.
keydown	키보드의 버튼을 누르는 순간
keypress	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
keyup	키보드의 버튼을 눌렀다 떼는 순간

6. KeyboardEvent.key vs KeyboardEvent.code
키보드 이벤트 객체에는 key와 code 프로퍼티가 자주 사용되는데,
key는 사용자가 누른 키가 가지고 있는 값을 나타내고 code는 누른 키의 물리적인 위치를 나타낸다는 점!

7. input태그 다루기
input 태그는 말 그대로 입력의 역할을 하는 태그이다. 타입에 따라 조금씩 차이가 있을 수 있지만, input 태그를 다룰 때는 아래와 같은 이벤트 타입들이 활용될 수 있다.
focusin	요소에 포커스가 되는 순간
focusout	요소에 포커스가 빠져나가는 순간
focus	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur	요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)
change	입력된 값이 바뀌는 순간
input	값이 입력되는 순간
select	입력 양식의 하나가 선택되는 순간
submit	폼을 전송하는 순간

8. 스크롤 이벤트
scroll 이벤트는 보통 window 객체에 이벤트 핸들러를 등록하고 window 객체의 프로퍼티와 함께 자주 활용되는데.
특히 scrollY 프로퍼티를 활용하면 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향(위로 스크롤 중인지/아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수도 있다.

