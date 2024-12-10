{
  "editor.fontFamily": "Fira Code, Consolas, monospace",
    "editor.fontSize": 16.5,
      "editor.lineHeight": 24,
        "editor.defaultFormatter": "vscode.typescript-language-features",
          "editor.formatOnSave": true,
            "terminal.integrated.fontFamily": "Fira Code, Consolas, monospace",
              "terminal.integrated.fontSize": 18,
                "terminal.integrated.fontWeight": 550,
                  "terminal.integrated.fontWeightBold": 600,
                    "window.zoomLevel": 1,
                      "editor.wordWrap": "on",
                        "editor.wordWrapColumn": 95,
                          "editor.inlineSuggest.enabled": true,
                            "workbench.colorCustomizations": {
    "editor.background": "#000000",
      "editor.foreground": "#000000",
        "activityBar.background": "#000000",
          "sideBar.background": "#000000",
            "statusBar.background": "#000000",
              "titleBar.activeBackground": "#000000",
                "titleBar.inactiveBackground": "#000000",
                  "titleBar.activeForeground": "#000000",
                    "titleBar.inactiveForeground": "#000000"
  },
  "editor.tokenColorCustomizations": {
    "comments": "#9C9C9C",
      "strings": "#A3D977",
        "keywords": "#FFA500",
          "numbers": "#FFD700",
            "functions": "#FF6347",
              "variables": "#40E0D0",
                "textMateRules": [
                  {
                    "scope": "support.type.property-name",
                    "settings": {
                      "foreground": "#C792EA"
                    }
                  },
                  {
                    "scope": "entity.name.class",
                    "settings": {
                      "foreground": "#E06C75",
                      "fontStyle": "bold"
                    }
                  },
                  {
                    "scope": "keyword.control",
                    "settings": {
                      "foreground": "#FFA500"
                    }
                  },
                  {
                    "scope": "string.quoted.double",
                    "settings": {
                      "foreground": "#A3D977"
                    }
                  },
                  {
                    "scope": "constant.numeric",
                    "settings": {
                      "foreground": "#FFD700"
                    }
                  },
                  {
                    "scope": "variable.parameter",
                    "settings": {
                      "foreground": "#40E0D0"
                    }
                  },
                  {
                    "scope": "storage",
                    "settings": {
                      "foreground": "#FF6347"
                    }
                  },
                  {
                    "scope": [
                      "entity.name.tag",
                      "entity.name.tag.js",
                      "entity.name.tag.ts",
                      "entity.name.tag.jsx",
                      "entity.name.tag.tsx"
                    ],
                    "settings": {
                      "foreground": "#FF4500",
                      "fontStyle": "bold"
                    }
                  }
                ]
  },
  "workbench.iconTheme": "material-icon-theme",
    "sonarlint.disableTelemetry": true,
      "sonarlint.rules": {
    "javascript:S1126": {
      "level": "off"
    },
    "javascript:S125": {
      "level": "off"
    },
    "javascript:S1135": {
      "level": "off"
    }
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[css]": {
    "editor.defaultFormatter": "aeschli.vscode-css-formatter"
  },
  "[scss]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
      "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
      "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[json]": {
    "editor.tabSize": 2,
      "editor.insertSpaces": true,
        "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[c]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "[cpp]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "C_Cpp.clang_format_style": "file",
    "C_Cpp.clang_format_fallbackStyle": "LLVM",
      "terminal.integrated.defaultProfile.windows": "Git Bash",
        "git.autofetch": true,
          "editor.minimap.enabled": false,
            "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}
