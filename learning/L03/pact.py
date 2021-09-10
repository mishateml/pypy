import string
from pprint import pprint
from random import choice
from operator import itemgetter
mes = list()

# For Loop

for index in range(100):
    




me = {
    "name": "misha",
    "age": "36",
    "gender": "m3333333333333333333",
    "gender2": "m4444444444444",
    "gender3": "m44444444444",
}

# simple print

# print("\n-----=====simple print ====-----")
# print("me", me)
# print("name is", me["name"])
#
# print("\n-----=====pprint print ====-----")
# pprint(me)
#
# print("\n-----=====H readable print ====-----")
# for k, v in me.items():
#     print(f"{k:>16} : {v}")

devices = list() # Empty list

for index in range(100):

    device = dict()

    device["name"] = (
        choice(["r2", "r3","r4","r6","r10"])
        + choice(["L","U"])
        + choice(string.ascii_letters)
    )

