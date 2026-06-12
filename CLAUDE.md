# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + TypeScript + Vite で構築したタスクボードアプリケーション。

## デプロイ先

**https://centuryosaka.github.io/task-board/**

`main` ブランチへのプッシュで GitHub Actions が自動ビルド・デプロイする。

## 技術スタック

| 種別 | 採用技術 |
|------|----------|
| UI ライブラリ | React 18 |
| 言語 | TypeScript 5 |
| ビルドツール | Vite 5 |
| スタイリング | Plain CSS（CSS Modules 不使用） |
| 状態管理 | React `useState` のみ |
| 永続化 | `localStorage` |
| CI/CD | GitHub Actions |

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

タスクは `{ id: number, text: string, completed: boolean }` 型で管理し、`localStorage` に JSON で保存する（キー: `task-board-tasks`）。

## 命名規約

**コンポーネント**
- ファイル名・関数名ともに PascalCase（例: `App.tsx`、`export default function App`）
- コンポーネントを追加する場合は `src/` 直下に `ComponentName.tsx` + `ComponentName.css` のペアで作成する

**CSS クラス**
- kebab-case（例: `.task-item`、`.add-btn`、`.delete-btn`）
- 状態は修飾クラスで表現する（例: `.task-item.completed`）

**型・変数**
- 型名は PascalCase（例: `Task`）
- 変数・関数名は camelCase（例: `addTask`、`toggleTask`）
- `localStorage` のキーは定数として `STORAGE_KEY` に集約する

## Git 運用ルール

コードを変更するたびに、必ず GitHub にプッシュすること。

```powershell
git add <変更したファイル>
git commit -m "変更内容を簡潔に記述"
git push origin main
```
