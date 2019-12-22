# 『りあクト！ TypeScript で始めるつらくない React 開発 第 2 版』の正誤表

## 注意

内容は随時アップデートされます。なおページの指定は「修正前（修正後）」のフォーマットで記述されています。

p.19（p.19）

```diff
 ・ESLint（dbaeumer.vscode-eslint）…… JavaScriptの静的コード解析ツールESLintをVSCodeに統合する。
-・stylelint …… CSS用のリンターstylelintをVSCodeに統合する。
+・stylelint-plus（hex-ci.stylelint-plus）…… CSS用のリンターstylelintをVSCodeに統合する。
 ・Visual Studio IntelliCode（VisualStudioExptTeam.vscodeintellicode）…… AI支援によりAPIサジェスト一覧の精度を向上させる。
```

p.32（p.32）

```diff
 const arr1 = ['A', 'B', 'C'];
 const arr2 = [...arr1, 'D', 'E'];
-console.log(arr2);    // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
+console.log(arr2);    // [ 'A', 'B', 'C', 'D', 'E']
```

p.32（p.32）

```diff
 console.log(arr.includes(5));               // true
 console.log(arr.reduce((n, m) => n + m));    // 36
-console.log(arr.sort((n, m) => n < m));     // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
+console.log(arr.sort((n, m) => n > m ? -1 : 1));     // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
```

```diff
 ・includes() は指定した要素が含まれるかを真偽値で返す
 ・reduce() は配列の要素を、与えた式で畳み込んだ値を返す
-・sort() は各要素を、与えられた条件によって並べ替えた新しい配列を返す
+・sort() は各要素を、与えられた比較関数（戻り値が -1: 前に移動、0: 移動しない、1: 後ろに移動）によって並べ替えた新しい配列を返す
```

p.72（p.72）

```diff
- yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
-
-「あれ？　ESLint 本体はインストールしなくていいんですか？」
-「Create React App で生成されたプロジェクトはには便利なスクリプト群がまとまったパッケージのreact-scripts というものが最初から入ってるんだけど、その中にすでに ESLint が含まれてるんだよ。react-scripts の ESLint と二重インストールになる上、バージョン不整合の問題もあるので、別途 ESLint をインストールするのはやめたほうがいい」
+ yarn add -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
+
+「Create React App で作成されたプロジェクトには ESLint パッケージが含まれていてそれを使うことができるんだけど、ここでは各種プラグインを併せて導入するので、バージョン整合のためにも最新の ESLint を明示的にインストールしておくよ」
```

p.73（p.73）
```diff
-"eslint.autoFixOnSave": true,
-"eslint.enable": true,
-"eslint.validate": [
-  "javascript", "javascriptreact", "typescript", "typescriptreact"
-],
+"editor.codeActionsOnSave": {
+  "source.fixAll.eslint": true
+},
```

```diff
-プロジェクトルートに .vscode/ というディレクトリを作って、そこに settings を置けば、
+プロジェクトルートに .vscode/ というディレクトリを作って、そこに settings.json を置けば、
```

p.88（p.86）
```diff
-二つめは『Local State』となってまけど、
+二つめは『Local State』となってますけど、
```

p.102（p.103）
```diff
-まず関数コンポーネントで見た目だけを整えたPresentational Componentを作ます。
+まず関数コンポーネントで見た目だけを整えたPresentational Componentを作ります。
```

p.115-116（p.115）

```diff
-「あー、それね。timerLeft の値の判定を、useEffect() の第一引数の関数は初回レンダリングでしか呼ばれないのでそこには置けないし、関数 tic() は setInterval() で非同期に実行されるためにその中では古い値しか参照できなくてそこにも置けなかったので、setTimerLeft() の引数に渡す関数の中に入れちゃったんだよね」
+「あー、それね。もうひとつ useEffect() を置いてこう書くこともできたんだよね」
+
+  useEffect(() => {
+    if (timeLeft === 0) setTimeLeft(LIMIT);
+  });
+
+「でも不格好だし、tick() の中で判定してリセットするようにしちゃった。こっちのほうがスマートでしょ」
```

p.152（p.152）

```diff
-もうほとんど Recux の開発に関わってないんだよね。
+もうほとんど Redux の開発に関わってないんだよね。
```
