import argparse
parser = argparse.ArgumentParser(usage="Just fuck it",
                                description="Fuck flash stupid",
                                epilog="shoot it")
parser.add_argument("square", metavar="N",help="display a square of a given number", type=int, default=1)
parser.add_argument("--verbose", help="more infomation...", nargs="?")
parser.add_argument("-r", "--run", help="Run Barry Allen!", type=int, choices=[0, 1, 2],default=2)
args = parser.parse_args()
print(args.verbose)
print(args.run)
print(args.square)
answer = args.square ** 2
if args.run == 2:
    print("The square of {} equals {}".format(args.square, answer))
elif args.run == 1:
    print("{}^2 == {}".format(args.square, answer))
else:
    print(answer)
