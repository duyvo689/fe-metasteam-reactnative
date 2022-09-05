#!/bin/sh

set -e

get_env() {
  export -p | awk '{print $2}' | while read line; do
    if [[ "${line}" == "EXPO"* ]]; then
      printf "${line%%'='*}:${line#*'='},\n"
    fi
    # printf "${line%%'='*}:${line#*'='},\n"
  done
}

printf "window.env={\n$(get_env)\n};\n" > $1/env.js

# cat $1/env.js