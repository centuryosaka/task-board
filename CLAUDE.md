# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

タスクボードアプリケーション。

## Git 運用ルール

コードを変更するたびに、必ず GitHub にプッシュすること。

```powershell
git add <変更したファイル>
git commit -m "変更内容を簡潔に記述"
git push origin <ブランチ名>
```

- `git add .` は使わず、変更ファイルを明示的に指定する
- コミットメッセージは日本語で変更内容がわかるように書く
- プッシュ前に `git status` で変更内容を確認する
