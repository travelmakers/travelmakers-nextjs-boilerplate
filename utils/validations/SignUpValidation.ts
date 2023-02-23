type SignUpValidationProps = {
  email?: string;
  id?: string;
  password?: string;
};

export default function SignUpValidation<returnType>({
  email,
  id,
  password,
}: SignUpValidationProps): returnType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};

  /*
  else if (Some regex validation) {
    errors.name = 'Some error text';
  } 
  */

  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!id) {
    errors.id = '아이디가 입력되지 않았습니다.';
  }
  /*
  else if (Some regex validation) {
    errors.id = 'Some error text';
  } 
  */

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 8) {
    errors.password = '8자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
}
