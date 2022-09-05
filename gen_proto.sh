#!/bin/bash
set -e

cd proto && git pull && cd -
./proto/gen_proto.sh