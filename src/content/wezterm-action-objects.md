---
title: "WezTerm Action Objects"
publicationDate: "2025-10-07"
updatedDate: "2025-10-07"
---

In [WezTerm](https://wezterm.org/index.html), actions are special objects used to interact with the terminal environment; they're objects that represent operations that're executed in response to a trigger.

Actions are used to create mouse & key bindings, custom menu commands, and event handlers.

There're two ways to access actions: [`wezterm.action`](https://wezterm.org/config/lua/wezterm/action.html) and [`wezterm.action_callback`](https://wezterm.org/config/lua/wezterm/action_callback.html).

`wezterm.action` provides a table of predefined action objects.

e.g., to bind `Alt + P` to activate the command palette (using `wezterm.action`):

```lua
local wezterm = require("wezterm")
local config = wezterm.config_builder()

config.keys = {
    { key = "p", mods = "ALT", action = wezterm.action.ActivateCommandPalette }
}

return config
```

`wezterm.action_callback` allows the user to create a custom action object from a function.

e.g., to bind `Alt + P` to a custom `log_session_ids` function:

```lua
local wezterm = require("wezterm")
local config = wezterm.config_builder()

local function log_session_ids(window, pane)
    wezterm.log_info('WindowID:', window:window_id(), 'PaneID:', pane:pane_id())
end

config.keys = {
    { key = "p", mods = "ALT", action = wezterm.action_callback(log_session_ids) }
}

return config
```

Keep in mind action objects must be executed through a window object.
Whilst WezTerm is able to automatically infer the necessary context within `config.keys`, usually the [`perform_action`](https://wezterm.org/config/lua/window/perform_action.html) method is required to trigger an action object.

e.g., to bind `Alt + P` to activate the command palette (using `wezterm.action_callback`):

```lua
local wezterm = require("wezterm")
local config = wezterm.config_builder()

local function ActivateCommandPalette(window, pane)
    window:perform_action(wezterm.action.ActivateCommandPalette, pane)
end

config.keys = {
    { key = "p", mods = "ALT", action = wezterm.action_callback(ActivateCommandPalette) }
}

return config
```
