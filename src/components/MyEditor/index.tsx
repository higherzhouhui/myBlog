import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

// 动态导入编辑器组件，禁用SSR
const Editor = dynamic(
  () => import('@wangeditor/editor-for-react').then(mod => mod.Editor),
  { ssr: false }
)

const Toolbar = dynamic(
  () => import('@wangeditor/editor-for-react').then(mod => mod.Toolbar),
  { ssr: false }
)

export interface MyEditerInterface {
    content: string,
    onChangeContent: (c: string) => void,
    update: boolean,
}

function MyEditor(props: MyEditerInterface) {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
    // const [editor, setEditor] = useState(null)                   // JS 语法
    const [mounted, setMounted] = useState(false)

    // 编辑器内容
    const [html, setHtml] = useState(props.content)
    const seleOnchange = (eeditor: IDomEditor) => {
        setHtml(eeditor.getHtml())
        props.onChangeContent(eeditor.getHtml())
    }

    // 确保只在客户端挂载后渲染编辑器
    useEffect(() => {
        setMounted(true)
    }, [])

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        if (mounted) {
            setTimeout(() => {
                setHtml(props.content)
            }, 500)
        }
    }, [props.update, mounted])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法
    // const toolbarConfig = { }                        // JS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        // const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    // 如果还没有挂载，显示加载状态
    if (!mounted) {
        return (
            <div style={{ 
                border: '1px solid #ccc', 
                height: '700px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px',
                color: '#666'
            }}>
                编辑器加载中...
            </div>
        )
    }

    return (
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                style={{ borderBottom: '1px solid #ccc' }}
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => seleOnchange(editor)}
                mode="default"
                style={{ overflowY: 'hidden', height: '700px' }}
            />
        </div>
    )
}

export default MyEditor