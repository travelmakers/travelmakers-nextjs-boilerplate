# Next.js 템플릿

- &copy;travelmakers
- Author: [Gidong Seong](https://github.com/sgd122)

## Development

```bash
# Node Version
# v16.15.1

# Application install
yarn

# Application run
yarn dev
```

## Commit Message를 작성하는 법

유형들이 복합적으로 포함되어 있을 경우, 되도록 커밋을 분리한다. 분리가 어려운 경우 위 순서상 상위 항목의 유형으로 작성한다. (eg. 기능과 테스트가 모두 포함된 경우 기능으로 작성)

- **feat**: 기능 추가, 삭제, 변경(or ✨ emoji) - 제품 코드 수정 발생
- **fix**: 버그 수정(or 🚑 emoji) - 제품 코드 수정 발생
- **docs**: 문서 추가, 삭제, 변경(or 📚 emoji) - 코드 수정 없음
- **style**: 코드 형식, 정렬, 주석 등의 변경, eg; 세미콜론 추가(or 🎨 emoji) - 제품 코드 수정 발생, 하지만 동작에 영향을 주는 변경은 없음
- **refactor**: 코드 리펙토링, eg. renaming a variable(or 🚜 emoji) - 제품코드 수정 발생
- **test**: 테스트 코드 추가, 삭제, 변경 등(or 🔬 emoji) - 제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당
- **etc**: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경 - 코드 수정 없음

## 커밋 메시지 작성시 사용할만한 Emoji

| Emoji | Raw Emoji Code     | Description                                                                                                        |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 🎨    | `:art:`            | 코드의 **형식** / 구조를 개선 할 때                                                                                |
| 📰    | `:newspaper:`      | **새 파일을** 만들 때                                                                                              |
| 📝    | `:pencil:`         | **사소한 코드 또는 언어**를 변경할 때                                                                              |
| 🐎    | `:racehorse:`      | **성능을** 향상시킬 때                                                                                             |
| 📚    | `:books:`          | **문서를** 쓸 때                                                                                                   |
| 🐛    | `:bug:`            | **버그** reporting할 때, [`@FIXME`](https://github.com/slashsbin/styleguide-todo-grammar#bug-report)주석 태그 삽입 |
| 🚑    | `:ambulance:`      | **버그를** 고칠 때                                                                                                 |
| 🐧    | `:penguin:`        | **리눅스에서** 무언가를 고칠 때                                                                                    |
| 🍎    | `:apple:`          | **Mac OS에서** 무언가를 고칠 때                                                                                    |
| 🏁    | `:checkered_flag:` | **Windows에서** 무언가를 고칠 때                                                                                   |
| 🔥    | `:fire:`           | **코드 또는 파일 제거**할 때 , `@CHANGED`주석 태그와 함께                                                          |
| 🚜    | `:tractor:`        | **파일 구조를 변경할** 때 . 🎨과 함께 사용                                                                         |
| 🔨    | `:hammer:`         | 코드를 **리팩토링** 할 때                                                                                          |
| ☔️   | `:umbrella:`       | **테스트를** 추가 할 때                                                                                            |
| 🔬    | `:microscope:`     | **코드 범위를** 추가 할 때                                                                                         |
| 💚    | `:green_heart:`    | **CI** 빌드를 고칠 때                                                                                              |
| 🔒    | `:lock:`           | **보안을** 다룰 때                                                                                                 |
| ⬆️    | `:arrow_up:`       | **종속성을** 업그레이드 할 때                                                                                      |
| ⬇️    | `:arrow_down:`     | **종속성을** 다운 그레이드 할 때                                                                                   |
| ⏩    | `:fast_forward:`   | 이전 버전 / 지점에서 **기능**을 **전달할** 때                                                                      |
| ⏪    | `:rewind:`         | 최신 버전 / 지점에서 **기능**을 **백 포트** 할 때                                                                  |
| 👕    | `:shirt:`          | **linter** / strict / deprecation 경고를 제거 할 때                                                                |
| 💄    | `:lipstick:`       | **UI** / style 개선시                                                                                              |
| ♿️   | `:wheelchair:`     | **접근성을** 향상시킬 때                                                                                           |
| 🚧    | `:construction:`   | **WIP** (진행중인 작업)에 커밋, `@REVIEW`주석 태그와 함께 사용                                                     |
| 💎    | `:gem:`            | New **Release**                                                                                                    |
| 🔖    | `:bookmark:`       | 버전 **태그**                                                                                                      |
| 🎉    | `:tada:`           | **Initial** Commit                                                                                                 |
| 🔈    | `:speaker:`        | **로깅을** 추가 할 때                                                                                              |
| 🔇    | `:mute:`           | **로깅을** 줄일 때                                                                                                 |
| ✨    | `:sparkles:`       | **새로운** 기능을 소개 할 때                                                                                       |
| ⚡️   | `:zap:`            | 도입 할 때 **이전 버전과 호환되지 않는** 특징, `@CHANGED`주석 태그 사용                                            |
| 💡    | `:bulb:`           | 새로운 **아이디어**, `@IDEA`주석 태그                                                                              |
| 🚀    | `:rocket:`         | 배포 / **개발 작업** 과 관련된 모든 것                                                                             |
| 🐘    | `:elephant:`       | **PostgreSQL** 데이터베이스 별 (마이그레이션, 스크립트, 확장 등)                                                   |
| 🐬    | `:dolphin:`        | **MySQL** 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)                                                      |
| 🍃    | `:leaves:`         | **MongoDB** 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)                                                    |
| 🏦    | `:bank:`           | **일반 데이터베이스** 별 (마이그레이션, 스크립트, 확장명 등)                                                       |
| 🐳    | `:whale:`          | **도커** 구성                                                                                                      |
| 🤝    | `:handshake:`      | **파일을 병합** 할 때                                                                                              |

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
