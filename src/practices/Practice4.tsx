export const Practice4 = () => {
  const calTortalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calTortalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題 4 を実行</button>
    </div>
  );
};
