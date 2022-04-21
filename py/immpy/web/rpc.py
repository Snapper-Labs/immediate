from typing import Protocol, Optional, Any, Union, List
from dataclasses import dataclass

@dataclass
class RequestMessage:
    id: Optional[int]
    method: str
    params: Any

@dataclass
class ResponseMessage:
    id: int
    result: Any
    error: Optional[ErrorObject]

@dataclass
class ErrorObject:
    code: int
    message: str
    data: Any

ProtocolMessage = Union[RequestMessage, ResponseMessage]
WireMessage = Union[ProtocolMessage, List[ProtocolMessage]]

class Transport(Protocol):
    async def receive(self) -> WireMessage:
        ...

    async def send(self, msg: WireMessage):
        ...


