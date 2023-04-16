module.exports = (req, res) => {
  /*
   * TODO: 로그아웃 로직을 구현하세요.
   *
   * cookie-parser의 clearCookie('쿠키의 키', cookieOption) 메서드로 해당 키를 가진 쿠키를 삭제할 수 있습니다.
   * 만약 res.clearCookie('user', cookieOption) 코드가 실행된다면 `user=....` 쿠키가 삭제됩니다.
   * 로그아웃 성공에 대한 상태 코드는 205가 되어야합니다.
   */
  const cookiesOption = {
    domain: "localhost",
    path: "/",
    // 유효기간은 로그인 체크 여부에 따라 달라질테니 일단 패스합니다.
    // secure도 일단 패스하고, sameSite 옵션을 작성할 때 다시 확인합시다.
    httpOnly: true,

    // sameSite 옵션의 설정 값을 확인하면서 어떤 옵션을 설정하면 좋을지 살펴봅시다.
    // Lax : Get 요청만 쿠키 전송. 그런데 클라이언트에서 아이디랑 비밀번호를 POST로 보내주고 있으므로 지금 사용하기엔 부적합해요.
    // Strict : same-site만 가능. 그런데 클라이언트는 http 프로토콜 + 3000번 포트, 서버는 https 프로토콜 + 4000번 포트로 same-site가 아닙니다. 따라서 이 옵션도 부적합합니다.
    // 따라서 'none'이 가장 적합한 옵션값입니다. 그런데 이 옵션을 사용할 경우에는  secure 옵션이 필요하다고 해요. secure 옵션도 같이 작성해줍시다.
    sameSite: "none",
    secure: true,
  };
  res.clearCookie("cookieId", cookiesOption).status(205).send("logout");
};
