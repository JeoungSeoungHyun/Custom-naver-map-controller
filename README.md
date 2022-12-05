# 목적 
- 네이버 맵을 활용 사람모양 마커를 놓는 위치에 거리뷰를 보여주기 위한 커스텀 이벤트 개발

### dependecy
- spring web
- devtools
- lombok
- mustache
- mariadb

### mustache 한글깨짐 이슈
- 스프링부트 2.7.x 버전에서는 mustache가 한글이 깨질 수 있다고 한다.
- 해결방법 
    1. 스프링부트 버전을 내린다.
    2. yml에 다음과 같이 설정해준다.
    
```
server.servlet.encoding.force-response: true
```