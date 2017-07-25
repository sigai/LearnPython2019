#多进程
解决GIL的问题
multiprocessing.Process(target=None, args=None)
os.getpid()
os.getppid()
跟视频里的输出不一样的原因是这个:
Alias for main module -- will be reset by bootstrapping child processes

```
if '__main__' in sys.modules:
    sys.modules['__mp_main__'] = sys.modules['__main__']
```

