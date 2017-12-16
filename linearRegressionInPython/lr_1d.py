import numpy as np
import matplotlib.pyplot as plt

# load the data
X = []
Y = []
for line in open('data_1d.csv'):
    x, y = line.split(',')
    X.append(float(x))
    Y.append(float(y))

# convert X and Y into numpy arrays

X = np.array(X)
Y = np.array(Y)

# plot the data

plt.scatter(X,Y)
plt.show()


# apply equations to calculate a and b

denominator = X.dot(X) - X.mean() * X.sum()

a = ( X.dot(Y) - Y.mean()*X.sum() ) / denominator
b = ( Y.mean() * X.dot(X) - X.mean() * X.dot(Y) ) / denominator

# calculate predicted Y

Ycap = a*X + b

# plot all of them

plt.scatter(X,Y)
plt.plot(X,Ycap)
plt.show()

# calculate r-squared

d1 = Y - Ycap
d2 = Y - Y.mean()
r2 = 1 - d1.dot(d1) / d2.dot(d2)

print "squared error is: ", r2
