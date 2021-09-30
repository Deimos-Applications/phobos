@preprocessor typescript

@{%
import { lexer } from '../tokenizer'
%}

@lexer lexer

statement
  -> var_assign

var_assign
  -> %identifier _ "=" _ expression
    {%
      (data) => ({
        type: 'var_assign', // We might need to move this to a enum
        var_name: data[0],
        value: data[4],
      })
    %}

expression
  -> %string {% id %}
  | %number {% id %}

# Optional whitespace
_ -> %WS:* # match 0 or more whitespaces

## Mandatory whitespace
__ -> %WS:+ # match 1 or more whitespaces
