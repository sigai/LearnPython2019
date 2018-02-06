#coding:u8

def curriedLog(level):
    def logMsg(message):
        def logStack(stack):
            print(level+":"+message)
            print(stack)
        return logStack
    return logMsg

