class UpperAttrMetaclass(type):

    def __new__(upperattr_metaclass, future_class_name, future_class_parents, future_class_attr):
        
        uppercase_attr = {}
        for name, val in future_class_attr.items():
            if not name.startswith('__'):
                uppercase_attr[name.upper()] = val
            else:
                uppercase_attr[name] = val
        # 直接用`type.__new__方法
        # 这是标准的面向对象编程, 没有任何特殊方法
        return type.__new__(upperattr_metaclass, future_class_name, future_class_parents, uppercase_attr)


