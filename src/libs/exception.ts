export function TokenException(token: string) {
  if (token?.length === 0) {
    alert("토큰이 만료되었거나 입력하지 않았습니다. 다시 입력하여주세요.");
    return true;
  }
}
