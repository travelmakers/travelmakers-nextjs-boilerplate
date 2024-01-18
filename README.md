# Next.js 보일러 플레이트

- &copy;travelmakers
- Author: [Gidong Seong](https://github.com/sgd122)


## Development

```bash
# Node Version
# v18.17.1

# Application install
yarn

# Application run
yarn dev
```

## 개발관련

```markdown
- 상태관리: zustand
- server api: react-query
- css: scss
```

## Directory

```markdown
📦api
┣ 📂fetch
┃ ┗ 📜index.ts  <!-- fetch & mutate function -->
┣ 📂hooks
┃ ┗ 📜index.ts  <!-- useFetchInfinite & useFetch -->
┣ 📂mutates
┃ ┗ 📜index.ts  <!-- useMutation -->
┣ 📂urls
┃ ┗ 📜index.ts  <!-- urls list -->
┣ 📜fetchFunctions.ts
┣ 📜fetchHooks.ts
┣ 📜mutateHooks.ts
┗ 📜types.ts
📦app           <!-- page list -->
📦components    <!-- component list -->
📦cypress       <!-- cypress data -->
📦lib           <!-- library -->
📦locales       <!-- i18n translate -->
📦pages         <!-- frontend server api -->
📦public        <!-- public -->
📦states        <!-- recoil -->
📦styles        <!-- style css -->
📦types         <!-- type definition -->
📦ui            <!-- User Interface Component -->
📦utils         <!-- utils function -->
```


## Lighthouse

```bash
npx lhci autorun
```

위 command 설정 후 **.sentryclirc** 파일에 있는 auth를 **SECRETS.SENTRY_TOKEN** 설정 하여 사용

## Commit Message를 작성하는 법

유형들이 복합적으로 포함되어 있을 경우, 되도록 커밋을 분리한다. 분리가 어려운 경우 위 순서상 상위 항목의 유형으로 작성한다. (eg. 기능과 테스트가 모두 포함된 경우 기능으로 작성)

- **feat**: 기능 추가, 삭제, 변경(or ✨ emoji) - 제품 코드 수정 발생
- **fix**: 버그 수정(or 🚑 emoji) - 제품 코드 수정 발생
- **docs**: 문서 추가, 삭제, 변경(or 📚 emoji) - 코드 수정 없음
- **style**: 코드 형식, 정렬, 주석 등의 변경, eg; 세미콜론 추가(or 🎨 emoji) - 제품 코드 수정 발생, 하지만 동작에 영향을 주는 변경은 없음
- **refactor**: 코드 리펙토링, eg. renaming a variable(or 🚜 emoji) - 제품코드 수정 발생
- **test**: 테스트 코드 추가, 삭제, 변경 등(or 🔬 emoji) - 제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당
- **etc**: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경 - 코드 수정 없음

## Reference

- <https://beta.nextjs.org/docs>
- <https://next-auth.js.org/configuration/nextjs#unstable_getserversession>

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
