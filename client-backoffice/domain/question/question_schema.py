import datetime
# 데이터 도식화
from pydantic import BaseModel, validator

from domain.answer.answer_schema import Answer
from domain.user.user_schema import User


class Question(BaseModel):
    id: int
    subject: str
    content: str
    create_date: datetime.datetime
    answers: list[Answer] = []   # 이걸로 답변 개수 뽑을거야
    user: User | None
    modify_date: datetime.datetime | None = None
    voter: list[User] = []
    question_to_mentor:int | None = None
    evaluation: int | None = None  #상중하 321, 안하면 None값
    

    class Config:
        orm_mode = True


class QuestionCreate(BaseModel):
    subject: str
    content: str
    question_to_mentor: int | None = None

    @validator('subject', 'content')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v

class QuestionList(BaseModel):
    total: int = 0
    question_list: list[Question] = []
    
class QuestionUpdate(QuestionCreate):
    question_id: int
class QuestionDelete(BaseModel):
    question_id: int

class QuestionVote(BaseModel):
    question_id: int
    
class QuestionEvaluation(BaseModel):
    question_id: int
    evaluation: int  