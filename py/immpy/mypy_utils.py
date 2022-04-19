from typing import Optional, TypeVar

T = TypeVar('T')

def unwrap(x: Optional[T]) -> T:
    if x is None:
        raise Exception

    return x
