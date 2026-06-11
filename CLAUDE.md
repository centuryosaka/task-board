# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + TypeScript + Vite で構築したタスクボードアプリケーション。

## 開発コマンド

```powershell
npm install       # 依存パッケージインストール
npm run dev       # 開発サーバー起動（http://localhost:5173）
npm run build     # プロダクションビルド
npm run preview   # ビルド結果のプレビュー
```

## アーキテクチャ

単一コンポーネント構成。状態管理は React の `useState` のみ使用。

- [src/App.tsx](src/App.tsx) — タスクの追加・完了切り替え・削除ロジックと UI をすべて管理
- [src/App.css](src/App.css) — スタイル定義（完了タスクのグレーアウトは `.task-item.completed` クラスで制御）

タスクは `{ id: number, text: string, completed: boolean }` 型で管理し、ページリロードで初期化される（永続化なし）。

## Git 運用ルール

コードを変更するたびに、必ず GitHub にプッシュすること。

```powershell
git add <変更したファイル>
git commit -m "変更内容を簡潔に記述"
git push origin main
```
