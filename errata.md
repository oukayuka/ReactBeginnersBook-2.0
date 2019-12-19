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

p.152（p.152）

```diff
-もうほとんど Recux の開発に関わってないんだよね。
+もうほとんど Redux の開発に関わってないんだよね。
```
