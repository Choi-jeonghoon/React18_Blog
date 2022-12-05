# Programming rule

## 확장자

- component

  - .jsx

- JavaScript
  - .js

## Event handler

    - props로 전달되는 경우
        - on~~Event

    - Component 내에서 관리되는 event의 경우
        - handle~~

## Directory

    - pages
        - 실제 눈에 보이는 page

    - components
        - page component에 할당되는 component

    - hooks
        - custom hook

    - utils
        - 각종 util

    - apis
        - api 로직 관리

## React guide

    - 모든 state는 최상위에서 관리
    - 비즈니스 로직은 hooks로 분류
    - 함수형 프로그래밍으로 작성

## git flow

    - 개인 브랜치에서 commit, push
        - git checkout -b feat/jh
        - git add & commit
        - main branch에 Pull request 보내기
        - merge 후 개인 로컬 브랜치 및 원격 브랜치 삭제
        - git branch -D feat/jh ( 로컬 브랜치 삭제 )
        - git push origin -d feat/jh ( 리모트 브랜치 삭제 )
