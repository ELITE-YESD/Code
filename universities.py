from flask import Flask, request, jsonify, render_template, send_from_directory
import pandas as pd
import os

app = Flask(__name__)

# 정적 파일 경로를 명시적으로 설정 (일반적으로 필요하지 않음)
app.static_folder = 'static'

# 데이터 로드
try:
    data = pd.read_excel(r"C:\Users\이찬우\Desktop\Coding\HTML\Code\2023-2_연세대_점수+최종합격대학.xlsx")
except Exception as e:
    print(f"Error loading Excel file: {e}")

@app.route('/')
def home():
    return render_template('universities.html')

@app.route('/get-university', methods=['GET'])
def get_university():
    score = request.args.get('score', type=float)
    result = data[data['환산 점수'] == score]

    if not result.empty:
        university = result.iloc[0]['최종 배정 대학']
        return jsonify({'university': university})
    else:
        return jsonify({'error': '해당 점수에 대한 데이터가 없습니다.'})

if __name__ == '__main__':
    app.run(debug=True)
