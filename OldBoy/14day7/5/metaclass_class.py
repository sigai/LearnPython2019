
# 要知道`type`就像`str`和`int`一样也是类, 所以可以继承它.
class UpperAttrMetaclass(type):
    # __new__方法在__init__方法之前被调用
    # 是它创建了对象并返回
    # 相对的__init__只是初始化对象并将其作为参数传递
    # __new__方法很少使用, 除非你想控制对象的创建方式
    # 现在我们要创建的对象是类, 还要自定义这个类, 所以要重写__new__方法
    # __init__方法也可以重写
    # __call__方法也可以重写, 不过现在我们不需要这么做.
    def __new__(future_class_name, future_class_parents, future_class_attr):
        
        uppercase_attr = {}
        for name, val in future_class_attr.items():
            if not name.startswith('__'):
                uppercase_attr[name.upper()] = val
            else:
                uppercase_attr[name] = val
        return type(future_class_name, future_class_parents, uppercase_attr)
        